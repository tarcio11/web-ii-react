import React, { useState } from 'react';
import './styles.css';

import logoImg from '../../assets/svg/Group 2.svg'
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const history = useHistory();

  // async function handleRegister(e) {
  //   e.preventDefault();

  //   const data = {
  //     name,
  //     email,
  //     whatsapp,
  //     city,
  //     uf,
  //   };

  //   try {
  //     const response = await api.post('ongs', data);

  //     alert(`Seu ID de acesso: ${response.data.id}`);

  //     // history.push('/');
  //   } catch (err) {
  //     alert('Erro no cadastro, tente novamente.');
  //   }
  // }

  return (
    <div className="container signin">
    <Link to="/" className="back-link">
      <FiArrowLeft size={24} color="#fefbff" />
    </Link>
      <div class="flex-item-1">
        <section className='section-login'>
          <img style={{ height: "150px", width: "150px" }} src={logoImg} alt="Be The Hero"/>
        </section>
      </div>

      <div className='flex-item-1'>
        <form>
          <h1>Login</h1>
          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className='flex group-bottons'>
            <Button type="submit">Cadastrar</Button>
            <Link to="/">
              Não tenho cadastro
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}