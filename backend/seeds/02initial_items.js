/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('items').del()
  await knex('items').insert([
    {
      name: "Organic Apples",
      description: "This bag of fresh, juicy, organic apples is perfect for snacking or cooking. The apples are grown using sustainable farming methods that prioritize the health of the environment and the people who cultivate them. Eating organic produce like these apples helps to reduce exposure to harmful chemicals and promotes a healthier planet.",
      quantity: 15,
      user_id: 2
      },
      {
      name: "Bluetooth Earbuds",
      description: "These wireless earbuds are designed to provide high-quality sound and noise-cancellation technology. With their sleek design and convenient charging case, these earbuds are perfect for use on the go. The earbuds are compatible with most devices that support Bluetooth, making them a versatile and useful accessory.",
      quantity: 8,
      user_id: 2
      },
      {
      name: "Reusable Water Bottle",
      description: "This durable, eco-friendly water bottle is a great way to reduce waste and promote sustainable living. Made from BPA-free materials, this bottle is safe and easy to use. The leak-proof lid ensures that your drinks stay put, and the bottle's sturdy construction makes it ideal for use on the go. Choose this reusable water bottle to stay hydrated while making a positive impact on the environment.",
      quantity: 20,
      user_id: 2
      },
      {
      name: "Non-Stick Frying Pan",
      description: "This high-quality frying pan is designed with a non-stick surface that makes cooking and cleaning a breeze. The durable materials and suitable design make this pan ideal for use on all types of stovetops. With its versatile design and easy-to-use features, this pan is a must-have for any home chef.",
      quantity: 5,
      user_id: 2
      },
      {
      name: "Cotton Bath Towels",
      description: "These soft and absorbent bath towels are made from 100% cotton and are available in a variety of colors to match any bathroom decor. The towels are easy to care for and maintain, making them a practical and stylish addition to any home. Choose these cotton bath towels to add a touch of luxury to your daily routine.",
      quantity: 12,
      user_id: 2
      },
      {
      name: "Stainless Steel Water Bottle",
      description: "This sleek and durable water bottle is made from high-quality stainless steel that keeps drinks cold for up to 24 hours and hot for up to 12 hours. The bottle's sturdy construction makes it ideal for use on the go, and its versatile design makes it suitable for use in a variety of settings. Choose this stainless steel water bottle to stay hydrated and stylish.",
      quantity: 10,
      user_id: 2
      },
      {
      name: "Wireless Charging Pad",
      description: "This convenient charging pad allows you to charge your smartphone or other devices without the hassle of cords and cables. The pad is compatible with most devices that support wireless charging, making it a versatile and useful accessory. With its sleek design and easy-to-use features, this charging pad is a must-have for any tech-savvy individual.",
      quantity: 3,
      user_id: 2
      },
      {
      name: "Hiking Backpack",
      description: "This sturdy and spacious backpack is designed for hiking and outdoor adventures. With its multiple pockets and compartments, this backpack is perfect for storing all your gear. The backpack's durable construction and comfortable design make it ideal for long hikes and camping trips. Choose this hiking backpack to stay organized and comfortable on your next outdoor adventure.",
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
      description: "A high-tech smartwatch with a built-in heart rate monitor, GPS, and fitness tracking features. Allows you to monitor your workouts and progress, receive notifications, make calls, and access various apps. Compatible with both iOS and Android devices. Perfect for those who want to stay connected and active.",
      quantity: 4,
      user_id: 1
    },
    {
      name: "Electric Kettle",
      description: "A fast and efficient electric kettle that boils water quickly and safely. Comes with automatic shut-off and boil-dry protection features for added safety. The large capacity makes it perfect for making tea, coffee, or any hot beverage in a hurry. The sleek and modern design adds style to any kitchen.",
      quantity: 7,
      user_id: 1
    },
    {
      name: "Noise-Cancelling Headphones",
      description: "A pair of high-quality headphones with noise-cancelling technology for immersive and distraction-free listening. Also comes with a built-in microphone for making calls and voice commands. The comfortable and adjustable design makes them perfect for long hours of use. Ideal for music lovers, commuters, and anyone who needs to focus.",
      quantity: 2,
      user_id: 1
    },
    {
      name: "Fitness Tracker",
      description: "A wearable device that tracks your daily activity, including steps taken, calories burned, and distance traveled. Also includes sleep tracking and heart rate monitoring features for a complete health and fitness analysis. The easy-to-read display and intuitive interface make it simple to use. Perfect for fitness enthusiasts, athletes, and anyone looking to improve their health.",
      quantity: 6,
      user_id: 1
    },
    {
      name: "Air Purifier",
      description: "A device that purifies the air in your home by removing allergens, pollutants, and other harmful particles. Comes with multiple speed settings and a filter replacement indicator for added convenience. The sleek and compact design makes it easy to fit in any room. Ideal for anyone with allergies, asthma, or other respiratory issues.",
      quantity: 3,
      user_id: 1
    },
    {
      name: "Slow Cooker",
      description: "A kitchen appliance that allows you to cook delicious and healthy meals with minimal effort. Comes with multiple cooking settings, a timer, and a keep-warm function for added versatility. The large capacity makes it perfect for feeding families and hosting parties. The removable inner pot and dishwasher-safe components make it easy to clean.",
      quantity: 5,
      user_id: 1
    },
    {
      name: "Bluetooth Speaker",
      description: "A portable and waterproof speaker that connects to your smartphone or other devices via Bluetooth. Provides high-quality sound and long battery life for up to 12 hours of continuous use. The durable and compact design makes it perfect for outdoor activities, traveling, and parties. Compatible with all Bluetooth-enabled devices.",
      quantity: 8,
      user_id: 1
    },
    {
      name: "Indoor Plants",
      description: "A set of indoor plants that add natural beauty and freshness to your home. Comes in a variety of sizes and species, suitable for all types of environments. The plants are easy to care for and require minimal attention. Ideal for anyone who wants to create a natural and calming atmosphere in their home.",
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
