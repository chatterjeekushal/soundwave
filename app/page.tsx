import Image from "next/image";

import Navbar from "@/components/Nav";
import Herosec from "@/components/Herosec";
import FeaturedProducts from "@/components/Featured_Products";
export default function Home() {
  return (
    
    <div className="w-full mx-auto ">
      <Navbar />

      <Herosec />

      <FeaturedProducts />

    </div>
  );
}
