import React from "react"
import { getTherapists } from "../../providers/therapist.ts"
import { TherapistsCard } from "./TherapistsCard"
import style from "./style.module.scss"

export const TherapistsList = () => {
    const therapists = getTherapists()

    return (
        <ul className={style.ul}>
            {therapists.map((therapist, index) => (
                <TherapistsCard key={index} therapist={therapist} />
            ))}
        </ul>
    )
}