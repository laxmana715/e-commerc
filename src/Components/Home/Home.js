import { useState } from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Products from "../Product/Products";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";



function Home() {
  const [cartCount, setCartCount] = useState(0);


  
  const products = [
    {
      id: 1,
      name: "Royal Silk Saree",
      price: 2999,
      image:
        "https://images.openai.com/static-rsc-4/XraLqgNywb34l8ISjszUnRFJu0E2RQkzY-Zqd6_yktP7vhO666q93n51HturKzP6B4n2U0zrrhIwHPYhp6p9cm3ZJGdnpMRXPBWf5jnSW7uJogpTAxNkJDHai4yLc_ASaDnIYl7XAeyQs9HGN6QXIvYhFXlLYH02ryF2ufclkIR7XFzUnQ04dwxXR1cO8wDE?purpose=fullsize",
      sale: true,
    },
    {
      id: 2,
      name: "Wedding Collection",
      price: 4599,
      image:
        "https://images.openai.com/static-rsc-4/DeHIml6OqMFI_H0SiXvMsE_7copn11ecEMtmQpiFn8aFFHUXCpoi-UTnnm4dvYWFJmpg5LPwYPzuSPBnLXWmIAX40k9CmFXHwGKNZJsmav7TapNEmq6BKwfTSCq-cTbY8mpyhALejDtqUO7Pi9zLjtY6Ko9OexqE6H4a8sAuyj93foKiWsQTigiN4X8rAoDX?purpose=fullsize",
      sale: false,
    },
    {
      id: 3,
      name: "Cotton Saree",
      price: 1899,
      image:
        "https://images.openai.com/static-rsc-4/wwp2OegPrUhV3CwoVMhkzQK7pYyJdRVcjEWShtU4bhokx6MXb4YVrNwerx-yPQ3MlhrvvgjFWuHES4VB65lEssD6-TdCoX7eFKv7nL6o25N4nXyCzmvIKLtH5ja8A1fsZoR5UGivKudcWDBNMGAVkg3wZQ8chNBo47FbrWY9gi5EoC8zxX8qK6nRZ4ZxvQaG?purpose=fullsize",
      sale: true,
    },
    {
      id: 4,
      name: "Designer Saree",
      price: 5499,
      image:
        "https://images.openai.com/static-rsc-4/sgwlcQnDZrqiLb5AyW7pSNY0btnSEnljfGp0PfivG13j2lzAH2U7-_tUinGZR40IokfWZlYOkKXq6IkoW84JchdEGPKVwUTh3YSWF8m2Rou8CohfZMQj1htZdpCLOcN6oj2jIYs2N41DJ6-6Ull7OaALfoiNXOF4eyR3ZLKD94x8GNDAQnTz3hC51d7FGnXc?purpose=fullsize",
      sale: false,
    },
    
  ];

  return (
    <>
      <Navbar />

      <Hero />

      <Categories />

      <Products
        products={products}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />

      <Newsletter />

      <Footer />
    </>
  );
}

export default Home;