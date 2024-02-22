import ExclusiveOffer from "../Exclusive-Offer/ExclusiveOffer";
import Navbar from "../Navbar/Navbar";
import PopularWomen from "../Popular-Women/PopularWomen";
import Hero from "../ShopElement/Hero/Hero";



const Shop = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <PopularWomen></PopularWomen>
            <ExclusiveOffer></ExclusiveOffer>
        </div>
    );
};

export default Shop;