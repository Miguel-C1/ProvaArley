import React, { ReactNode, createContext, useState } from 'react';
import { searchFood } from '../services/foodService';



interface FoodContextType {
    foods: any[];
    searchFood: (term: string) => Promise<void>;
  }

export const FoodContext = createContext<FoodContextType | undefined>(undefined);


export const FoodProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [foods, setFoods] = useState<any[]>([]);
  
    const searchFoodHandler = async (term: string) => {
      const result = await searchFood(term);
      setFoods(result);
    };

  return (
    <FoodContext.Provider value={{ foods, searchFood: searchFoodHandler }}>
      {children}
    </FoodContext.Provider>
  );
};
