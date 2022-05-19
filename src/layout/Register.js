import { useReducer, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Banner from '../components/Banner';

const Container = styled.div`
  display: flex;
  fieldset{
    widht: 60%;
    border: none;
  } 
`;


// Reducer - Redutor ou Filtro. 
// Tem 3 partes  estado(informação que estou armazenando), evento(quem acionou), contexto(área de atuação).
// Isola estado do componente, no caso form
const formReducer = (state, event) => {
  return{
    ...state, //retorna o que já tem
    [event.name]: event.value, //cada campo ele cria uma chave com nome do campo e um valor, como esta entre [] ele verifica se já existe e sobreescreve.
  }
}

function Register() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (event) => {
    // agora estamos usando o Reducer
    setFormData({
      name: event.target.name, //do evento atual pegue o name
      value: event.target.value, //do evento atual pegue o value
    });

  };  

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true); //mostra mensagem
    setTimeout(()=>{
      setSubmitting(false); //tira mensagem
    }, 3000); // espera 3 segundos e executa função
  }  
  
  return (
    <Container>
      <Banner background="true">
      <h1>Complete os campos ao lado para pedir sua Conta e Cartão de crédito</h1>

      </Banner>
      <Banner>

      <form onSubmit={handleSubmit}>
        <fieldset>
        <label>
          CPF
          <input type="text" name="cpf" id="cpf" required onChange={handleChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
          Nome completo
          <input type="text" name="nome" id="nome" required onChange={handleChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
          Celular
          <input type="tel" name="celular" id="celular" onChange={handleChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
          E-mail
          <input type="email" name="email" id="email" required onChange={handleChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
          Confirmação de e-mail
          <input type="email" name="email_confirm" id="email_confirm" required onChange={handleChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
          <input type="checkbox" name="accept_info" id="accept_info" required onChange={handleChange}/>
          Aceito receber comunicações do Nubank por Whatsapp.
        </label>
        </fieldset>
        <fieldset>
        <label>
          <input type="checkbox" name="accept_lgpd" id="accept_lgpd" required onChange={handleChange}/>
          Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta <a href='/'>Política de Privacidade.</a>
        </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
      
      {submitting && ( //conditional rendering, renderiza div só se submitting for true
        <div>
          <p>Enviando o formulário...</p>
          <ul>
            {Object.entries(formData).map(([name,value]) =>(
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}

      </Banner>
    </Container>
  );
}

export default Register;
