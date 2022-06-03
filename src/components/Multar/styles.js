import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Input = styled.TextInput`
  width: 90%;
  margin: 8px 0;
  padding: 2%;
  border: 1px solid #ddd;
  border-radius: 5px;

  border-color: ${(props) => (props.erroInputPlaca ? "#ff5555" : "#ddd")};
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 2.5% 2%;
  background-color: #aaa;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Text = styled.Text``;

export const Advice = styled.Text`
  color: #ff5555;
  width: 90%;
  margin-top: -10px;
`
