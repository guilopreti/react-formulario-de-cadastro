import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import { HomeSection } from "./styled";

const Home = () => {
  const history = useHistory();
  const params = useParams();
  return (
    <>
      <HomeSection>
        <h1>Bem-Vindo, {params.name}!</h1>
        <Button onClick={() => history.push("/")}>Voltar</Button>
      </HomeSection>
    </>
  );
};

export default Home;
