import { Library } from "lucide-react";
import { LiveData } from "../types/app";
import { getLive } from "../Utils/api";
import MainHeading from "./MainHeading";
import LiveCard from "./LiveCard";

const Live =async () => {
  const liveData:LiveData =await getLive()
  console.log(liveData);

  return (
    <section className="py-16">
      <div className="container">
        <MainHeading title="Live Anywhere" />
      <div className="flex space-x-3 items-center overflow-scroll no-scrollbar p-3 -ml-3">
        {
          liveData.map((item)=>(
           <LiveCard key={item.img} img={item.img} title={item.title}/>
          ))
        }

      </div>
      </div>
    </section>
  );
};

export default Live;
