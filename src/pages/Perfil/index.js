import { useContext } from "react";
import {} from "./styles";

import Page from "../../components/Page";
import Text from "../../components/Text";

import { UserContext } from "../../contexts/UserContext";

export default function Perfil() {
  const { user } = useContext(UserContext);

  const { displayName, email, photoUrl } = user.providerData[0];

  console.log(user);

  return (
    <Page>
      <Text>{displayName}</Text>
      <Text>{email}</Text>
      <Text>{photoUrl}</Text>
    </Page>
  );
}
