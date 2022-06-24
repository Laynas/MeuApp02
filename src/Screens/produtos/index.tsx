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
import logoPromocao from "../../assets/promocao.png";
import logoCesta from "../../assets/carrinho.png";
import logoPerfil from "../../assets/icone_perfil.png";
import logoMenu from "../../assets/menu_1.png";
import logoHome from "../../assets/home.png";
import logoMenu2 from "../../assets/menu_2.png";

import computador from "../../assets/tela_computador.png";
import caixa_rayzen from "../../assets/caixa_ryzen.png";
import fonex from "../../assets/fonex.png";


import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import linha from "../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';

import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function Produtos() {
    const navigation = useNavigation<any>();

    const handleNavigateProdutos = () => {
      navigation.navigate('Produtos');
      // navigation.goBack();
    }

    const handleNavigatePerfil = () => {
        navigation.navigate('Perfil');
        // navigation.goBack();
      }

      const handleNavigateCarrinho = () => {
        navigation.navigate('Carrinho');
        // navigation.goBack();
      }
      const handleNavigateHome = () => {
        navigation.navigate('Home');
        // navigation.goBack();
      }
    return (
    <View style={styles.container}>
        
      <View style={styles.container_linha}>
      <Text style={styles.title}>
          Produtos
        </Text>

        <Text onPress={handleNavigateCarrinho}>
       <Image
          source={logoCesta}
          style={styles.imageCesta}
          resizeMode="stretch"
        />
        </Text> 
      </View>

      
      <Text style={styles.label}>
          O que você esta procurando?{'\n'}
        </Text>
        
        <TextInput style={styles.input} placeholder="Pesquise aqui..."
          keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>

      <View style={styles.content}>
      <Text onPress={handleNavigateCarrinho}> 
        <View style={styles.container} >
          <Image
          source={computador}
          style={styles.itemLoja}
          resizeMode="stretch"
        />
          <Text style={styles.title}>
            McBook Air de 13"
          </Text>
          <Text style={styles.subtitle}>
            Loja Sistech Eletronicos
          </Text>
          <Text style={styles.preco}>
            R$ 7.999,99
          </Text>

        </View>
        </Text>

        <Text onPress={handleNavigateCarrinho}> 
        <View style={styles.container} >
          <Image
          source={caixa_rayzen}
          style={styles.itemLoja}
          resizeMode="stretch"
        />
          <Text style={styles.title}>
            AMD Ryzen 7 5800X
          </Text>
          <Text style={styles.subtitle}>
          Loja Sistech Eletronicos
          </Text>
          <Text style={styles.preco}>
            R$ 2.880,00
          </Text>

        </View>
        </Text>
        <Text onPress={handleNavigateCarrinho}> 
        <View style={styles.container} >
          <Image
          source={fonex}
          style={styles.itemLoja}
          resizeMode="stretch"
        />
          <Text style={styles.title}>
            Headset Hyperx
          </Text>
          <Text style={styles.subtitle}>
            Loja Eletrosystem
          </Text>
          <Text style={styles.preco}>
            R$ 299,99
          </Text>

        </View>
        </Text>
      </View>

      <View style={styles.controlsbutons} >
        <View style={styles.container_linha}>
        <Text onPress={handleNavigateHome}>
        <Image
          source={logoHome}
          style={styles.imageCesta}
          resizeMode="stretch"
        />
        </Text> 
      <Text onPress={handleNavigateProdutos}>
       <Image
          source={logoMenu}
          style={styles.imageCesta}
          resizeMode="stretch"
        />
        </Text> 

         <Image
          source={logoMenu2}
          style={styles.imageCesta}
          resizeMode="stretch"
        />
      <Text onPress={handleNavigatePerfil}>
       <Image
          source={logoPerfil}
          style={styles.imageCesta}
          resizeMode="stretch"
        />
        </Text> 
        </View>
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