/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('items').del()
  await knex('items').insert([
    {
      name: "Organic Apples",
      description: "A bag of fresh, juicy, organic apples, perfect for snacking or cooking. Grown using sustainable farming methods.",
      quantity: 15,
      user_id: 2
    },
    {
      name: "Bluetooth Earbuds",
      description: "A set of wireless earbuds with high-quality sound and noise-cancellation technology. Comes with a charging case for easy storage and portability.",
      quantity: 8,
      user_id: 2
    },
    {
      name: "Reusable Water Bottle",
      description: "A durable, eco-friendly water bottle that can be used again and again. Made from BPA-free materials and comes with a leak-proof lid.",
      quantity: 20,
      user_id: 2
    },
    {
      name: "Non-Stick Frying Pan",
      description: "A high-quality frying pan with a non-stick surface for easy cooking and cleaning. Made from durable materials and suitable for use on all types of stovetops.",
      quantity: 5,
      user_id: 2
    },
    {
      name: "Cotton Bath Towels",
      description: "A set of soft and absorbent bath towels made from 100% cotton. Comes in a variety of colors to match any bathroom decor.",
      quantity: 12,
      user_id: 2
    },
    {
      name: "Stainless Steel Water Bottle",
      description: "A sleek and durable water bottle made from stainless steel. Keeps drinks cold for up to 24 hours and hot for up to 12 hours.",
      quantity: 10,
      user_id: 2
    },
    {
      name: "Wireless Charging Pad",
      description: "A convenient charging pad that allows you to charge your smartphone or other devices without the hassle of cords and cables. Compatible with most devices that support wireless charging.",
      quantity: 3,
      user_id: 2
    },
    {
      name: "Hiking Backpack",
      description: "A sturdy and spacious backpack designed for hiking and outdoor adventures. Comes with multiple pockets and compartments to store all your gear.",
      quantity: 6,
      user_id: 2
    },
    {
      name: "Natural Face Wash",
      description: "A gentle and effective face wash made from natural ingredients like aloe vera and green tea. Suitable for all skin types and free from harsh chemicals.",
      quantity: 15,
      user_id: 2
    },
    {
      name: "Reusable Grocery Bags",
      description: "A set of reusable grocery bags made from durable and eco-friendly materials. Comes in a variety of sizes and colors for all your shopping needs.",
      quantity: 18,
      user_id: 2
    },
    {
      name: "Smartwatch",
      description: "A high-tech smartwatch with a built-in heart rate monitor, GPS, and fitness tracking features. Also allows you to receive notifications and make calls.",
      quantity: 4,
      user_id: 1
    },
    {
      name: "Electric Kettle",
      description: "A fast and efficient electric kettle that boils water quickly and safely. Comes with automatic shut-off and boil-dry protection features.",
      quantity: 7,
      user_id: 1
    },
    {
      name: "Noise-Cancelling Headphones",
      description: "A pair of high-quality headphones with noise-cancelling technology for immersive and distraction-free listening. Also comes with a microphone for making calls.",
      quantity: 2,
      user_id: 1
    },
    {
      name: "Fitness Tracker",
      description: "A wearable device that tracks your daily activity, including steps taken, calories burned, and distance traveled. Also includes sleep tracking and heart rate monitoring features.",
      quantity: 6,
      user_id: 1
    },
    {
      name: "Air Purifier",
      description: "A device that purifies the air in your home by removing allergens, pollutants, and other harmful particles. Comes with multiple speed settings and a filter replacement indicator.",
      quantity: 3,
      user_id: 1
    },
    {
      name: "Slow Cooker",
      description: "A kitchen appliance that allows you to cook delicious and healthy meals with minimal effort. Comes with multiple cooking settings and a removable inner pot for easy cleaning.",
      quantity: 5,
      user_id: 1
    },
    {
      name: "Bluetooth Speaker",
      description: "A portable and waterproof speaker that connects to your smartphone or other devices via Bluetooth. Provides high-quality sound and long battery life.",
      quantity: 8,
      user_id: 1
    },
    {
      name: "Indoor Plants",
      description: "A set of indoor plants that add natural beauty and freshness to your home. Comes in a variety of sizes and species, suitable for all types of environments.",
      quantity: 9,
      user_id: 1
    },
    {
      name: "Smart Thermostat",
      description: "A thermostat that learns your preferred temperature settings and adjusts accordingly. Also allows you to control your home's temperature remotely via your smartphone.",
      quantity: 1,
      user_id: 1
    },
    {
      name: "Wireless Keyboard and Mouse",
      description: "A set of wireless keyboard and mouse that allows you to work or play from a distance. Provides high-speed and accurate connectivity, perfect for gaming and productivity.",
      quantity: 3,
      user_id: 1
    }
  ]);
};
