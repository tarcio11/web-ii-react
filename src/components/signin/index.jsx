import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/svg/Group 2.svg'
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { signIn } = useAuth()

  const handleSubmit = async (envent) => {
    envent.preventDefault();
    try {
      await signIn({ email, password })

      navigate('/dashboard')
    } catch (err) {
        alert('Falha no login, verifique seus dados')
    }
  }

  return (
    <>
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
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input 
              type="email" 
              name='email'
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="password"
              name='password'
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
    </>
  );
}