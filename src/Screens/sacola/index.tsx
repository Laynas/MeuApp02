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
import voltar from "../../assets/voltar.png";
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


export function Carrinho() {
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

      const handleNavigateVoltar = () => {
        navigation.goBack();
      }
      const handleNavigatePagamento = () => {
        navigation.navigate('Pagamento');
      }
    return (
    <View style={styles.container}>

      <View style={styles.container_linha}>
      <Text onPress={handleNavigateVoltar}>
       <Image
          source={voltar}
          style={styles.imageCesta}
          resizeMode="stretch"
        />
        </Text> 
      <Text style={styles.title}>
          Sacola
        </Text>


      </View>
        

      <View style={styles.content}>
     	
      <View  style={styles.container_linha_sacola}>

          <Image
          source={computador}
          style={styles.itemLoja}
          resizeMode="stretch"
        />
    
      <View style={styles.container_sacola} >
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
        
      </View>

      <View  style={styles.container_linha_sacola}>

          <Image
          source={caixa_rayzen}
          style={styles.itemLoja}
          resizeMode="stretch"
        />
    
      <View style={styles.container_sacola} >
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
        
      </View>
      </View>

      <Text style={styles.label}>
          Cupom de desconto{'\n'}
        </Text>

        <TextInput style={styles.input} placeholder="Insira aqui o cupom de desconto.."
          keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>

        <View style={styles.controls} >
          <Text style={styles.subtitle}>
            Subtotal
          </Text>
          <Text style={styles.subtitle}>
            R$ 10.880,00
          </Text>
        </View>   
        <View style={styles.controls} >
          <Text style={styles.subtitle}>
            Frete
          </Text>
          <Text style={styles.subtitle}>
            Grátis
          </Text>
        </View> 
        <View style={styles.controls} >
          <Text style={styles.title}>
            Total
          </Text>
          <Text style={styles.title}>
          R$ 10.880,00
          </Text>
        </View> 
        <View style={styles.controlsbutons} >
        <Button
          title="Pagamento" onPress={handleNavigatePagamento}
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