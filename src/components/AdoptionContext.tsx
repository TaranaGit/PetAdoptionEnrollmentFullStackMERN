// src/context/AdoptionContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import adoptionForm from "../models/Registry";

// Define the shape of the context
interface AdoptionContextType {
  adopt: adoptionForm[];
  addInformation: (info: adoptionForm) => void;
}

// Create the context with an initial undefined value
const AdoptionContext = createContext<AdoptionContextType | undefined>(undefined);

// Provider component
export const AdoptionProvider = ({ children }: { children: ReactNode }) => {
  const [adopt, setAdopt] = useState<adoptionForm[]>([]);

  const addInformation = (info: adoptionForm) => {
    setAdopt((prevState) => [...prevState, info]);
  };

  return (
    <AdoptionContext.Provider value={{ adopt, addInformation }}>
      {children}
    </AdoptionContext.Provider>
  );
};

// Custom hook to use the context
export const useAdoption = () => {
  const context = useContext(AdoptionContext);
  if (!context) {
    throw new Error("useAdoption must be used within an AdoptionProvider");
  }
  return context;
};
