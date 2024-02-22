import ExclusiveOffer from "../Exclusive-Offer/ExclusiveOffer";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NewCollection from "../New-Collection/NewCollection";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularWomen from "../Popular-Women/PopularWomen";
import Hero from "../ShopElement/Hero/Hero";



const Shop = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <PopularWomen></PopularWomen>
            <ExclusiveOffer></ExclusiveOffer>
            <NewCollection></NewCollection>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Shop;