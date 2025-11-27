type AnyFunc = (...args: any[]) => any;

interface DebounceOptions {
  leading?: boolean;   // 是否在等待间隔开始时立即调用
  trailing?: boolean;  // 是否在等待间隔结束时调用（默认 true）
  maxWait?: number;    // 最长等待时间（毫秒）
}

type Debounced<T extends AnyFunc> = ((...args: Parameters<T>) => ReturnType<T> | undefined) & {
  cancel: () => void;
  flush: () => ReturnType<T> | undefined;
};

export function debounce<F extends AnyFunc>(func: F, wait = 0, options: DebounceOptions = {}): Debounced<F> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<F> | null = null;
  let lastThis: any;
  let result: ReturnType<F> | undefined;
  let lastCallTime: number | null = null;
  let lastInvokeTime = 0;

  const leading = !!options.leading;
  const trailing = options.trailing !== undefined ? !!options.trailing : true;
  const maxWait = options.maxWait;

  function now() {
    return Date.now();
  }

  function invoke() {
    if (!lastArgs) return undefined;
    const res = func.apply(lastThis, lastArgs);
    result = res as ReturnType<F>;
    lastInvokeTime = now();
    lastArgs = null;
    lastThis = undefined;
    return result;
  }

  function startTimer(pendingFunc: () => void, waitMs: number) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(pendingFunc, waitMs);
  }

  function remainingWait() {
    if (lastCallTime === null) return 0;
    const timeSinceLastCall = now() - lastCallTime;
    const timeSinceLastInvoke = now() - lastInvokeTime;
    const waitLeft = wait - timeSinceLastCall;
    if (maxWait !== undefined) {
      return Math.min(waitLeft, maxWait - timeSinceLastInvoke);
    }
    return waitLeft;
  }

  function shouldInvoke() {
    if (lastCallTime === null) return false;
    const timeSinceLastCall = now() - lastCallTime;
    if (lastCallTime === null) return true;
    if (timeSinceLastCall >= wait) return true;
    if (maxWait !== undefined && (now() - lastInvokeTime) >= maxWait) return true;
    return false;
  }

  function timerExpired() {
    timer = null;
    if (shouldInvoke()) {
      // 如果应该触发（到达 wait 或 maxWait）
      if (trailing && lastArgs) {
        invoke();
      } else {
        lastArgs = null;
        lastThis = undefined;
      }
    } else {
      // 仍需等待剩余时间
      startTimer(timerExpired, remainingWait() || wait);
    }
  }

  function debounced(this: any, ...args: Parameters<F>): ReturnType<F> | undefined {
    lastArgs = args;
    lastThis = this;
    lastCallTime = now();

    const isInvoking = shouldInvoke();

    if (isInvoking) {
      // 如果满足立即调用条件
      if (!timer) {
        // no active timer
        if (leading) {
          // leading 情况下立即调用
          const res = invoke();
          // 启动一个定时器以确保 trailing 在 wait 期间不会重复触发
          if (maxWait === undefined) {
            startTimer(timerExpired, wait);
          } else {
            startTimer(timerExpired, wait);
          }
          return res;
        } else {
          // not leading but should invoke because maxWait reached
          if (maxWait !== undefined && (now() - lastInvokeTime) >= maxWait) {
            const res = invoke();
            startTimer(timerExpired, wait);
            return res;
          }
        }
      } else if (maxWait !== undefined && (now() - lastInvokeTime) >= maxWait) {
        // timer 存在但超过 maxWait，需要立即调用
        const res = invoke();
        startTimer(timerExpired, wait);
        return res;
      }
    }

    // 无需立即调用 => 确保启动计时器
    if (!timer) {
      startTimer(timerExpired, wait);
    }
    return result;
  }

  debounced.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    lastArgs = null;
    lastThis = undefined;
    lastCallTime = null;
  };

  debounced.flush = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (lastArgs) {
      return invoke();
    }
    return result;
  };

  return debounced as Debounced<F>;
}
