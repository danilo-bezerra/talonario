import { apiConsultaPlaca } from "../../services/api";
import { Container, Button, Input, Text, Advice } from "./styles";
import {useState} from 'react'

export default function Multar() {
  const [veiculo,setVeiculo] = useState(null)
  const [placa,setPlaca] = useState('')
  const [erroInputPlaca,setErroInputPlaca] = useState(false)

  function validatePlaca() {
    const regex = /[A-Za-z]{3}[0-9][0-9A-Za-z][0-9]{2}/;
    if (regex.test(placa)) {
      return true
    } else {
      return false
    }
  }

  async function handleClick() {;
    if (validatePlaca()) {
      const response = await apiConsultaPlaca.get(
        `/${placa}.json?placa=${placa}`
      );
      setErroInputPlaca(false);

        if (!response.data.pageProps.vehicleData) {
          alert("Veiculo não existe")
          return
        }
          setVeiculo(response.data.pageProps);
    } else {
      setVeiculo(null);
      setErroInputPlaca(true);
      console.log("placa invalida");
    }
  }

  console.log(veiculo)

  return (
    <Container>
      <Text>Placa</Text>
      <Input
        placeholder="Placa"
        onChangeText={(newText) => setPlaca(newText)}
        defaultValue={placa}
        erroInputPlaca={erroInputPlaca}
      />
      {erroInputPlaca && <Advice>Placa Inválida</Advice>}
      <Button onPress={handleClick}>
        <Text>Consultar</Text>
      </Button>
      <Text>Modelo</Text>
      <Input placeholder="Modelo" defaultValue={veiculo?.vehicleData?.Modelo} />
      <Text>Marca</Text>
      <Input placeholder="Marca" defaultValue={veiculo?.vehicleData?.Marca} />
      <Text>Cor</Text>
      <Input placeholder="Cor" defaultValue={veiculo?.vehicleData?.cor} />
      <Text>Cidade / UF</Text>
      <Input
        placeholder="Cidade/UF"
        defaultValue={
          veiculo?.vehicleData?.municipio
            ? `${veiculo?.vehicleData?.municipio} - ${veiculo?.vehicleData?.uf}`
            : ""
        }
      />
      <Text>Chassi</Text>
      <Input placeholder="Chassi" defaultValue={veiculo?.vehicleData?.chassi} />
      <Text>Ano</Text>
      <Input placeholder="Ano" defaultValue={veiculo?.vehicleData?.AnoModelo} />
      <Button>
        <Text>Proseguir</Text>
      </Button>
    </Container>
  );
}
