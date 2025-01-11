import { getExplore } from "../Utils/api";
import SmallCard from "./SmallCard";
import { ExploreData } from "../types/app";
import MainHeading from "./MainHeading";
const Exploer = async () => {
  const exploreData: ExploreData = await getExplore();
  console.log(exploreData, "dsadas");
  return (
    <section>
      <div className=" container">
       <MainHeading title="Explore Nearby"/>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center">

        {exploreData?.map((item) => (
          <SmallCard
          key={item.img}
          img={item.img}
          location={item.location}
          distance={item.distance}
          />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Exploer;
