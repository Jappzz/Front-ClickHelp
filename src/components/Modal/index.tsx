import React from "react";
import style from "./style.module.scss";

interface ModalProps {
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setIsVisible }) => {

    return (
        <div className={style.modal_overlay}>
            <a href="#prices">Pacotes</a>
            <a href="#howItWork">Como Funciona</a>
            <button>Entrar</button>
            <button className={style.button_exit} onClick={() => setIsVisible(false)}>
                X
            </button>
        </div>
    );
};

export default Modal;
