import axios from 'axios';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

// Context yaratish
const CustomCategoryContext = createContext();

// Context Provider komponenti
export const CustomCategoryProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // reFetch ni useCallback bilan memoize qilish
  const reFetch = useCallback(async () => {
    try {
      setLoading(true);
      
      const response = await axios.get('/category');
      setData(response.data); // response.data ni ishlatish
      
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect da reFetch ni ishlatish
  useEffect(() => {
    reFetch();
  }, [reFetch]);

  return (
    <CustomCategoryContext.Provider value={{ error, data, loading, reFetch }}>
      {children}
    </CustomCategoryContext.Provider>
  );
};

export default CustomCategoryContext;




// CustomInput qiymatini olish uchun funktsiya
// export const useCustomInput = () => {
//   const context = useContext(CustomCategoryContext);
//   if (!context) {
//     throw new Error('useCustomInput must be used within a CustomInputProvider');
//   }
//   return context;
// };
