import { useState } from 'react'
import Modal from 'react-modal';
import { api } from '../../services/api';
import './styles.css'

Modal.setAppElement('#root');

export const TransactionModal = ({ isOpen, onRequestClose, description, type, account_id }) => {
  const [amount, setAmount] = useState()
  const [number, setNumber] = useState()

  async function handleTransaction() {
    if (type === 'deposit') {
      const response = await api.post(`/accounts/deposit`, {
        amount,
        number
      })

      if (response.status === 201) {
        onRequestClose()
      }
    }

    if (type === 'transfer') {
      const response = await api.post(`/accounts/transfer`, {
        amount,
        number,
        account_id
      })

      if (response.status === 201) {
        onRequestClose()
      }
    }
  }

  return (
    <Modal 
      isOpen={ isOpen } 
      onRequestClose={ onRequestClose }
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={ onRequestClose } 
        className="react-modal-close"
      >
        X
       </button>
      <div className='container-modal'>
        <h2>{description}</h2>
        <input
          type="number"
          placeholder="Valor"
          value={ amount } 
          onChange={ event => setAmount(Number(event.target.value))}
        />
        <input 
          placeholder="Número da conta"
          name='number'
          value={ number }
          onChange={ event => setNumber(event.target.value)}
        />
        <button onClick={handleTransaction} type="submit">Enviar</button>
      </div>
    </Modal>
  )
}