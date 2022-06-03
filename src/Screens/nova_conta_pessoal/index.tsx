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

import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function Nova_conta_pessoal() {
    const navigation = useNavigation<any>();

    const handleNavigateContinuar = () => {
      navigation.navigate('Nova_conta_endereco');
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
          Insira os dados pessoais {'\n'}
        </Text>

        <Text style={styles.label}>
          Nome {'\n'}
        </Text>
        
        <TextInput style={styles.input} placeholder="Insira seu nome"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>

        <Text style={styles.label}>
         Sobrenome {'\n'}
        </Text>
        
        <TextInput style={styles.input} placeholder="Insira seu nome sobrenome"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>
        
        <Text style={styles.label}>
          Celular {'\n'}
        </Text>
        
        <TextInput style={styles.input} placeholder="Insira seu celular"
          keyboardType='numeric'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>
        <Text style={styles.label}>
          Telefone {'\n'}
        </Text>
        
        <TextInput style={styles.input} placeholder="Insira seu telefone"
          keyboardType='numeric'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>

        

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