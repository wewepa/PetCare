// src/context/PetsContext.js
import React, { createContext, useState, useContext } from 'react';

// Initial sample data
const INITIAL_PETS = [
  { id: '1', name: 'Max', species: 'Perro', breed: 'Labrador', age: 3, weight: 28, gender: 'M' },
  { id: '2', name: 'Luna', species: 'Gato', breed: 'Persa', age: 2, weight: 4, gender: 'F' },
  { id: '3', name: 'Rocky', species: 'Perro', breed: 'Bulldog', age: 5, weight: 22, gender: 'M' },
  { id: '4', name: 'Mia', species: 'Conejo', breed: 'Holandes', age: 1, weight: 2, gender: 'F' },
  { id: '5', name: 'Nala', species: 'Gato', breed: 'Ragamuffin', age: 3, weight: 5, gender: 'F' },
];

const PetsContext = createContext();

export function PetsProvider({ children }) {
  const [pets, setPets] = useState(INITIAL_PETS);

  // Adds a new pet to the list
  function addPet(pet) {
    const newPet = {
      ...pet,
      id: Date.now().toString(),
    };
    setPets((prev) => [newPet, ...prev]);
  }

  return (
    <PetsContext.Provider value={{ pets, addPet }}>
      {children}
    </PetsContext.Provider>
  );
}

// Custom hook to use the pets context
export function usePets() {
  return useContext(PetsContext);
}