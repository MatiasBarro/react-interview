import { useState } from 'react';

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
