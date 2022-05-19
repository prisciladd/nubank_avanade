import styled from 'styled-components';
import bannerBG from '../assets/images/bannerBG.png';

const Container = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${
    // cria uma arrow function passando o props. Tem uma props background? Sim, ? então retorna propriedade url usada para buscar imagem de fundo
    // background url: se tiver uma propriedade background traga ela se não traga vazio ""
    (props) => props.background ? "url(" + props.background + ") #e5e5e5" : ""
                } 
  20% 90% no-repeat;
  background-color
  
  @media (max-width: 1280px) {
    background-size: 60%;
  }

  > h1 {
    font-size: 2em;
    margin: 5% 5%;
  }
`;

function Banner (props){

    return (
        <Container background={props.background ? bannerBG : ""}>
            {props.children}
        </Container>);
    
}

export default Banner;