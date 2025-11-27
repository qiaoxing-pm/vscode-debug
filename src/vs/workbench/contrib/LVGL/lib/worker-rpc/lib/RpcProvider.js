import Event from "../../microevent.ts/lib/Event.js";

const MSG_RESOLVE_TRANSACTION = "resolve_transaction";
const MSG_REJECT_TRANSACTION = "reject_transaction";
const MSG_ERROR = "error";

export default class RpcProvider {
	constructor(_dispatch, _rpcTimeout = 0) {
		this._dispatch = _dispatch;
		this._rpcTimeout = _rpcTimeout;
		this.error = new Event();
		this._rpcHandlers = {};
		this._signalHandlers = {};
		this._pendingTransactions = {};
		this._nextTransactionId = 0;
	}

	dispatch(payload) {
		const message = payload;
		switch (message.type) {
			case RpcProvider.MessageType.signal:
				return this._handleSignal(message);
			case RpcProvider.MessageType.rpc:
				return this._handleRpc(message);
			case RpcProvider.MessageType.internal:
				return this._handleInternal(message);
			default:
				this._raiseError("invalid message type " + message.type);
		}
	}

	rpc(id, payload, transfer) {
		const transactionId = this._nextTransactionId++;
		this._dispatch({
			type: RpcProvider.MessageType.rpc,
			transactionId,
			id,
			payload
		}, transfer ? transfer : undefined);

		return new Promise((resolve, reject) => {
			const transaction = this._pendingTransactions[transactionId] = {
				id: transactionId,
				resolve,
				reject
			};
			if (this._rpcTimeout > 0) {
				transaction.timeoutHandle = setTimeout(() => this._transactionTimeout(transaction), this._rpcTimeout);
			}
		});
	}

	signal(id, payload, transfer) {
		this._dispatch({
			type: RpcProvider.MessageType.signal,
			id,
			payload
		}, transfer ? transfer : undefined);
		return this;
	}

	registerRpcHandler(id, handler) {
		if (this._rpcHandlers[id]) throw new Error(`rpc handler for ${id} already registered`);
		this._rpcHandlers[id] = handler;
		return this;
	}

	registerSignalHandler(id, handler) {
		if (!this._signalHandlers[id]) this._signalHandlers[id] = [];
		this._signalHandlers[id].push(handler);
		return this;
	}

	deregisterRpcHandler(id) {
		if (this._rpcHandlers[id]) delete this._rpcHandlers[id];
		return this;
	}

	deregisterSignalHandler(id, handler) {
		if (this._signalHandlers[id]) {
			this._signalHandlers[id] = this._signalHandlers[id].filter(h => h !== handler);
		}
		return this;
	}

	_raiseError(error) {
		this.error.dispatch(new Error(error));
		this._dispatch({
			type: RpcProvider.MessageType.internal,
			id: MSG_ERROR,
			payload: error
		});
	}

	_handleSignal(message) {
		if (!this._signalHandlers[message.id]) return this._raiseError("invalid signal " + message.id);
		this._signalHandlers[message.id].forEach(handler => handler(message.payload));
	}

	_handleRpc(message) {
		if (!this._rpcHandlers[message.id]) return this._raiseError("invalid rpc " + message.id);
		Promise.resolve(this._rpcHandlers[message.id](message.payload))
			.then(result => this._dispatch({
				type: RpcProvider.MessageType.internal,
				id: MSG_RESOLVE_TRANSACTION,
				transactionId: message.transactionId,
				payload: result
			}), reason => this._dispatch({
				type: RpcProvider.MessageType.internal,
				id: MSG_REJECT_TRANSACTION,
				transactionId: message.transactionId,
				payload: reason
			}));
	}

	_handleInternal(message) {
		const transaction = typeof message.transactionId !== 'undefined' ? this._pendingTransactions[message.transactionId] : undefined;
		switch (message.id) {
			case MSG_RESOLVE_TRANSACTION:
				if (!transaction) return this._raiseError(`no pending transaction with id ${message.transactionId}`);
				transaction.resolve(message.payload);
				this._clearTransaction(transaction);
				break;
			case MSG_REJECT_TRANSACTION:
				if (!transaction) return this._raiseError(`no pending transaction with id ${message.transactionId}`);
				transaction.reject(message.payload);
				this._clearTransaction(transaction);
				break;
			case MSG_ERROR:
				this.error.dispatch(new Error("remote error: " + message.payload));
				break;
			default:
				this._raiseError("unhandled internal message " + message.id);
		}
	}

	_transactionTimeout(transaction) {
		transaction.reject('transaction timed out');
		this._raiseError(`transaction ${transaction.id} timed out`);
		delete this._pendingTransactions[transaction.id];
	}

	_clearTransaction(transaction) {
		if (transaction.timeoutHandle) clearTimeout(transaction.timeoutHandle);
		delete this._pendingTransactions[transaction.id];
	}
}

// 内部枚举类型
RpcProvider.MessageType = {
	signal: 0,
	rpc: 1,
	internal: 2
};
