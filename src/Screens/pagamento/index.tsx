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


export function Pagamento() {
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
          Pagamento
        </Text>


      </View>
      
      <View style={styles.controls} >
        <View style={styles.container_paga}>
        <Text style={styles.label}>
          McBook Air de 13"
          </Text>
        </View>
        <View style={styles.container_paga}>
        <Text style={styles.label}>
          R$ 7.999,99
          </Text>
        </View>
          
        </View> 
        <Image
        source={linha}
        style={styles.linha}
      />  

<View style={styles.controls} >
        <View style={styles.container_paga}>
        <Text style={styles.label}>
        AMD Ryzen 7 5800X
          </Text>
        </View>
        <View style={styles.container_paga}>
        <Text style={styles.label}>
        R$ 2.880,00
          </Text>
        </View>
          
        </View> 
        <Text style={styles.espaco}>
         {'\n'}
        </Text>

      <Text style={styles.label}>
         Envio para{'\n'}
        </Text>
        <Text style={styles.label}>
         {'\n'}
         Rua Pinhal, 138{'\n'}
         Monte Belo - Itaquaquecetuba - SP
        </Text>
        <Text style={styles.espaco_menor}>
         {'\n'}
        </Text>
        <Image
        source={linha}
        style={styles.linha}
      />  
        <Text style={styles.label}>
         Forma de pagamento{'\n'}
        </Text>

        <TextInput style={styles.input} placeholder="Insira aqui a forma de pagamento.."
          keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>
        <Text style={styles.espaco_menor}>
         {'\n'}
        </Text>
        <Image
        source={linha}
        style={styles.linha}
      />  
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
          title="Comprar" 
        />
      </View>

    </View>

  );
}