import Image from "next/image";
import { PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-40 bg-customWhite relative">
      <div className=" absolute flex justify-between items-center w-full h-full">
        <div className="w-1/3 flex flex-col justify-center items-start h-full">
          <p className="text-2xl font-cinzel text-[#00a3e0]">Next Read</p>
          <p className="text-[#00a3e0]">© 2021 Next Read</p>
        </div>

        <div className="w-1/3 h-full flex justify-center items-center">
          <Image
            className="rounded-full mt-[-40px]"
            src="/img/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        
        <div className="flex justify-center items-end flex-col space-y-1 w-1/3 h-full">
          <div className="flex items-center space-x-2">
            <p className="text-[#00a3e0]">(32) 4002-8922</p>
            <PhoneIcon className="h-6 w-6 text-[#00a3e0]" />
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-[#00a3e0]">@RealctNextRead</p>
            <FaTwitter className="h-6 w-6 text-[#00a3e0]" />
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-[#00a3e0]">@NextRead</p>
            <FaInstagram className="h-6 w-6 text-[#00a3e0]" />
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-[#00a3e0]">Judge of out, All Girls</p>
            <LocationMarkerIcon className="h-6 w-6 text-[#00a3e0]" />
          </div>
        </div>


      </div>
      <div className="w-full h-1/2 bg-customWhite"></div>
      <div className="w-full h-1/2 bg-[#011126]"></div>
    </footer>
  );
}
