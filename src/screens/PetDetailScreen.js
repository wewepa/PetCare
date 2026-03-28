// src/screens/PetDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/PetDetailStyles';

function getEmoji(species) {
  const map = { Perro: '🐶', Gato: '🐱', Conejo: '🐰', Pajaro: '🐦' };
  return map[species] || '🐾';
}

const DESCRIPTIONS = {
  Perro: 'Es muy jugueton y leal. Le encanta correr y pasar tiempo con personas. Se lleva bien con ninos y otros animales.',
  Gato: 'Es independiente pero muy carinoso. Disfruta de los mimos y los espacios tranquilos en casa.',
  Conejo: 'Es timido al principio pero muy dulce. Necesita espacio para saltar y una dieta balanceada.',
  Pajaro: 'Es muy expresivo y curioso. Le encanta cantar y aprender nuevas palabras con su familia.',
};

const PetDetailScreen = ({ route, navigation }) => {
  // route.params: receives and destructures pet data from PetListScreen
  const { pet } = route.params;

  // useState: favorite toggle and visit counter
  const [isFavorite, setIsFavorite] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  // useEffect with dependency: update header title when pet param changes
  useEffect(() => {
    navigation.setOptions({ title: pet.name });
  }, [pet, navigation]);

  // useEffect to increment visit counter on mount
  useEffect(() => {
    setVisitCount((prev) => prev + 1);
  }, []);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const description = DESCRIPTIONS[pet.species] || 'Una mascota especial que busca un hogar lleno de amor.';

  return (
    <SafeAreaView style={styles.container}>
      {/* Emoji header */}
      <View style={styles.imageContainer}>
        <Text style={styles.petEmoji}>{getEmoji(pet.species)}</Text>
      </View>

      {/* White card */}
      <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>

        {/* Name and gender */}
        <View style={styles.nameRow}>
          <Text style={styles.petName}>{pet.name}</Text>
          <View style={[styles.genderBadge, pet.gender === 'M' ? styles.genderM : styles.genderF]}>
            <Text style={styles.genderText}>{pet.gender === 'M' ? 'Macho' : 'Hembra'}</Text>
          </View>
        </View>

        <Text style={styles.petBreed}>{pet.breed} · {pet.species}</Text>

        {/* Stats: age, weight, visits */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{pet.age}</Text>
            <Text style={styles.statLabel}>Anos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{pet.weight} kg</Text>
            <Text style={styles.statLabel}>Peso</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{visitCount}</Text>
            <Text style={styles.statLabel}>Visitas</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.sectionLabel}>Sobre {pet.name}</Text>
        <Text style={styles.description}>{description}</Text>

        {/* Favorite button */}
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
          onPress={handleToggleFavorite}
          activeOpacity={0.8}
        >
          <Text style={styles.favoriteButtonText}>
            {isFavorite ? 'En favoritos' : 'Agregar a favoritos'}
          </Text>
        </TouchableOpacity>

        {/* Back button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Volver a la lista</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PetDetailScreen;