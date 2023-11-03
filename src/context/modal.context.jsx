import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({children})=>{
    // state for open model on main screen
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = ()=>{
        setIsModalOpen(true)
    }

    const closeModal = ()=>{
        setIsModalOpen(false)
    }
    const initialValues = {
        openModal, closeModal, isModalOpen
    }

    return (<ModalContext.Provider value={initialValues}>
        {children}
    </ModalContext.Provider>)
}

//custom hook
const useModalContext = ()=>{
    return useContext(ModalContext)
}

export {ModalProvider, useModalContext}
