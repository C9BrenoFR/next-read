"use client"

import { useState } from "react";
import CenterSection from "./center_section";
import CompanySection from "./company_section";
import ContactUs from "./contact_us";

export default function MiddleSection(){
    const [exibition, setExibition] = useState<"logo" | "mission" | "vision" | "values">("logo")

    function handleSwitchExibition(newExibition: "logo" | "mission" | "vision" | "values"){
        setExibition(newExibition)
    }

    return(
        <section className="w-full h-60 bg-customBlack flex">
            <CompanySection handleSwitchExibition={handleSwitchExibition}/>
            <CenterSection exibition={exibition}/>
            <ContactUs/>
        </section>
    )
 }