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
import confirmado from "../../assets/Cadastro_Confirmado.png";

import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function Sucesso() {
    const navigation = useNavigation<any>();

    const handleNavigateEntrar = () => {
      navigation.navigate('SignIn');
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
    <Image
        source={confirmado}
        style={styles.imageGrande}
        resizeMode="stretch"
      />
      <View style={styles.content}>

        <Text style={styles.title}>      
          Seu perfil foi criado com sucesso {'\n'}
        </Text>

        <Text style={styles.sub_title}>      
          Realize o login com as credenciais inseridas {'\n'}
        </Text>

              </View>

      <View style={styles.controlsbutons} >
        <Button
          title="Entrar" onPress={handleNavigateEntrar}
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