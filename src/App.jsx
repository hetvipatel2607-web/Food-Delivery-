import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const foodItems = [
    {
      id: 1,
      name: "Cheese Burger",
      restaurant: "Burger House",
      price: 149,
      emoji: "🍔",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Corner",
      price: 199,
      emoji: "🍕",
    },
    {
      id: 3,
      name: "Veg Biryani",
      restaurant: "Spice Kitchen",
      price: 179,
      emoji: "🍛",
    },
    {
      id: 4,
      name: "Masala Dosa",
      restaurant: "South Indian Cafe",
      price: 99,
      emoji: "🥞",
    },
    {
      id: 5,
      name: "Veg Sandwich",
      restaurant: "Fresh Bite",
      price: 89,
      emoji: "🥪",
    },
    {
      id: 6,
      name: "Chocolate Shake",
      restaurant: "Shake Station",
      price: 129,
      emoji: "🥤",
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">🍴 FoodieExpress</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#restaurants">Restaurants</a>
          <a href="#menu">Menu</a>
          <a href="#cart">Cart ({cart.length})</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">FAST • FRESH • DELICIOUS</p>

          <h1>
            Delicious food,
            <br />
            delivered to you!
          </h1>

          <p>
            Order your favourite vegetarian meals from your favourite
            restaurants.
          </p>

          <button
            className="order-button"
            onClick={() =>
              document
                .getElementById("menu")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Order Now 🍽️
          </button>
        </div>

        <div className="hero-food">🍕</div>
      </section>

      <section className="restaurants" id="restaurants">
        <h2>Popular Restaurants</h2>

        <div className="restaurant-list">
          <div className="restaurant-card">
            <div className="restaurant-icon">🍔</div>
            <h3>Burger House</h3>
            <p>Fast Food • 4.5 ⭐</p>
          </div>

          <div className="restaurant-card">
            <div className="restaurant-icon">🍕</div>
            <h3>Pizza Corner</h3>
            <p>Italian • 4.7 ⭐</p>
          </div>

          <div className="restaurant-card">
            <div className="restaurant-icon">🍛</div>
            <h3>Spice Kitchen</h3>
            <p>Indian • 4.6 ⭐</p>
          </div>

          <div className="restaurant-card">
            <div className="restaurant-icon">🥗</div>
            <h3>Fresh Bite</h3>
            <p>Healthy Food • 4.4 ⭐</p>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <h2>Popular Food Items</h2>
        <p className="section-subtitle">
          Choose your favourite food and add it to your cart.
        </p>

        <div className="food-grid">
          {foodItems.map((item) => (
            <div className="food-card" key={item.id}>
              <div className="food-image">{item.emoji}</div>

              <div className="food-details">
                <h3>{item.name}</h3>
                <p className="restaurant-name">{item.restaurant}</p>

                <div className="food-bottom">
                  <span className="price">₹{item.price}</span>

                  <button
                    className="add-button"
                    onClick={() => addToCart(item)}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cart-section" id="cart">
        <h2>Your Cart 🛒</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <p>Add some delicious food to continue!</p>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <span>
                    {item.emoji} {item.name}
                  </span>

                  <span>₹{item.price}</span>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total Amount: ₹{total}</h3>

              <button
                className="checkout-button"
                onClick={() =>
                  alert("Order placed successfully! 🎉")
                }
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </section>

      <footer>
        <h3>🍴 FoodieExpress</h3>
        <p>Fresh food delivered to your doorstep.</p>
        <p>© 2026 FoodieExpress. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;