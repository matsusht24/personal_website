import Image from "next/image";
import NavLinks from "./ui/NavLinks";
import Button from "./ui/Button";
import Beach from "../../public/beach.svg"

export default function Home() {
  return (
    <div className="wrap">
      <div className=" relative w-full h-screen flex flex-col items-center justify-center z-10">
        {/*{/* Background hills }
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-orange-300 to-orange-200 rounded-t-full"></div>

      
      <div className="absolute bottom-28 w-40 h-40 bg-yellow-400 rounded-full"></div>

      <div className="absolute left-10 bottom-36">
        <PalmTree />
      </div>

      <div className="absolute right-10 bottom-36">
        <PalmTree />
      </div> 
      */}

        <div className="relative">
          <Image
            className="relative z-10"
            src="/Selfie_nobg_v1.png"
            alt="Trent's Picture"
            width={441}
            height={443}
          />
          <div className="absolute left-1/2 bottom-1/2 w-72 h-72 bg-gradient-to-t from-sun-200 to-sun-100 rounded-full"></div>
        </div>

        <h1 className="relative text-4xl font-bold text-black">
          Trent Matsushima
        </h1>

        <div className="relative flex mt-10 space-x-10">
          <Button label="Projects" />
          <Button label="Experiences" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 p-10">
          <NavLinks />
        </div>
      </div>
      <div className="w-screen h-2/3 ">
        <Image alt="beach" src={Beach} layout="fill" objectFit="cover" />
      </div>
      
    </div>
  );
}
