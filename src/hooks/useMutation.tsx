import { useState } from 'react';
import { isApiError } from './useQuery';
import { toast } from 'sonner';

export function useMutation<U extends any[], T>(request: (...args: U) => Promise<T>) {
  const [isLoading, setIsLoading] = useState(false);

  const mutationRequest = async (...args: U) => {
    setIsLoading(true);
    try {
      const data = await request(...args);
      return data;
    } catch (error) {
      console.error(error);

      if (isApiError(error)) {
        toast.error(error.message);
        return;
      }

      toast.error('Unexpected error');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    mutationRequest,
  };
}
