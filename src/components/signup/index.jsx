import React, { useState } from 'react';
// import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/svg/Group 2.svg'
import { Button } from '../button';
import { FiArrowLeft } from 'react-icons/fi';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

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
    <div className="container signup">
      <Link to="/" className="back-link">
        <FiArrowLeft size={24} color="#fefbff" />
      </Link>
      <div class="flex-item-1">
        <section className='section-signup'>
          <img style={{ height: "150px", width: "150px" }} src={logoImg} alt="Be The Hero"/>
          <p className='weight-light color-white mt-3'>Faça seu cadastro e venha fazer parte do banco que mais cresce no Brasil.</p>

          {/* <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link> */}
        </section>
      </div>

      <div className='flex-item-1'>
        <form>
          <h1>Cadastro</h1>
          <input 
            placeholder="Nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="Número"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input 
              placeholder="UF" 
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}