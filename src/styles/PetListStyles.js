// src/styles/PetListStyles.js
import { StyleSheet } from 'react-native';

const MINT = '#4DB6AC';
const MINT_LIGHT = '#E0F2F1';
const MINT_DARK = '#00897B';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerGreeting: {
    fontSize: 13,
    color: '#80CBC4',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2E4A47',
    marginTop: 2,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: MINT_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: MINT,
  },
  avatarText: {
    fontSize: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 8,
    gap: 10,
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 18,
    backgroundColor: '#FFF',
    marginRight: 10,
    shadowColor: '#4DB6AC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryButtonActive: {
    backgroundColor: MINT_DARK,
  },
  categoryEmoji: {
    fontSize: 28,
  },
  categoryLabel: {
    fontSize: 10,
    color: '#888',
    marginTop: 4,
    fontWeight: '600',
  },
  categoryLabelActive: {
    color: '#FFF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E4A47',
    paddingHorizontal: 20,
    marginTop: 8,
    marginBottom: 10,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    shadowColor: '#4DB6AC',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  petImage: {
    width: 68,
    height: 68,
    borderRadius: 16,
    backgroundColor: MINT_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  petEmoji: {
    fontSize: 38,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2E4A47',
  },
  petBreed: {
    fontSize: 13,
    color: '#90A4A2',
    marginTop: 2,
  },
  petAge: {
    fontSize: 12,
    color: '#B2CBCA',
    marginTop: 5,
  },
  genderBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderM: {
    backgroundColor: '#DCEEFF',
  },
  genderF: {
    backgroundColor: '#FFE4F0',
  },
  genderText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#555',
  },
});

export default styles;