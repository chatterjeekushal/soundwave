


import Herosec from "@/components/Herosec";
import FeaturedProducts from "@/components/Featured_Products";
import Categories from "@/components/Browes_catagory";
import Bestsaller from "@/components/Bestsaller";
import ProductShowcase from "@/components/Priamem_product";
import CustomerReviews from "@/components/Costomerreview";
import WhyChooseSoundWave from "@/components/Why_choose_us";
import Join_the_trip from "@/components/Join_the_trip";
import CompareDemo from "@/components/CompareDemo";
import Footer from "@/components/Footer";
export default function Home() {
  return (

    
    
    <div className="w-full mx-auto overflow-x-hidden">
     
      <Herosec />

      <FeaturedProducts />

      <Categories />

      <Bestsaller />

      <ProductShowcase />

      <Join_the_trip />

      <CompareDemo />

      <CustomerReviews />

      <WhyChooseSoundWave />

      <Footer />

    </div>
    
  );
}
