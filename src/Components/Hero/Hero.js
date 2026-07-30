import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {

  // Hero Slider Data
  const slides = [
    {
      id: 1,
      title: "Luxury Silk Collection",
      subtitle: "New Arrival 2026",
      description:
        "Discover handcrafted silk sarees with premium quality and timeless elegance.",
      image:
       " https://images.openai.com/static-rsc-4/XraLqgNywb34l8ISjszUnRFJu0E2RQkzY-Zqd6_yktP7vhO666q93n51HturKzP6B4n2U0zrrhIwHPYhp6p9cm3ZJGdnpMRXPBWf5jnSW7uJogpTAxNkJDHai4yLc_ASaDnIYl7XAeyQs9HGN6QXIvYhFXlLYH02ryF2ufclkIR7XFzUnQ04dwxXR1cO8wDE?purpose=fullsize"
    },
    {
      id: 2,
      title: "Wedding Special",
      subtitle: "Exclusive Bridal Wear",
      description:
        "Make your special day unforgettable with our exclusive bridal collection.",
      image:
        "https://images.openai.com/static-rsc-4/DeHIml6OqMFI_H0SiXvMsE_7copn11ecEMtmQpiFn8aFFHUXCpoi-UTnnm4dvYWFJmpg5LPwYPzuSPBnLXWmIAX40k9CmFXHwGKNZJsmav7TapNEmq6BKwfTSCq-cTbY8mpyhALejDtqUO7Pi9zLjtY6Ko9OexqE6H4a8sAuyj93foKiWsQTigiN4X8rAoDX?purpose=fullsize",
    },
    {
      id: 3,
      title: "Festive Collection",
      subtitle: "Limited Time Offer",
      description:
        "Celebrate every festival in style with vibrant designer sarees.",
      image:
        "https://images.openai.com/static-rsc-4/4L_49uvyQpbjkILSYXjpKZjr6Mw0UbDBDBsbbzKDfYz7nGM-CfUW1l1gcBVaUI36ilc6GBUKbJ87ZpqaaDHGnQghuEslmb9m0os4L84uV7EOiIbpcguG1FcwMKNF_kyxzSN09cG2RyEEh9Btos7Wxp5Zl_ffX1Wi9ca6kOl0nUJQv0ApNEIaTH0Aq3v7oDtT?purpose=fullsize",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-subtitle">
          {slides[currentSlide].subtitle}
        </p>

        <h1>{slides[currentSlide].title}</h1>

        <p className="hero-description">
          {slides[currentSlide].description}
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">
            Shop Now
          </button>

          <button className="learn-btn">
            Explore
          </button>
        </div>

      </div>

      <div className="hero-right">

        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
        />

      </div>

      {/* Slider Dots */}
      <div className="dots">

        {slides.map((item, index) => (
          <span
            key={item.id}
            className={
              currentSlide === index
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}

      </div>

    </section>
  );
}

export default Hero;