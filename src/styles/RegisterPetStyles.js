// src/styles/RegisterPetStyles.js
import { StyleSheet } from 'react-native';

const MINT = '#4DB6AC';
const MINT_LIGHT = '#E0F2F1';
const MINT_DARK = '#00897B';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFFE',
  },
  scroll: {
    padding: 20,
  },
  headerContainer: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#2E4A47',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#90A4A2',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,
    shadowColor: '#4DB6AC',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: MINT_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardIcon: {
    fontSize: 22,
  },
  cardContent: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: MINT_DARK,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardInput: {
    fontSize: 16,
    color: '#2E4A47',
    padding: 0,
    fontWeight: '500',
  },
  cardInputFilled: {
    color: '#2E4A47',
  },
  rowCards: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 0,
  },
  halfCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    flex: 1,
    shadowColor: '#4DB6AC',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 14,
  },
  halfCardIcon: {
    fontSize: 22,
    marginBottom: 8,
  },
  halfCardLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: MINT_DARK,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  halfCardInput: {
    fontSize: 16,
    color: '#2E4A47',
    padding: 0,
    fontWeight: '500',
  },
  validationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  validationText: {
    fontSize: 13,
    color: '#F59E0B',
    marginLeft: 6,
    fontWeight: '500',
  },
  validationSuccess: {
    backgroundColor: MINT_LIGHT,
  },
  validationSuccessText: {
    color: MINT_DARK,
  },
  registerButton: {
    backgroundColor: MINT_DARK,
    borderRadius: 18,
    padding: 18,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: MINT_DARK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  registerButtonDisabled: {
    backgroundColor: '#B2DFDB',
    shadowOpacity: 0,
    elevation: 0,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  clearButton: {
    borderRadius: 18,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    marginBottom: 30,
  },
  clearButtonText: {
    color: '#90A4A2',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;