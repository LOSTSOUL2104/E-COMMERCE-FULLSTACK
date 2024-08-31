// App.js
import { useState, useEffect } from "react";
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import { getPopularProducts, getCustomerReviews } from "./api";

const App = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [customerReviews, setCustomerReviews] = useState([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      const products = await getPopularProducts();
      setPopularProducts(products);
    };

    const fetchCustomerReviews = async () => {
      const reviews = await getCustomerReviews();
      setCustomerReviews(reviews);
    };

    fetchPopularProducts();
    fetchCustomerReviews();
  }, []);

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts products={popularProducts} />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="py-10 padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews reviews={customerReviews} />
      </section>
      <section className="w-full py-16 padding-x sm:py-32">
        <Subscribe />
      </section>
      <section className="pb-8 bg-black padding-x padding-t">
        <Footer />
      </section>
    </main>
  );
};

export default App;
