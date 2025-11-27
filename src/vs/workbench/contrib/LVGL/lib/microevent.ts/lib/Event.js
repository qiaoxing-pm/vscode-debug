"use strict";

const factories = [];
factories[0] = function () {
    return function dispatcher0() { };
};
factories[1] = function (callback, context) {
    if (typeof context === 'undefined')
        return callback;
    return function dispatcher1(payload) {
        callback(payload, context);
    };
};

function getFactory(handlerCount) {
    if (!factories[handlerCount])
        factories[handlerCount] = compileFactory(handlerCount);
    return factories[handlerCount];
}

function compileFactory(handlerCount) {
    let src = 'return function dispatcher' + handlerCount + '(payload) {\n';
    const argsHandlers = [], argsContexts = [];
    for (let i = 0; i < handlerCount; i++) {
        argsHandlers.push('cb' + i);
        argsContexts.push('ctx' + i);
        src += '    cb' + i + '(payload, ctx' + i + ');\n';
    }
    src += '};';

    return new (Function.bind.apply(
        Function,
        [void 0].concat(argsHandlers.concat(argsContexts), [src])
    ))();
}

export default class Event {
    constructor() {
        this.hasHandlers = false;
        this._handlers = [];
        this._contexts = [];
        this._createDispatcher();
    }

    addHandler(handler, context) {
        if (!this.isHandlerAttached(handler, context)) {
            this._handlers.push(handler);
            this._contexts.push(context);
            this._createDispatcher();
            this._updateHasHandlers();
        }
        return this;
    }

    removeHandler(handler, context) {
        const idx = this._getHandlerIndex(handler, context);
        if (typeof idx !== 'undefined') {
            this._handlers.splice(idx, 1);
            this._contexts.splice(idx, 1);
            this._createDispatcher();
            this._updateHasHandlers();
        }
        return this;
    }

    isHandlerAttached(handler, context) {
        return typeof this._getHandlerIndex(handler, context) !== 'undefined';
    }

    _updateHasHandlers() {
        this.hasHandlers = !!this._handlers.length;
    }

    _getHandlerIndex(handler, context) {
        const handlerCount = this._handlers.length;
        let idx;
        for (idx = 0; idx < handlerCount; idx++) {
            if (this._handlers[idx] === handler && this._contexts[idx] === context)
                break;
        }
        return idx < handlerCount ? idx : undefined;
    }

    _createDispatcher() {
        this.dispatch = getFactory(this._handlers.length)
            .apply(this, this._handlers.concat(this._contexts));
    }
}
