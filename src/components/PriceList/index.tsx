import React from "react"
import { getPriceList } from "../../providers/priceList"
import { PriceListCard } from "./PriceCard"
import style from "./style.module.scss"

export const PriceList = () => {
    const prices = getPriceList()
    return(
        <ul className={style.ul_container}>
            {prices.map((price) => (
                <PriceListCard price={price}/>
            ))}
        </ul>
    )

}