'use client';
import { useState, createContext } from 'react';
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [subTtl, setSubTtl] = useState('');
  return (
    <Context.Provider
      value={{
        subTtl,
        setSubTtl,
      }}>
      {children}
    </Context.Provider>
  );
};
