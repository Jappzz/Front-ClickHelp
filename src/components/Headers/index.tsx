import React, { useState } from "react"
import logo from "../../assets/hd-logo.svg"
import style from "./style.module.scss"
import menuIcon from "../../assets/menu-icon.svg"
import Modal from "../Modal"


export const Header = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return(
        <header className={style.header}>
            <div className={style.div_img}>
                <img src={logo} alt="logo click help" />

            </div>
            <div className={style.list}>
                <a href="#prices">Pacotes</a>
                <a href="">Sobre</a>
                <a href="#howItWork">Como Funciona</a>
                <button>Entrar</button>

            </div>
            <div className={style.div_img_icone}>
                <button onClick={() => setIsVisible(true)}>
                    <img src={menuIcon} alt="menu icon" />

                </button>
            </div>
            {isVisible ? <Modal setIsVisible={setIsVisible}/>: false}
        </header>
    )

}