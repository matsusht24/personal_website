import Image from "next/image";
import { expType } from "../experiences/Page";
type cardPropTypes = {
  exp: expType;
  onSelect: (exp: expType) => void;
};
function ExpCard({ exp, onSelect }: cardPropTypes) {
  
  return (
    <div role="button" className="flex flex-col hover:drop-shadow-lg" onClick={()=> onSelect(exp)}>
      <div className="w-full flex row justify-center mb-4" >
        <div className=" w-20 h-20 shadow-lg rounded-full ">
          <Image
            alt={exp.name}
            src={exp.logo}
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-full overflow-hidden"
          />
        </div>
      </div>
      <div className={`border-dashed border-gray-600 border-2 p-2 `}>
        <h1 className="font-bold text-lg">{exp.name}</h1>
        <p className="text-gray-600">{exp.role}</p>
      </div>
    </div>
  );
}

export default ExpCard;
