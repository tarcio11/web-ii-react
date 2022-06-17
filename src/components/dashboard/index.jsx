import { useState, useEffect } from 'react';
import { TransactionModal } from '../transaction-modal';
import { api } from '../../services/api';

import nuFrame01 from '../../assets/svg/nu-frame-01.svg';
import nuBarCode from '../../assets/svg/mdi-barcode.svg';
import transfer from '../../assets/svg/mdi-camera-metering-spot.svg';
import deposit from '../../assets/svg/mdi-camera-metering-spot-2.svg';
import recarga from '../../assets/svg/uil-mobile-android.svg';

import './styles.css';
import { useAuth } from '../../hooks/auth';

export const Dashboard = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [type, settype] = useState('');
  const [account, setAccount] = useState();

  const { user } = useAuth()

  useEffect(() => {
    async function handleAccount() {
     const response = await api.get(`/accounts/${user.agency_id}`);
     setAccount(response.data);
    }

    handleAccount();
  }, [isNewTransactionModalOpen]);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <div className='header-content'>
          <span>Olá, {user.name}!</span>
          <span className='mt-2'>Conta</span>
          <strong>
            {account?.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </strong>
        </div>
      </div>

      <main className='dashboard-main'>
        <button 
        onClick={() => {
          setDescription('Área de pix');
          handleOpenNewTransactionModal();
        }} 
        className='box-content'>
          <div className='box-img'>
            <img src={nuFrame01} alt="" />
          </div>
          <p>Área de pix</p>
        </button>
        <button
        onClick={() => {
          setDescription('Pagar');
          handleOpenNewTransactionModal();
        }} 
        className='box-content'>
          <div className='box-img'>
            <img src={nuBarCode} alt="" />
          </div>
          <p>Pagar</p>
        </button>
        <button
        onClick={() => {
          setDescription('Transferir');
          settype('transfer');
          handleOpenNewTransactionModal();
        }} 
        className='box-content'>
          <div className='box-img'>
            <img src={transfer} alt="" />
          </div>
          <p>Transferir</p>
        </button>
        <button
        onClick={() => {
          setDescription('Depositar');
          settype('deposit');
          handleOpenNewTransactionModal();
        }} 
        className='box-content'>
          <div className='box-img'>
            <img src={deposit} alt="" />
          </div>
          <p>Depositar</p>
        </button>
        <button 
        onClick={() => {
          setDescription('Recarga de celular');
          handleOpenNewTransactionModal();
        }} 
        className='box-content'>
          <div className='box-img'>
            <img src={recarga} alt="" />
          </div>
          <p>Recarga de celular</p>
        </button>
      </main>
      <TransactionModal
        description={description}
        type={type}
        account_id={account?.id}
        isOpen={ isNewTransactionModalOpen }
        onRequestClose = { handleCloseNewTransactionModal }
      />
    </div>
  )
}