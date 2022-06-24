import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  container_sacola: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  itemLoja: {
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 10,
    width:120,
    height: 120,
    background:'none'
  },
  container_linha_sacola: {
    height: 100,
    flexDirection: "row",
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop:10
  },
  container_linha: {
    height: 100,
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
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
  imageCesta: {
    marginTop: 0,
    width:40,
    height: 40,
    background:'none'
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

  sub_title: {
    color: theme.colors.text_cinza,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },

  imageLogo: {
    marginTop: 0,
    marginBottom: 15,
    height: 100,
    width: 100
  },

  imageGrande: {
    marginTop: 0,
    marginBottom: 15,
    marginLeft: 50,
    height: 250,
    width: 250
  },
  linha: {
    width: '80%',
    height: 1,
    margin:5,
    backgroundColor: '#000000'
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
  espaco_menor: {
    marginTop:50
     },  
     espaco: {
      marginTop:100
       },


});