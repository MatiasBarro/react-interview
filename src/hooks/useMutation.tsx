import { useState } from 'react';

export function useMutation<U extends any[], T>(request: (...args: U) => Promise<T>) {
  const [isLoading, setIsLoading] = useState(false);

  const mutationRequest = async (...args: U) => {
    setIsLoading(true);
    try {
      const data = await request(...args);
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    mutationRequest,
  };
}
