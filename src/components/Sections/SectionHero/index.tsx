import React from "react";
import imgHero from "../../../assets/hero-ft.svg"
import style from "./style.module.scss"
export const SectionHero = () => {
    return(
        <>
            <section className={style.section}>
                <div className={style.div_title}>
                    <h1>Terapeutas online aguardando para atendimento imediato!</h1>
                    <button className={style.div_button}>Começar</button>
                </div>
                <div className={style.div_img}>
                    <img src={imgHero} alt="imagem" />
                </div>
            </section>
        </>
    )

}

