import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin: 25px 0;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const Text = styled.Text``;

export const Input = styled.TextInput`
  width: 90%;
  margin: 8px 0;
  padding: 2%;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 2.5% 2%;
  background-color: #aaa;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CheckBoxContainer = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  margin: 8px 0;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
`;
