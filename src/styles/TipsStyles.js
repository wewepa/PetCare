import { StyleSheet } from 'react-native';

const MINT_DARK = '#00897B';
const MINT_MED = '#4DB6AC';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFFE',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#2E4A47',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#90A4A2',
    fontWeight: '700',
    letterSpacing: 1,
  },
  interactiveZone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerRing: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#E0F2F1',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  innerCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  mainEmoji: {
    fontSize: 70,
  },
  textContainer: {
    alignItems: 'center',
  },
  tipTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: MINT_DARK,
    textAlign: 'center',
    marginBottom: 10,
  },
  tipDescription: {
    fontSize: 16,
    color: '#546E7A',
    textAlign: 'center',
    lineHeight: 24,
  },
  interactionSection: {
    marginVertical: 20,
  },
  interactionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2E4A47',
    marginBottom: 10,
  },
  chipScroll: {
    paddingBottom: 10,
  },
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
  },
  chipActive: {
    backgroundColor: MINT_DARK,
    borderColor: MINT_DARK,
  },
  chipInactive: {
    backgroundColor: '#FFF',
    borderColor: '#E0F2F1',
  },
  chipText: {
    fontWeight: '700',
    fontSize: 13,
  },
  textWhite: { color: '#FFF' },
  textMint: { color: MINT_MED },
  footer: {
    paddingBottom: 30,
  },
  nextButton: {
    backgroundColor: '#2E4A47',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 16,
  },
  autoText: {
    textAlign: 'center',
    fontSize: 11,
    color: '#B2CBCA',
    marginTop: 10,
  },
});