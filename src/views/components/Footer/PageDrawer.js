import React, { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { Accordion } from "@mantine/core";

const PageDrawer = () => {
    const groceries = [
        {
          emoji: "🍎",
          value: "Apples",
          description:
            "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
        },
        {
          emoji: "🍌",
          value: "Bananas",
          description:
            "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
        },
        {
          emoji: "🥦",
          value: "Broccoli",
          description:
            "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
        },
      ];
    
      const [openItem, setOpenItem] = useState(null);
    
      const toggleChevronIcon = (index) => {
        setOpenItem(openItem === index ? null : index);
      };
    
      const items = groceries.map((item, index) => (
        <Accordion.Item key={item.value} value={item.value} open={openItem === index}>
          <Accordion.Control
            icon={openItem === index ? <IconMinus stroke={2} size={15} /> : <IconPlus stroke={2} size={15} />}
            onClick={() => toggleChevronIcon(index)}
          >
            {item.value}
          </Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ));
    
      return (
        <Accordion chevron={null}>
          {items}
        </Accordion>
      );
}

export default PageDrawer

