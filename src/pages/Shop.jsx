import { useState } from 'react';
import './Shop.css';
// import theme from '../styles/theme.css';

// Mock initial products
const initialProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics',
    stock: 15,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'Electronics',
    stock: 8,
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'Accessories',
    stock: 20,
  },
  {
    id: 4,
    name: 'Desk Lamp',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    category: 'Home',
    stock: 12,
  },
];

function Shop() {
  <div className="floating-orb"></div>;
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  // const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    stock: '',
  });

  // Cart total calculation
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Add to cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showNotification(`${product.name} added to cart!`);
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Notification system
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  // Checkout function
  const handleCheckout = () => {
    if (cartTotal > 0) {
      showNotification(
        '🎉 Thank you for your order! Your items will be shipped soon.'
      );
      setCart([]);
      setIsCartOpen(false);
    }
  };

  // Admin functions
  const addProduct = () => {
    const product = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      image: newProduct.image,
      category: newProduct.category,
      stock: parseInt(newProduct.stock),
    };
    setProducts((prev) => [...prev, product]);
    setNewProduct({ name: '', price: '', image: '', category: '', stock: '' });
    showNotification('Product added successfully!');
  };

  const deleteProduct = (productId) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
    showNotification('Product deleted successfully!');
  };

  // Sales dashboard data
  const salesData = {
    totalSales: products.reduce(
      (total, product) => total + product.price * 10,
      0
    ), // Mock data
    totalProducts: products.length,
    lowStock: products.filter((p) => p.stock < 5).length,
  };

  return (
    <div className="shop-container">
      {/* Header */}
      <header className="shop-header">
        <h1>🛍️ Premium Store</h1>
        <div className="header-controls">
          <button className="admin-toggle" onClick={() => setIsAdmin(!isAdmin)}>
            {isAdmin ? '👤 User Mode' : '⚙️ Admin Mode'}
          </button>
          <button className="cart-button" onClick={() => setIsCartOpen(true)}>
            🛒 Cart
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </header>

      {/* Admin Panel */}
      {isAdmin && (
        <div className="admin-panel">
          <h2>Admin Dashboard</h2>
          <div className="sales-stats">
            <div className="stat-card">
              <h3>Total Sales</h3>
              <p>${salesData.totalSales.toFixed(2)}</p>
            </div>
            <div className="stat-card">
              <h3>Products</h3>
              <p>{salesData.totalProducts}</p>
            </div>
            <div className="stat-card">
              <h3>Low Stock</h3>
              <p>{salesData.lowStock}</p>
            </div>
          </div>

          <div className="add-product-form">
            <h3>Add New Product</h3>
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
            />
            <button onClick={addProduct} className="add-product-btn">
              Add Product
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {isAdmin && (
                <button
                  className="delete-product-btn"
                  onClick={() => deleteProduct(product.id)}
                >
                  🗑️
                </button>
              )}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price}</p>
              <p className="product-stock">Stock: {product.stock}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Side Panel */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Your Shopping Cart</h2>
              <button
                className="close-cart"
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="cart-items">
              {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>${item.price}</p>
                    </div>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <h3>Total: ${cartTotal.toFixed(2)}</h3>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  🚀 Checkout Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default Shop;
