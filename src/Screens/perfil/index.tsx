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

import logoPromocao from "../../assets/promocao.png";
import voltar from "../../assets/voltar.png";
import logoPerfil from "../../assets/icone_perfil.png";
import logoMenu from "../../assets/menu_1.png";
import logoHome from "../../assets/home.png";
import logoMenu2 from "../../assets/menu_2.png";
import computador from "../../assets/tela_computador.png";
import caixa_rayzen from "../../assets/caixa_ryzen.png";
import fonex from "../../assets/fonex.png";


import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function Perfil() {
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
    const handleNavigatePagamento = () => {
      navigation.navigate('Pagamento');
    }
    const handleNavigateVoltar = () => {
      navigation.goBack();
    }
    const handleNavigateInicio = () => {
      navigation.navigate('SignIn');
    }
    return (

    <View style={styles.container}>
      <Text  style={styles.title} > Perfil </Text>
      <Text style={styles.espaco_menor}>
         {'\n'}
        </Text>
      <View  style={styles.container_linha_sacola}>

            <Image
            source={perfil}
            style={styles.itemLoja}
            resizeMode="stretch"
            />
      <View style={styles.container_sacola} >
          <Text style={styles.title}>
            Gustavo Moreira
          </Text>
          <Text style={styles.subtitle}>
         gustavo.moreira@gmail.com
          </Text>

        </View>
        </View>

        <Text style={styles.espaco}>
         {'\n'}
          </Text>
        <Text style={styles.sub_title}>
         Configurações
          </Text>
          <Text style={styles.label}>
         Editar Perfil
          </Text>
          <Image
        source={linha}
        style={styles.linha}
      />  
          <Text style={styles.label}>
         Alterar Senha
          </Text>
        <Image
        source={linha}
        style={styles.linha}
       />  
        <Text style={styles.sub_title}>
         Suporte
          </Text>
          <Text style={styles.label}>
         Ajuda e suporte
          </Text>
          <Image
        source={linha}
        style={styles.linha}
      />  
          <Text style={styles.label}>
         Sobre MW Marketplace
          </Text>
<Image
        source={linha}
        style={styles.linha}
      />  
<Text style={styles.espaco_menor}>
         {'\n'}
          </Text>
      <Text style={styles.label} onPress={handleNavigateInicio}> 
         Deslogar
          </Text>

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


    </View>

  );
}