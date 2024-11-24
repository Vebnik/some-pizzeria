import { Pizzeria } from "./modules";
import { Lemonade, Pizza, PizzaDough, PizzaSize, Topping } from "./modules/product";

(async () => {
  try {
    const pizzeria = new Pizzeria("Lisitsa", "Main st. 12");

    const order = pizzeria.createOrder(
      new Pizza(475, "Pesto", PizzaSize.Medium, PizzaDough.Traditional, [
        new Topping("Cheese", 30),
        new Topping("Becon", 40),
        new Topping("Souce", 10),
      ]),
      new Lemonade(170, "Kiwi-Mango"),
    );

    pizzeria.createOrder(
      new Pizza(675, "Baby", PizzaSize.Small, PizzaDough.Thin, [
        new Topping("Cheese", 30),
        new Topping("Picke", 140),
        new Topping("Souce", 20),
      ]),
      new Lemonade(170, "Kiwi-Mango"),
      new Lemonade(270, "Zoombie"),
      new Pizza(500, "Green", PizzaSize.Medium),
    );

    const pizza = new Pizza(500, "Chilli", PizzaSize.Large);
    const lemonade = new Lemonade(100, "Xuang-Kvan");

    order.addProduct(pizza, lemonade);
    order.addProduct(pizza, lemonade);

    console.log(pizzeria.orders)
    console.log(pizzeria.address)
    console.log(pizzeria.workingHours)
    console.log(pizzeria.getOrder(order.id))

    console.log("Products:", order.products.length);
    console.log("Full price:", order.fullPrice);

    console.log("Pizzeria full orders price:", pizzeria.summary)
  } catch (err) {
    console.error(err)
  }
})()
