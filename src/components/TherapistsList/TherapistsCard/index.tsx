import React from "react";
import style from "./style.module.scss"

interface Therapist {
    nome: string;
    img: string;
    about: string
}

interface TherapistsCardProps {
    therapist: Therapist;
}

export const TherapistsCard: React.FC<TherapistsCardProps> = ({ therapist }) => {
    return (
        <li className={style.li}>
            <div>
                <img className={style.img} src={therapist.img} alt="imagem terapeuta" />
            </div>
            <p>{therapist.about}</p>
            <h3>{therapist.nome}</h3>
        </li>
    )
}
