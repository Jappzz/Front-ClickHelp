import React from "react";
import style from "./style.module.scss"
import dollar from "../../../assets/dollar.svg"
import calendar from "../../../assets/calendar.svg"
import moneyIcon from "../../../assets/pay-as-you-go.svg"
import rabbitIcon from "../../../assets/rabbit-icon.svg"
export const SectionHowItWork = () => {
    return(
        <section id="howItWork" className={style.section}>
            <div className={style.first_half}>
                <div className={style.div_container}>
                    <div className={style.div_text}>
                        <h3>
                            1 real por minuto
                        </h3>
                        <p>Atendimento acessível e de qualidade para todos</p>
                    </div>
                    <div>
                        <img src={dollar} alt="cifrão" />
                    </div>
                </div>

                <div className={style.div_container}>
                    <div className={style.div_text}> 
                        <h3>
                            Consultas a partir de 15 reais 
                        </h3>
                        <p>Transforme a sua vida por um valor acessível</p>
                    </div>
                    <div>
                        <img src={calendar} alt="calendario" />
                    </div>
                </div>
            </div>
            <div className={style.second_half}>
                <div className={style.div_title}>
                    <h3>Pague apenas pelo que você usar</h3>
                </div>
                <div className={style.second_div_text}>
                    <p>Aproveite a flexibilidade de pagar somente pelos minutos utilizados em cada sessão.</p>
                    <p>Sem custos escondidos. Você tem total controle sobre seu investimento em saúde mental.</p>
                </div>
                <div className={style.div_img}>
                    <img src={rabbitIcon} alt="imagem coelho" />
                    <img src={moneyIcon} alt="imagem dinheiro" />
                </div>
            </div>
        </section>
    )

}