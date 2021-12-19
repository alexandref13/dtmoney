import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/close.svg'

Modal.setAppElement('#root')

interface TransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onRequestCloseTransactionModal: () => void;
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  onRequestCloseTransactionModal
}:TransactionModalProps){
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
      <Container>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder= 'Título'
        />
        <input 
          type="number"
          placeholder= 'Valor'
        />
        <input 
          placeholder= 'Categoria'
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}