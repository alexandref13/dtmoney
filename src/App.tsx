import { useState } from "react";
import { GlobalStyle } from "./styles/global"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <NewTransactionModal 
        isNewTransactionModalOpen= {isNewTransactionModalOpen}
        onRequestCloseTransactionModal= {handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </>
  );
}

