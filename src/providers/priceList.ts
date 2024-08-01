import rabbitIcon from "../assets/rabbit-3.svg"

export const getPriceList = () => {
    return[
        {img: rabbitIcon,
             price: "R$15,00", 
             text: "Quinze minutos de terapia", 
             text1: "Suporte imediato e eficiente", 
             text2: "Ideal para sessões rápidas", 
             text3: "Perfeito para quem quer experimentar"},
        {img: rabbitIcon, 
            price: "R$30,00", 
            text: "Trinta minutos de terapia",
            text1: "Suporte imediato e eficiente", 
            text2: "Tempo suficiente para problemas específicos", 
            text3: "Ótimo equilíbrio entre cuso e benefício"},
        {img: rabbitIcon, 
            price: "R$60,00", 
            text: "Uma hora de terapia", 
            text1: "Suporte imediato e eficiente",
            text2:"Perfeito para sessões completas e detalhadas", 
            text3: "Maior flexibilidade para explorar vários tópicos"}
    ]

}