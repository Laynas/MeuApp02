import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import linha from "../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';
import logo from "../../assets/icon.png";
import perfil from "../../assets/ImagemPerfil.png";

import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function Foto_perfil() {
    const navigation = useNavigation<any>();

    const handleNavigateContinuar = () => {
      navigation.navigate('Sucesso');
    }

    const handleNavigateVoltar = () => {
      navigation.goBack();
    }

    return (
    <View style={styles.container}>
      <Text onPress={handleNavigateVoltar} > Voltar </Text>
      <Image
        source={logo}
        style={styles.imageLogo}
        resizeMode="stretch"
      />

      <View style={styles.content}>

        <Text style={styles.title}>      
          Para finalizar, insira uma foto de perfil {'\n'}
        </Text>

        <Image
        source={perfil}
        style={styles.imageGrande}
        resizeMode="stretch"
      />
        <Text style={styles.sub_title}>      
          Selecione sua foto{'\n'}
        </Text>

      </View>

      <View style={styles.controlsbutons} >
        <Button
          title="Pular esta etapa" onPress={handleNavigateContinuar}
        />
      </View>
      <View style={styles.controlsbutons} >
        <Button
          title="Continuar" onPress={handleNavigateContinuar}
        />
      </View>

      
      <Image
        source={linha}
        style={styles.linha}
      />
      <View style={styles.controls} >
        <Image
          source={google}
          style={styles.linha}
        />
        <Image
          source={facebook}
          style={styles.linha}
        />
        <Image
          source={apple}
          style={styles.linha}
        />
      </View>

    </View>

  );
}