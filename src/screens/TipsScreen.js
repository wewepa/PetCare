// src/screens/TipsScreen.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { CARE_TIPS } from '../data/tipsData';
import styles from '../styles/TipsStyles';

const TIP_EMOJIS = ['💧', '🏃', '🏥', '🍖', '🦷', '🎾', '🪲'];
const MAX_TIPS = CARE_TIPS.length;

export default function TipsScreen() {
  // useState: manages the current tip index
  const [currentIndex, setCurrentIndex] = useState(0);

  // useState: stores the counter message shown to the user
  const [counterMessage, setCounterMessage] = useState('');

  // useEffect with empty array + cleanup: auto-rotates tips every 5 seconds
  // returns clearInterval to prevent memory leaks when component unmounts
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MAX_TIPS);
    }, 5000);

    // Cleanup function: clears the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // useEffect with dependency: updates counter message every time currentIndex changes
  useEffect(() => {
    setCounterMessage(`Consejo ${currentIndex + 1} de ${MAX_TIPS}`);
  }, [currentIndex]);

  // Manually advances to the next tip
  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % MAX_TIPS);
  }

  const currentTip = CARE_TIPS[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Guia Pro</Text>
        <Text style={styles.headerSubtitle}>{counterMessage}</Text>
      </View>

      <View style={styles.interactiveZone}>
        {/* Interactive visual circle */}
        <View style={styles.outerRing}>
          <View style={styles.innerCircle}>
            <Text style={styles.mainEmoji}>{TIP_EMOJIS[currentIndex % TIP_EMOJIS.length]}</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.tipTitle}>{currentTip.title}</Text>
          <Text style={styles.tipDescription}>{currentTip.description}</Text>
        </View>
      </View>

      {/* Manual topic selector chips */}
      <View style={styles.interactionSection}>
        <Text style={styles.interactionTitle}>Saltar a un tema:</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipScroll}
        >
          {CARE_TIPS.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCurrentIndex(index)}
              style={[
                styles.chip,
                index === currentIndex ? styles.chipActive : styles.chipInactive,
              ]}
            >
              <Text style={[
                styles.chipText,
                index === currentIndex ? styles.textWhite : styles.textMint,
              ]}>
                {TIP_EMOJIS[index % TIP_EMOJIS.length]} Tip {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Siguiente consejo</Text>
        </TouchableOpacity>
        <Text style={styles.autoText}>Actualizacion automatica cada 5 segundos</Text>
      </View>
    </SafeAreaView>
  );
}