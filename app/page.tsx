import Image from "next/image";
import Banner from "./_components/Banner";
import Exploer from "./_components/Exploer";
import Live from "./_components/Live";
import Outdoors from "./_components/Outdoors";
import Header from "./_components/header/Header";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Banner />
      <Exploer />
      <Live />
      <Outdoors
        img="/mount.jpg"
        title="The Greatest Outdoors"
        description="Wishlist curated by Airbnb"
        linkText="Get Inspired"
        />
    </main>
<Footer/>
        </>
  );
}
