
import { Carousel, CarouselSlide} from '@mantine/carousel';
import ProductCard from "./ui/product_card";
import { ArrowRight, ArrowLeft } from "lucide-react";
function Bestsaller() {

    let products = [

        {
            src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
            name: "Pro Wireless Max",
            price: 299,
            stars: 4.5,
            rating: "4.5",
            description: "Active Noise Cancelling"
        },

        {
            src: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Pro Wireless Max",
            price: 299,
            stars: 4.5,
            rating: "4.5",
            description: "Active Noise Cancelling"
        },

        {
            src: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Pro Wireless Max",
            price: 299,
            stars: 4.5,
            rating: "4.5",
            description: "Active Noise Cancelling"
        },

        {
            src: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Pro Wireless Max",
            price: 299,
            stars: 4.5,
            rating: "4.5",
            description: "Active Noise Cancelling"
        },

        {
            src: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Pro Wireless Max",
            price: 299,
            stars: 4.5,
            rating: "4.5",
            description: "Active Noise Cancelling"
        },



    ]


    return (

        <div className='w-full mx-auto ml-2 sm:m-auto lg:m-auto  xl:m-auto sm:px-6 lg:px-8 mt-16 '>

            <div className='flex flex-col items-center justify-center gap-4 mb-12 pt-3 lg:pt-20'>

                <div className="text-3xl font-bold text-center">Our Bestsaller</div>
                {/* write descripction aboutbest saller */}
                <div className="text-gray-600 text-center">Discover our most popular premium headphones</div>

            </div>

            <Carousel
                height="auto"
                slideSize="33.333333%"
                nextControlIcon={<ArrowRight className="w-8 h-8 bg-slate-300 text-black border rounded-lg" />}
                previousControlIcon={<ArrowLeft className="w-8 h-8 bg-slate-300 text-black border rounded-lg" />}
                slideGap="sm"
                loop
                align="start"
                slidesToScroll={1}
                className='flex items-center w-full justify-center gap-32 text-red-600'
            >

                {/* ...other slides */}

                {products.map((product, index) => (

                <CarouselSlide className='flex items-center justify-center gap-32 border border-white' key={index}>

                    {/* Product Card */}

                  
                        <ProductCard
                            src={product.src} // Using Lucide Headphones Icon
                            name={product.name}
                            price={product.price}
                            stars={product.stars}
                            rating={product.rating}
                            description={product.description}
                            
                        />
                 
                </CarouselSlide>

))}


            </Carousel>


            {/* add view all button here */}

            {/* View All Products Button */}
            <div className="text-center mt-12">
                <button className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 text-sm sm:text-base font-semibold">
                    View All Products
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>


        </div>
    );
}

export default Bestsaller;