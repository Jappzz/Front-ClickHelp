import React from "react"
import style from "./style.module.scss"
import check from "../../../assets/check.svg"

interface Price {
    img: string;
    price: string;
    text: string;
    text1: string;
    text2: string;
    text3: string;
}

interface PriceListCardProps {
    price: Price;
}

export const PriceListCard: React.FC<PriceListCardProps> = ({ price }) => {
    return (
        <li className={style.li_container}>
            <div className={style.div_header}>
                <img src={price.img} alt="imagem coelho" />
                <p className={style.price}>{price.price}</p>
                <p className={style.price_text}>{price.text}</p>
            </div>
            <div className={style.div_section}>
                <div className={style.div_content}>
                    <img src={check} alt="check icon" />
                    <p>{price.text1}</p>
                </div>
                <div className={style.div_content}>
                    <img src={check} alt="check icon" />
                    <p>{price.text2}</p>
                </div>
                <div className={style.div_content}>
                    <img src={check} alt="check icon" />
                    <p>{price.text3}</p>
                </div>


            </div>
        </li>
    );
};


