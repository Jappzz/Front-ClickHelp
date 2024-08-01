import React from "react"
import style from "./style.module.scss"

export const SectionFooter = () => {
    return (
        <footer className={style.footer_container}>
            <div className={style.div_footer}>
                <div className={style.div_content}>
                    <div>
                        <h3>Atendimento</h3>
                    </div>
                    <div className={style.div_info}>
                        <p>segunda à sexta</p>
                        <p>19:00 - 22:00h</p>
                    </div>
                </div>
                <div className={style.div_content}>
                    <div>
                        <h3>Click help</h3>

                    </div>
                    <div className={style.div_info}>
                        <a href="">sobre</a>
                        <a href="#prices">pacotes</a>
                        <a href="#howItWork">como funciona</a>
                    </div>

                </div>
                <div className={style.div_content}>
                    <div>
                        <h3>Contato</h3>
                    </div>
                    <div className={style.div_info}>
                        <p>SAC: (11) 99503-1134</p>
                        <p>parcerias</p>
                    </div>
                </div>
            </div>
        </footer>

    )

}