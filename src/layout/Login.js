import './App.css';
import { useReducer, useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner'

const Container = styled.div`
  display: flex;
  fieldset{
    widht: 60%;
    border: none;
  } 
`;

const formReducer = (state, event) => {
  return{
    ...state, //retorna o que já tem
    [event.name]: event.value, //cada campo ele cria uma chave com nome do campo e um valor, como esta entre [] ele verifica se já existe e sobreescreve.
  }
}

function Login() {
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

      </Banner>
      <Banner>
      <h1>Faça seu login</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
        <label>
          CPF
          <input type="text" name="cpf" id="cpf" required onChange={handleChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
          Senha
          <input type="password" name="password" id="password" required onChange={handleChange}/>
        </label>
        </fieldset>
        <button type="submit">Continuar</button>
        <fieldset>
        <label>
          <a href="/">
          Esqueci minha senha
          </a>
        </label>
        </fieldset>
        <fieldset>
        <label>
        <a href='/register'>Ainda não sou cliente</a>
        </label>
        </fieldset>
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

export default Login;
