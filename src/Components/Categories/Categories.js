import { useState } from "react";
import "./Categories.css";
import CategoryCard from "./CategoryCard";

function Categories() {

  const [selectedCategory, setSelectedCategory] =
    useState("None");

  const categories = [
    {
      id: 1,
      name: "Silk Sarees",
      image:
         "https://images.openai.com/static-rsc-4/XraLqgNywb34l8ISjszUnRFJu0E2RQkzY-Zqd6_yktP7vhO666q93n51HturKzP6B4n2U0zrrhIwHPYhp6p9cm3ZJGdnpMRXPBWf5jnSW7uJogpTAxNkJDHai4yLc_ASaDnIYl7XAeyQs9HGN6QXIvYhFXlLYH02ryF2ufclkIR7XFzUnQ04dwxXR1cO8wDE?purpose=fullsize",
      items: 120,
    },
    {
      id: 2,
      name: "Cotton Sarees",
      image:
      "https://images.openai.com/static-rsc-4/wwp2OegPrUhV3CwoVMhkzQK7pYyJdRVcjEWShtU4bhokx6MXb4YVrNwerx-yPQ3MlhrvvgjFWuHES4VB65lEssD6-TdCoX7eFKv7nL6o25N4nXyCzmvIKLtH5ja8A1fsZoR5UGivKudcWDBNMGAVkg3wZQ8chNBo47FbrWY9gi5EoC8zxX8qK6nRZ4ZxvQaG?purpose=fullsize",
      items: 80,
    },
    {
      id: 3,
      name: "Designer Sarees",
      image:
        "https://images.openai.com/static-rsc-4/sgwlcQnDZrqiLb5AyW7pSNY0btnSEnljfGp0PfivG13j2lzAH2U7-_tUinGZR40IokfWZlYOkKXq6IkoW84JchdEGPKVwUTh3YSWF8m2Rou8CohfZMQj1htZdpCLOcN6oj2jIYs2N41DJ6-6Ull7OaALfoiNXOF4eyR3ZLKD94x8GNDAQnTz3hC51d7FGnXc?purpose=fullsize",
      items: 65,
    },
    {
      id: 4,
      name: "Wedding Collection",
      image:
        "//images.openai.com/static-rsc-4/DeHIml6OqMFI_H0SiXvMsE_7copn11ecEMtmQpiFn8aFFHUXCpoi-UTnnm4dvYWFJmpg5LPwYPzuSPBnLXWmIAX40k9CmFXHwGKNZJsmav7TapNEmq6BKwfTSCq-cTbY8mpyhALejDtqUO7Pi9zLjtY6Ko9OexqE6H4a8sAuyj93foKiWsQTigiN4X8rAoDX?purpose=fullsize",
    
      items: 42,
    },
  ];

  return (
    <section className="categories">

      <h2>Shop by Category</h2>

      <p className="selected">
        Selected :
        <span> {selectedCategory}</span>
      </p>

      <div className="category-container">

        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            category={item}
            onSelect={setSelectedCategory}
          />
        ))}

      </div>

    </section>
  );
}

export default Categories;