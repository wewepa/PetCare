// src/styles/PetDetailStyles.js
import { StyleSheet } from 'react-native';

const MINT = '#4DB6AC';
const MINT_LIGHT = '#E0F2F1';
const MINT_DARK = '#00897B';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MINT_LIGHT,
  },
  imageContainer: {
    width: '100%',
    height: 260,
    backgroundColor: MINT_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  petEmoji: {
    fontSize: 120,
  },
  card: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -32,
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 28,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  petName: {
    fontSize: 30,
    fontWeight: '800',
    color: '#2E4A47',
  },
  genderBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  genderM: {
    backgroundColor: '#DCEEFF',
  },
  genderF: {
    backgroundColor: '#FFE4F0',
  },
  genderText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#555',
  },
  petBreed: {
    fontSize: 15,
    color: '#90A4A2',
    marginBottom: 22,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: MINT_LIGHT,
    borderRadius: 22,
    padding: 22,
    marginBottom: 26,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    height: 36,
    backgroundColor: '#B2DFDB',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: MINT_DARK,
  },
  statLabel: {
    fontSize: 12,
    color: '#90A4A2',
    marginTop: 4,
  },
  sectionLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2E4A47',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6B8A88',
    lineHeight: 22,
    marginBottom: 24,
  },
  favoriteButton: {
    borderWidth: 2,
    borderColor: MINT,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  favoriteButtonActive: {
    backgroundColor: MINT_LIGHT,
    borderColor: MINT_DARK,
  },
  favoriteButtonText: {
    color: MINT_DARK,
    fontSize: 16,
    fontWeight: '700',
  },
  backButton: {
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#F0F0F0',
  },
  backButtonText: {
    fontSize: 15,
    color: '#666',
    fontWeight: '600',
  },
});

export default styles;