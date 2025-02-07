import Image from "next/image";


import Herosec from "@/components/Herosec";
import FeaturedProducts from "@/components/Featured_Products";
import Categories from "@/components/Browes_catagory";
import {CarouselSize} from "@/components/Bestsaller";
import ProductShowcase from "@/components/Priamem_product";
import CustomerReviews from "@/components/Costomerreview";
import WhyChooseSoundWave from "@/components/Why_choose_us";
export default function Home() {
  return (
    
    <div className="w-full mx-auto ">
     
      <Herosec />

      <FeaturedProducts />

      <Categories />

      <CarouselSize />

      <ProductShowcase />

      <CustomerReviews />

      <WhyChooseSoundWave />

    </div>
  );
}
