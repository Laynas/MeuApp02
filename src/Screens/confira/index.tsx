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
import email from "../../assets/Email_Confirmado.png";


import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function Confira() {
    const navigation = useNavigation<any>();

    const handleNavigateConfira = () => {
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
        source={email}
        style={styles.imageGrande}
        resizeMode="stretch"
      />
      
      <View style={styles.content}>

        <Text style={styles.title}>
          Confira o seu e-mail{'\n'}
        </Text>

        <Text style={styles.sub_title}>
         Enviamos as instruções em seu e-mail {'\n'}
        </Text>

      </View>

      <View style={styles.controlsbutons} >
        <Button
          title="Entrar" onPress={handleNavigateConfira}

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