import React, { useState } from "react"
import { Header } from "../../Headers"
import { SectionHero } from "../../Sections/SectionHero"
import { SectionCardTherapists } from "../../Sections/SectionCardTherapists"
import { SectionHowItWork } from "../../Sections/SectionHowItWork"
import { SectionPrice } from "../../Sections/SectionPrice"
import { SectionPayment } from "../../Sections/SectionPayment"
import { SectionFooter } from "../../Sections/SectionFooter"


export const Homepage = () => {

    return (
        <>
            <Header/>
            <SectionHero />
            <SectionCardTherapists />
            <SectionHowItWork />
            <SectionPrice />
            <SectionPayment />
            <SectionFooter />
        </>
    );
};