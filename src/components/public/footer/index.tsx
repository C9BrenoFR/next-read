import BottomSection from "./bottom_section";
import MiddleSection from "./middle_section";
import SuperiorSection from "./superior_section";

export default function Footer() {
  return (
    <footer className="w-full bg-customBlue-dark text-customWhite-variant1 flex flex-col">
      <SuperiorSection/>
      <MiddleSection/>
      <BottomSection/>
    </footer>
  );
}
