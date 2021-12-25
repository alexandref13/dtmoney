import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { Container, RadioBox, TransationTypeContainer } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api'

Modal.setAppElement('#root')

interface TransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onRequestCloseTransactionModal: () => void;
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  onRequestCloseTransactionModal
}:TransactionModalProps){

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(e: FormEvent){
    e.preventDefault();

    if(title && category && value){
      const data = ({
        title, value, category, type
      });
      
      api.post('/transactions', data)
    }
  } 

  return(
    <Modal
      isOpen= {isNewTransactionModalOpen}
      onRequestClose= {onRequestCloseTransactionModal}
      overlayClassName= 'react-modal-overlay'
      className= 'react-modal-content'
    >
      <button 
        type="button" 
        onClick={onRequestCloseTransactionModal} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder= 'Título'
          value={title}
          onChange={event => {setTitle(event.target.value)}}
        />
        <input 
          type="number"
          placeholder= 'Valor'
          value={value}
          onChange={event => {setValue(event.target.valueAsNumber)}}
        />

        <TransationTypeContainer>
          <RadioBox 
            isActive= {type === 'deposit'}
            type='button'
            onClick={() => {
              setType('deposit')
            }}
            activeColor= 'green'
          >
            <img src= {incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox 
            isActive= {type === 'withdraw'}
            type='button'
            onClick={() => {
              setType('withdraw')
            }}
            activeColor= 'red'

          >
            <img src= {outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransationTypeContainer>

        <input 
          placeholder= 'Categoria'
          value={category}
          onChange={event => {setCategory(event.target.value)}}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}