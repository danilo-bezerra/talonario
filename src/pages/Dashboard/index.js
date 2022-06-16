import {
  Container,
  Text,
  InfoContainer,
  Info,
  Image,
  GeoInfoContainer,
} from "./styles";
import Location from "../../components/Location";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import useDate from "../../hooks/useDate";
import useLocation from "../../hooks/useLocation";
import MapView from "../../components/MapView";

export default function Dashboard() {
  const { formatedDate, formatedHours } = useDate();
  const { latitude, longitude, address } = useLocation();

  return (
    <Container>
      <InfoContainer>
        <Info>
          <Image
            source={{
              uri: "https://www.ribeiraodosul.sp.gov.br/public/admin/globalarq/uploads/images/Dilmarque.jpg",
            }}
          />
          <Text>Benetito Copelo</Text>
          <Text color="#616161">Agente de transito</Text>
        </Info>
        <Info>
          <Ionicons name="car-outline" size={40} />
          <Text>Minhas Multas</Text>
          <Text size={30}>{5}</Text>
        </Info>
      </InfoContainer>

      <GeoInfoContainer>
        <MapView />

        <InfoContainer>
          <Text>Latitude: {latitude}</Text>
          <Text>Logitude: {longitude}</Text>
        </InfoContainer>
        <InfoContainer>
          <Text>Data: {formatedDate}</Text>
          <Text>Hora: {formatedHours}</Text>
        </InfoContainer>
        <InfoContainer>
          <Text>
            Endereço: {address?.street}, {address?.district},{" "}
            {address?.subregion} - {address?.region}
          </Text>
        </InfoContainer>
      </GeoInfoContainer>
    </Container>
  );
}
