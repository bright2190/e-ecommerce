import { Carousel } from '@mantine/carousel';
import { HeroCarouselSlide, Navbar } from '../../components';

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Carousel
                withIndicators
                height={500}
                sx={{ maxWidth: "100%" }}
                controlSize={60}
                slideGap="md"
                loop
                align="start"
                p={20}
                controlsOffset={10}
            >

                <HeroCarouselSlide name={"Air max"} img={"https://images.unsplash.com/photo-1627055830617-c205679d09e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpciUyMG1heHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} />
                <HeroCarouselSlide name={"Dior Bag"} img={"https://images.unsplash.com/photo-1652427019217-3ded1a356f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBoYW5kYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                <HeroCarouselSlide name={"LV White T-shirt"} img={"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
            </Carousel>

            <div className='discount_sales'>
                <h2>Discount sales</h2>
                <div className={"product_container"}>
                    <div className={"card"}>
                        <img src="https://images.unsplash.com/photo-1612015670817-0127d21628d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpvZ2dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
