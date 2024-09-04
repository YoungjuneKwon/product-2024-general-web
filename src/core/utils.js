export function asyncWaitFor(cond) {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (cond()) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }
  