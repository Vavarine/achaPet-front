import { useContext } from 'react';
import { PetModalContext } from '../contexts/PetModalContext';

export default function useAuth() {
  const petModalContext = useContext(PetModalContext);

  return petModalContext;
}
