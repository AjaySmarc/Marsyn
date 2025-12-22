import { useState } from 'react';
import './Shop.css';
import shopitems from '../data/shopitems';
import { Helmet } from 'react-helmet-async';

// Mock initial products

function Shop() {
  const [products, setProducts] = useState(shopitems);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [isPaymentRedirecting, setIsPaymentRedirecting] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [purchasedDigitalProducts, setPurchasedDigitalProducts] = useState([]);

  // Cart total calculation
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Check if cart has any paid items
  const hasPaidItems = cart.some((item) => item.price > 0);

  // Add to cart function - ALL products go to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          showNotification(
            `Only ${product.stock} items available in stock`,
            'warning'
          );
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showNotification(`${product.name} added to cart!`, 'success');
  };

  // Handle digital download
  const handleDigitalDownload = (product) => {
    if (product.file) {
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = product.file;
      link.download = `${product.name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showNotification(`🎉 Downloading "${product.name}"`, 'success');
      addToPurchasedProducts(product);
    }
  };

  // Add product to purchased list
  const addToPurchasedProducts = (product) => {
    setPurchasedDigitalProducts((prev) => [...prev, product.id]);
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showNotification('Item removed from cart', 'info');
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    const product = products.find((p) => p.id === productId);

    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    if (product && newQuantity > product.stock) {
      showNotification(`Only ${product.stock} items available`, 'warning');
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Notification system with animations
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  // Payment methods
  const paymentMethods = [
    { id: 'paytm', name: 'Paytm', icon: '💸' },
    { id: 'phonepay', name: 'PhonePe', icon: '📱' },
    { id: 'gpay', name: 'Google Pay', icon: 'ⓖ' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'upi', name: 'UPI', icon: '📲' },
  ];

  // Handle checkout
  const handleCheckout = () => {
    if (!hasPaidItems) {
      // Handle free downloads only
      cart.forEach((item) => {
        if (item.isDigital && item.file) {
          handleDigitalDownload(item);
        }
      });
      setCart([]);
      setIsCartOpen(false);
      showNotification('🎉 Free downloads completed!', 'success');
      return;
    }

    // For paid items, check if payment method is selected
    if (!selectedPaymentMethod && cartTotal > 0) {
      showNotification('Please select a payment method', 'warning');
      return;
    }

    // For paid items with payment method selected
    setIsPaymentRedirecting(true);
    showNotification(`Processing ${selectedPaymentMethod} payment...`, 'info');

    // Simulate payment processing
    setTimeout(() => {
      setIsPaymentRedirecting(false);

      // Handle digital product downloads after payment
      const digitalProducts = cart.filter(
        (item) => item.isDigital && item.file
      );
      digitalProducts.forEach((product) => {
        if (product.file) {
          handleDigitalDownload(product);
        }
      });

      // Update stock for all products
      setProducts((prevProducts) =>
        prevProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          if (cartItem) {
            return {
              ...product,
              stock: Math.max(0, product.stock - cartItem.quantity),
            };
          }
          return product;
        })
      );

      showNotification(
        `🎉 Payment successful via ${selectedPaymentMethod}! Downloads started.`,
        'success'
      );
      setCart([]);
      setIsCartOpen(false);
      setSelectedPaymentMethod('');
    }, 2000);
  };

  // Process payment - Add your payment API logic here
  // const processPayment = () => {
  // TODO: Add payment API integration logic here

  // Example structure for payment API call:
  /*
    const paymentData = {
      amount: cartTotal,
      method: selectedPaymentMethod,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    };
    
    // Replace with your actual payment API endpoint
    fetch('https://your-payment-api.com/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Handle successful payment
      } else {
        // Handle payment failure
      }
    })
    .catch(error => {
      // Handle error
    });
    */
  // };

  // Payment processing page
  const PaymentPage = () => (
    <div className="payment-page">
      <div className="payment-content">
        <div className="payment-loader">
          <div className="spinner"></div>
          <h2>Processing Payment via {selectedPaymentMethod}...</h2>
          <p>Please wait while we secure your transaction</p>
          <div className="payment-details">
            <p>
              Total Amount: <strong>${cartTotal.toFixed(2)}</strong>
            </p>
            <p>
              Payment Method: <strong>{selectedPaymentMethod}</strong>
            </p>
            <p>Items: {cart.length}</p>
          </div>

          {/* TODO: Add payment gateway redirect here */}
          <div className="payment-redirect-info">
            <p>🔗 Redirecting to {selectedPaymentMethod} gateway...</p>
            <p className="api-note">
              // Add payment gateway redirect API call here
              {/* Example: window.location.href = `https://paytm.com/payment?amount=${cartTotal}` */}
            </p>
          </div>

          <button
            className="cancel-payment-btn"
            onClick={() => setIsPaymentRedirecting(false)}
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </div>
  );

  // Check if product is already purchased
  const isProductPurchased = (productId) => {
    return purchasedDigitalProducts.includes(productId);
  };

  return (
    <div className="shop-container">
      <Helmet>
        <title>Marsyn Shop | Digital & Premium Products</title>
        <meta
          name="description"
          content="Browse Marsyn's collection of digital and premium products. Enjoy instant downloads, secure checkout, and exclusive content for creators and businesses."
        />
      </Helmet>

      {isPaymentRedirecting && <PaymentPage />}

      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Header */}
      <header className="shop-header">
        <div className="header-content">
          <h1>🛍️ Digital & Premium Store</h1>
          <p className="store-tagline">
            Instant downloads · Premium products · Secure checkout
          </p>
        </div>
        <div className="header-controls">
          <button className="cart-button" onClick={() => setIsCartOpen(true)}>
            <span className="cart-icon">🛒</span>
            Cart
            {totalItems > 0 && (
              <span className="cart-badge pulse">{totalItems}</span>
            )}
          </button>
        </div>
      </header>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${
              product.isDigital ? 'digital' : 'physical'
            } ${isProductPurchased(product.id) ? 'purchased' : ''}`}
          >
            {product.isDigital && (
              <div className="digital-badge">
                <span className="badge-icon">💾</span> Digital
              </div>
            )}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">
                {product.category} {product.isDigital && '· Instant Download'}
              </p>
              <p className="product-price">
                {product.price === 0 ? 'FREE' : `$${product.price.toFixed(2)}`}
              </p>
              <p className="product-stock">
                {product.isDigital
                  ? 'Unlimited copies'
                  : `Stock: ${product.stock}`}
              </p>

              {isProductPurchased(product.id) ? (
                <button
                  className="download-btn purchased"
                  onClick={() => handleDigitalDownload(product)}
                >
                  ⬇️ Download Again
                </button>
              ) : (
                <button
                  className={`add-to-cart-btn ${
                    product.stock === 0 ? 'out-of-stock' : ''
                  }`}
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock === 0 ? 'Out of Stock' : '🛒 Add to Cart'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Side Panel */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div
            className="cart-panel slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cart-header">
              <h2>🛒 Your Shopping Cart</h2>
              <button
                className="close-cart"
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart-state">
                  <div className="empty-cart-icon">🛒</div>
                  <p>Your cart is empty</p>
                  <small>Add some products to get started!</small>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item fade-in">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                      {item.isDigital && (
                        <span className="mini-digital-badge">💾</span>
                      )}
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">
                        {item.price === 0
                          ? 'FREE'
                          : `$${item.price.toFixed(2)}`}
                      </p>
                      {item.isDigital && (
                        <small className="digital-hint">
                          {item.price === 0
                            ? 'Download immediately after checkout'
                            : 'Download after payment'}
                        </small>
                      )}
                    </div>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        disabled={
                          item.quantity >= item.stock && !item.isDigital
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
                {/* Payment Method Selection - Only show if cart has paid items */}
                {hasPaidItems && (
                  <div className="payment-methods">
                    <h3>Select Payment Method</h3>
                    <div className="payment-options">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          className={`payment-option ${
                            selectedPaymentMethod === method.name
                              ? 'selected'
                              : ''
                          }`}
                          onClick={() => setSelectedPaymentMethod(method.name)}
                        >
                          <span className="payment-icon">{method.icon}</span>
                          <span>{method.name}</span>
                        </button>
                      ))}
                    </div>
                    {selectedPaymentMethod && (
                      <p className="payment-selected">
                        ✅ Selected: <strong>{selectedPaymentMethod}</strong>
                      </p>
                    )}
                  </div>
                )}

                <div className="cart-total">
                  <div className="total-row">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  {cartTotal === 0 && (
                    <div className="free-notice">
                      <span className="free-badge">FREE</span>
                      <span>All items are free to download!</span>
                    </div>
                  )}
                  <div className="grand-total">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="cart-warning">
                  {hasPaidItems && selectedPaymentMethod && (
                    <p className="payment-info">
                      💳 Paying with {selectedPaymentMethod}
                    </p>
                  )}
                  {cart.some((item) => item.isDigital) && (
                    <p className="digital-info">
                      💾 Digital items available after{' '}
                      {hasPaidItems ? 'payment' : 'checkout'}
                    </p>
                  )}
                </div>

                <button
                  className={`checkout-btn ${
                    cartTotal === 0 ? 'free-checkout' : 'paid-checkout'
                  }`}
                  onClick={handleCheckout}
                  disabled={hasPaidItems && !selectedPaymentMethod}
                >
                  {cartTotal === 0
                    ? '🎁 Download All Items'
                    : `🚀 Pay $${cartTotal.toFixed(2)}`}
                </button>

                {/* API Integration Note */}
                {hasPaidItems && selectedPaymentMethod && (
                  <div className="api-integration-note">
                    <small>
                      💡 <strong>API Integration Required:</strong> Add your
                      payment gateway redirect logic in the{' '}
                      <code>processPayment()</code> function
                    </small>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Animated Notification */}
      {notification.message && (
        <div className={`notification ${notification.type} slide-down`}>
          <div className="notification-content">
            <span className="notification-icon">
              {notification.type === 'success' && '✅'}
              {notification.type === 'warning' && '⚠️'}
              {notification.type === 'info' && 'ℹ️'}
              {notification.type === 'error' && '❌'}
            </span>
            <span>{notification.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
