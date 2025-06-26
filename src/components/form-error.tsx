interface FormErrorProps {
  error: string;
}

export function FormError({ error }: FormErrorProps) {
  return <p className='text-xs text-red-600'>{error}</p>;
}
