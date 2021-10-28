import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { Pet } from '../types';

interface PetModalInterface {
  isOpen: boolean;
  pet?: Pet;
  toggleModal: () => void;
  openModal: (petToShow: Pet) => void;
  setPet: Dispatch<SetStateAction<Pet>>;
}

interface PetModalProviderProps {
  children: ReactNode;
}

export const PetModalContext = createContext({} as PetModalInterface);

export default function AuthContextProvider({
  children,
}: PetModalProviderProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [pet, setPet] = useState<Pet>();

  function openModal(petToShow: Pet) {
    setPet(petToShow);
    setIsOpen(true);
  }

  function toggleModal() {
    setIsOpen(oldValue => !oldValue);
  }

  return (
    <PetModalContext.Provider
      value={{ isOpen, pet, toggleModal, openModal, setPet }}
    >
      {children}
    </PetModalContext.Provider>
  );
}
