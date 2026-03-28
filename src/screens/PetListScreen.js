// src/screens/PetListScreen.js
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import styles from '../styles/PetListStyles';
import { usePets } from '../context/PetsContext';

const CATEGORIES = [
  { label: 'Gatos', emoji: '🐱', species: 'Gato' },
  { label: 'Perros', emoji: '🐶', species: 'Perro' },
  { label: 'Pajaros', emoji: '🐦', species: 'Pajaro' },
  { label: 'Conejos', emoji: '🐰', species: 'Conejo' },
];

function getEmoji(species) {
  const emojis = { Perro: '🐶', Gato: '🐱', Conejo: '🐰', Pajaro: '🐦' };
  return emojis[species] || '🐾';
}

export default function PetListScreen({ navigation }) {
  // usePets: gets the global pet list from context
  const { pets } = usePets();

  // useState: manages active category filter
  const [activeCategory, setActiveCategory] = useState(null);

  // useState: manages the displayed list of pets
  const [displayedPets, setDisplayedPets] = useState([]);

  // useEffect with empty array []: loads initial pet data when component mounts
  useEffect(() => {
    setDisplayedPets(pets);
  }, []);

  // useEffect with dependency: updates displayed list when category or pets change
  useEffect(() => {
    if (activeCategory) {
      setDisplayedPets(pets.filter((p) => p.species === activeCategory));
    } else {
      setDisplayedPets(pets);
    }
  }, [activeCategory, pets]);

  // Navigates to detail screen passing the full pet object as param
  function handlePetPress(pet) {
    navigation.navigate('PetDetail', { pet });
  }

  function renderPetCard({ item }) {
    return (
      <TouchableOpacity style={styles.card} onPress={() => handlePetPress(item)}>
        <View style={styles.petImage}>
          <Text style={styles.petEmoji}>{getEmoji(item.species)}</Text>
        </View>
        <View style={styles.petInfo}>
          <Text style={styles.petName}>{item.name}</Text>
          <Text style={styles.petBreed}>{item.breed}</Text>
          <Text style={styles.petAge}>{item.age} años · {item.weight} kg</Text>
        </View>
        <View style={[styles.genderBadge, item.gender === 'M' ? styles.genderM : styles.genderF]}>
          <Text style={styles.genderText}>{item.gender}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerGreeting}>Hola de nuevo 👋</Text>
          <Text style={styles.headerTitle}>Encuentra tu mascota</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🧑</Text>
        </View>
      </View>

      {/* Horizontal category filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.label}
            style={[
              styles.categoryButton,
              activeCategory === cat.species && styles.categoryButtonActive,
            ]}
            onPress={() =>
              setActiveCategory(activeCategory === cat.species ? null : cat.species)
            }
          >
            <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
            <Text
              style={[
                styles.categoryLabel,
                activeCategory === cat.species && styles.categoryLabelActive,
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>
        {displayedPets.length} mascota{displayedPets.length !== 1 ? 's' : ''} disponible{displayedPets.length !== 1 ? 's' : ''}
      </Text>

      <FlatList
        data={displayedPets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetCard}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}