import Hero from "../../components/hero/Hero";
import Banner from "../../components/home/Banner";
import Feature from "../../components/home/Feature";
import NewArrivals from "../../components/home/NewArrival";
import Newsletter from "../../components/home/NewsLetter";
import ProductList from "../../components/home/ProductList";
import SmallBanner from "../../components/home/SmallBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <ProductList />
      <Banner />
      <NewArrivals />
      <SmallBanner />
      <Newsletter />
    </>
  );
};

export default Home;
