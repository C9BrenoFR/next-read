import TitleUnderline from "@/components/public/cards/title_underline";

interface CompanySectionProps{
    handleSwitchExibition: (newExibition: "logo" | "mission" | "vision" | "values") => void
}

export default function CompanySection({handleSwitchExibition}: CompanySectionProps) {
    return (
        <section className="w-1/3 h-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
                <TitleUnderline handleSwitchExibition={handleSwitchExibition} className="cursor-pointer">Next Read</TitleUnderline>
                
                <div onClick={() => handleSwitchExibition("mission")} className="flex items-center cursor-pointer mt-4">
                    <p className="relative group">
                        Nossa Missão
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-customBlue-dark transition-all duration-300 group-hover:w-[100%]"></span>
                    </p>
                </div>

                <div onClick={() => handleSwitchExibition("vision")} className="flex items-center cursor-pointer">
                    <p className="relative group">
                        Nossa Visão
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-customBlue-dark transition-all duration-300 group-hover:w-[100%]"></span>
                    </p>
                </div>

                <div onClick={() => handleSwitchExibition("values")} className="flex items-center cursor-pointer">
                    <p className="relative group">
                        Nossos Valores
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-customBlue-dark duration-300 group-hover:w-[100%]"></span>
                    </p>
                </div>
            </div>
        </section>
    );
}