import { useState, useEffect, useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export default function useStateWithStorage(key: string, defaultValue: unknown) {
  const context = useContext(OrderContext);
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    context?.updateSubtotal(value)
  }, [key, value]);

  return [value, setValue];
}

