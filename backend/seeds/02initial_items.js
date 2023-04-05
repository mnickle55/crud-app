/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('items').del()
  await knex('items').insert([
    {
      name: "Widget A",
      description: "This small widget is a versatile tool that can be used for a variety of tasks. Its compact size makes it easy to handle and store.",
      quantity: 50,
      user_id: 1
    },
    {
      name: "Widget B",
      description: "This medium-sized widget is a high-performance tool with advanced features that can help you accomplish your tasks more efficiently. Its ergonomic design ensures a comfortable grip during extended use.",
      quantity: 20,
      user_id: 1
    },
    {
      name: "Gadget C",
      description: "This cutting-edge gadget is a must-have for anyone who wants to stay connected and productive on the go. Its wireless capabilities allow you to access the internet and other devices from anywhere.",
      quantity: 10,
      user_id: 1
    },
    {
      name: "Gizmo D",
      description: "This compact gizmo is a multi-functional device that can be used for a variety of tasks. Its intuitive interface makes it easy to operate, and its durable construction ensures long-lasting performance.",
      quantity: 30,
      user_id: 1
    },
    {
      name: "Thingamabob E",
      description: "This odd-looking thingamabob may seem like a novelty item, but it actually has a hidden purpose that can be useful in certain situations. Its unique design is sure to spark conversation wherever you go.",
      quantity: 5,
      user_id: 1
    },
    {
      name: "Doohickey F",
      description: "This specialized doohickey is the perfect tool for a specific task that requires precision and accuracy. Its high-quality materials and construction ensure that it will last for years of use.",
      quantity: 15,
      user_id: 1
    },
    {
      name: "Widget G",
      description: "This high-tech widget is a state-of-the-art tool that can help you tackle even the toughest tasks with ease. Its advanced features and intuitive interface make it a top choice for professionals.",
      quantity: 25,
      user_id: 1
    },
    {
      name: "Gadget H",
      description: "This sleek gadget is a versatile device that can be used for a wide range of tasks. Its slim design makes it easy to carry in your pocket or bag, so you can take it with you wherever you go.",
      quantity: 12,
      user_id: 1
    },
    {
      name: "Gizmo I",
      description: "This multi-functional gizmo is a must-have tool for anyone who needs to be prepared for anything. Its compact size makes it easy to store in a bag or glove compartment, and its durable construction ensures that it can handle whatever comes your way.",
      quantity: 18,
      user_id: 1
    },
    {
      name: "Thingamabob J",
      description: "This unusual thingamabob is a conversation starter that also happens to have practical uses. Its unique design and features make it a fun and useful tool to have on hand.",
      quantity: 7,
      user_id: 1
    },
    {
      name: "Doohickey K",
      description: "This precision doohickey is a specialized tool that can help you accomplish tasks that require exact measurements and careful attention to detail. Its high-quality construction ensures that it will provide accurate results time and time again.",
      quantity: 22,
      user_id: 1
    }
  ]);
};
