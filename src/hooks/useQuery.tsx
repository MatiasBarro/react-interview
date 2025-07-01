import { useState } from 'react';
import { toast } from 'sonner';

export function isApiError(error: any): error is { message: string } {
  return error.message !== undefined;
}

export function useQuery<T>(request: () => Promise<T>, defaultValue: T) {
  const [data, setData] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(false);

  const performQuery = async () => {
    setIsLoading(true);
    try {
      const data = await request();
      setData(data);
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
    data,
    performQuery,
  };
}
