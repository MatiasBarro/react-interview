export interface PollingResult<T> {
  status: 'success' | 'pending' | 'timeout';
  data?: T;
  done: boolean;
}

export async function* pollApi<T>(
  apiCall: () => Promise<T>,
  checkCondition: (response: T) => boolean,
  timeoutMs: number,
  intervalMs = 2000,
): AsyncGenerator<PollingResult<T>> {
  const startTime = Date.now();

  while (Date.now() - startTime < timeoutMs) {
    const data = await apiCall();

    if (data && checkCondition(data)) {
      yield { status: 'success', data: data, done: true };
      return;
    } else {
      yield { status: 'pending', data: data, done: false };
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  }
  yield { status: 'timeout', done: true }; // Timeout reached
}
