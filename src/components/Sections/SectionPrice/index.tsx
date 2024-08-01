import React from "react"
import { PriceList } from "../../PriceList"
import style from "./style.module.scss"

export const SectionPrice = () => {
    return(
        <section id="prices" className={style.section_container}>
            <h3 className={style.title}>Escolha o pacote que cabe no seu bolso</h3>
            <PriceList/>
        </section>
    )

}