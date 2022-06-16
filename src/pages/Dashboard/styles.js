import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
  padding: 14px;
`;

export const Text = styled.Text`
  margin: 0px auto;
  text-align: center;
  font-size: ${({ size }) => (size ? size : 14)}px;
  color: ${({ color }) => (color ? color : "#000")};
`;

export const InfoContainer = styled.View`
  width: 100%;
  gap: 14px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Info = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border: 1px solid #c5c5c5;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const GeoInfoContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #c5c5c5;
`;
