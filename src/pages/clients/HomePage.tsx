import { Carousel } from '@mantine/carousel';
import { DiscountCard, HeroCarouselSlide, Navbar } from '../../components';

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Carousel
                withIndicators
                height={500}
                controlSize={60}
                align="start"
                controlsOffset={10}
                slideSize={"33.33%"}
                slidesToScroll={3}
            >

                <HeroCarouselSlide name={"Louis vuitton"} img={"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                <HeroCarouselSlide name={"Dior bag"} img={"https://images.unsplash.com/photo-1628149455678-16f37bc392f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                <HeroCarouselSlide name={"LV White T-Shirt"} img={"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />

                <HeroCarouselSlide name={"Air max"} img={"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                <HeroCarouselSlide name={"Dior bag"} img={"https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                <HeroCarouselSlide name={"LV White T-Shirt"} img={"https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} />
            
            </Carousel>

            <div className='discount_sales'>
                <h2>Discount sales</h2>
                <div className={"product_container"}>
                   <DiscountCard img={"https://lh5.googleusercontent.com/p/AF1QipOjon1fCNrbHpzXK9Qf9rUaAUtcZwOIArZLRSad=s508-k-no"} discount={"-43"}/>
                   <DiscountCard img={"https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} discount={"-23"} />
                   <DiscountCard img={"https://images.unsplash.com/photo-1628149455678-16f37bc392f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} discount={"-43"}/>
                </div>
            </div>
        </>
    );
};

export default HomePage;
