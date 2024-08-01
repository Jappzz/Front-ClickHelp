import React from "react"
import pixIcon from "../../../assets/pix-icon.svg"
import creditCardIcon from "../../../assets/credit-card 1.svg"
import secureShieldIcon from "../../../assets/secure-shield.svg"
import style from "./style.module.scss"

export const SectionPayment = () => {
    return (
        <section className={style.section_container}>
            <div className={style.div_container}>
                <h2>Flexibilidade de pagamento</h2>
                <h3>
                    Pague do jeito que for mais conveniente para você, seja com cartão de crédito ou PIX. 
                    <br/>
                    Nós facilitamos para você começar agora mesmo!
                </h3>
                <div className={style.div_method_payment}>
                    <div className={style.methods}>
                        <div>
                            <img src={pixIcon} alt="pix icon" />
                            <p>Pague tranquilamento usando pix</p>
                        </div>
                        <div>
                            <img src={creditCardIcon} alt="credit card icon" />
                            <p>Parcele e até seis vezes no cartão de crédito</p>
                        </div>
                    </div>
                    <div className={style.div_img_secure}>
                        <img src={secureShieldIcon} alt="secure shield icon" />
                    </div>
                </div>
            </div>
        </section>
    )

}