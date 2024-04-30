// Context.js
import React, { createContext, useState, ReactNode } from 'react';

interface SubtotalContextType {
  subtotal: number;
  updateSubtotal: (newSubtotal: number) => void;
}

export const OrderContext = createContext<SubtotalContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [subtotal, setSubtotal] = useState(0);


  const updateSubtotal = (newSubtotal: number) => {
    setSubtotal(newSubtotal);
  };

  return (
    <OrderContext.Provider value={{ subtotal, updateSubtotal }}>
      {children}
    </OrderContext.Provider>
  );
};
