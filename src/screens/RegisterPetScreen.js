// src/screens/RegisterPetScreen.js
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  View,
} from 'react-native';
import styles from '../styles/RegisterPetStyles';
import { usePets } from '../context/PetsContext';

export default function RegisterPetScreen({ navigation }) {
  const { addPet } = usePets();

  // useState (multiple): one independent state per field
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('M');

  // useState: controls whether the register button is enabled
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect with dependencies: validates form in real time
  useEffect(() => {
    const allFilled =
      name.trim() && species.trim() && breed.trim() && age.trim() && weight.trim();
    setIsFormValid(!!allFilled);
  }, [name, species, breed, age, weight]);

  // Adds the pet to global context and navigates to list
  function handleRegister() {
    Alert.alert(
      'Mascota Registrada',
      `${name} fue agregado a la lista exitosamente.`,
      [
        {
          text: 'Ver lista',
          onPress: () => {
            addPet({
              name,
              species,
              breed,
              age: Number(age),
              weight: Number(weight),
              gender,
            });
            handleClear();
            navigation.navigate('Mascotas');
          },
        },
      ]
    );
  }

  // Resets all fields to their initial empty value
  function handleClear() {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
    setGender('M');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Nueva Mascota</Text>
            <Text style={styles.headerSubtitle}>Completa los datos para registrarla</Text>
          </View>

          {/* Name */}
          <View style={styles.card}>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>🏷️</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Nombre</Text>
              <TextInput
                style={styles.cardInput}
                placeholder="Ej: Max"
                placeholderTextColor="#C5D5D4"
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>

          {/* Species */}
          <View style={styles.card}>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>🐾</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Especie</Text>
              <TextInput
                style={styles.cardInput}
                placeholder="Ej: Perro, Gato..."
                placeholderTextColor="#C5D5D4"
                value={species}
                onChangeText={setSpecies}
              />
            </View>
          </View>

          {/* Breed */}
          <View style={styles.card}>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>🔍</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Raza</Text>
              <TextInput
                style={styles.cardInput}
                placeholder="Ej: Labrador"
                placeholderTextColor="#C5D5D4"
                value={breed}
                onChangeText={setBreed}
              />
            </View>
          </View>

          {/* Age and Weight */}
          <View style={styles.rowCards}>
            <View style={styles.halfCard}>
              <Text style={styles.halfCardIcon}>🎂</Text>
              <Text style={styles.halfCardLabel}>Edad</Text>
              <TextInput
                style={styles.halfCardInput}
                placeholder="Ej: 3"
                placeholderTextColor="#C5D5D4"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.halfCard}>
              <Text style={styles.halfCardIcon}>⚖️</Text>
              <Text style={styles.halfCardLabel}>Peso (kg)</Text>
              <TextInput
                style={styles.halfCardInput}
                placeholder="Ej: 10"
                placeholderTextColor="#C5D5D4"
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Gender selector */}
          <View style={styles.card}>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>🔵</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Genero</Text>
              <View style={{ flexDirection: 'row', gap: 10, marginTop: 6 }}>
                <TouchableOpacity
                  onPress={() => setGender('M')}
                  style={{
                    paddingHorizontal: 18,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: gender === 'M' ? '#DCEEFF' : '#F0F0F0',
                  }}
                >
                  <Text style={{ fontWeight: '700', color: gender === 'M' ? '#3A7BD5' : '#999' }}>
                    Macho
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setGender('F')}
                  style={{
                    paddingHorizontal: 18,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: gender === 'F' ? '#FFE4F0' : '#F0F0F0',
                  }}
                >
                  <Text style={{ fontWeight: '700', color: gender === 'F' ? '#D5498A' : '#999' }}>
                    Hembra
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Validation */}
          <View style={[
            styles.validationContainer,
            isFormValid && styles.validationSuccess,
          ]}>
            <Text>{isFormValid ? '✅' : '⚠️'}</Text>
            <Text style={[
              styles.validationText,
              isFormValid && styles.validationSuccessText,
            ]}>
              {isFormValid
                ? 'Todo listo para registrar'
                : 'Completa todos los campos para continuar'}
            </Text>
          </View>

          {/* Register button */}
          <TouchableOpacity
            style={[styles.registerButton, !isFormValid && styles.registerButtonDisabled]}
            onPress={handleRegister}
            disabled={!isFormValid}
            activeOpacity={0.8}
          >
            <Text style={styles.registerButtonText}>Registrar Mascota</Text>
          </TouchableOpacity>

          {/* Clear button */}
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClear}
            activeOpacity={0.7}
          >
            <Text style={styles.clearButtonText}>Limpiar campos</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}