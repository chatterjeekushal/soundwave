import Image from "next/image";

import Navbar from "@/components/Nav";
import Herosec from "@/components/Herosec";
import FeaturedProducts from "@/components/Featured_Products";
import Categories from "@/components/Browes_catagory";
import {CarouselSize} from "@/components/Bestsaller";
export default function Home() {
  return (
    
    <div className="w-full mx-auto ">
      <Navbar />

      <Herosec />

      <FeaturedProducts />

      <Categories />

      <CarouselSize />

    </div>
  );
}
