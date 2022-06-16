import {
  Container,
  Input,
  Text,
  LoginButton,
  Image,
  CheckBoxContainer,
  CheckBox,
} from "./styles";
import userDefault from "../../assets/user.png";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { api } from "../../services/api";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ setLogged }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        ToastAndroid.show("Login realizado com sucesso", ToastAndroid.SHORT);
        setLogged(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        ToastAndroid.show("Usuario e/ou senhas inválidos", ToastAndroid.SHORT);
        console.log("falha");
      });
  }

  return (
    <Container>
      <Image source={userDefault} />
      <Text>Email</Text>
      <Input
        placeholder="email"
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
      />
      <Text>Senha</Text>
      <Input
        placeholder="senha"
        secureTextEntry={!toggleCheckBox}
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
      />
      <CheckBoxContainer onPress={() => setToggleCheckBox(!toggleCheckBox)}>
        <CheckBox toggleCheckBox={toggleCheckBox}>
          <Feather
            name={toggleCheckBox ? "eye-off" : "eye"}
            size={18}
            color="#555"
          />
        </CheckBox>
        <Text>{toggleCheckBox ? "Ocultar Senha" : "Mostrar Senha"}</Text>
      </CheckBoxContainer>
      <LoginButton onPress={handleSubmit}>
        <Text>Entrar</Text>
      </LoginButton>
    </Container>
  );
}
