import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const InputContainer = styled.View`
  position: relative;
`;

export const Input = styled.TextInput`
  width: 90%;
  margin: 8px auto;
  padding: 2%;
  border: 1px solid #ddd;
  border-radius: 5px;

  border-color: ${(props) => (props.erroInputPlaca ? "#ff5555" : "#ddd")};
`;

export const CameraButton = styled.TouchableOpacity`
  position: absolute;
  right: 6%;
  top: 0;
  bottom: 0;
  justify-content: center;
  z-index: 99;
  padding-left: 14px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 2.5% 2%;
  background-color: #aaa;
  border: 1px solid #ddd;
  margin: auto;
  border-radius: 5px;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  width: 90%;
  margin: 0px auto;
`;

export const ButtonText = styled.Text`
  margin: 0px auto;
`;

export const Advice = styled.Text`
  color: #ff5555;
  width: 90%;
  margin: 0px auto;
  margin-top: -10px;
`;
