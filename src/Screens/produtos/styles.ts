import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';
import { Nova_conta_endereco } from '../nova_conta_endereco';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  container_linha: {
    height: 100,
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  input: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 20,
    textAlign: 'center',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 10
  },
  content: {
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 35
  },
  controlsbutons: {
    marginTop: 30,
    width: '90%',
    paddingHorizontal: 35,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 15,
  },
  controls: {
    marginTop: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5
  },
  title: {
    color: theme.colors.text,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imagePromocao: {
    marginTop: -20,
    marginBottom: 15,
    width:400,
    height: 120
  },
  imageCesta: {
    marginTop: 0,
    width:40,
    height: 40,
    background:'none'
  },
  linha: {
    marginTop: 15,
    marginBottom: 15
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
  preco: {
    color: theme.colors.text_roxo,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    lineHeight: 25,
    marginBottom: 15
  },
  itemLoja: {
    marginTop: 0,
    marginBottom: 10,
    width:120,
    height: 80,
    background:'none'
  },

});