import { createContext, useContext, useReducer, useEffect } from 'react';
import { cartService } from '../services/api';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    loading: true,
  });

  // Fetch cart on mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await cartService.getCart();
        dispatch({ type: 'SET_CART', payload: response.data });
      } catch (error) {
        console.error('Error fetching cart:', error);
        dispatch({ type: 'SET_CART', payload: [] });
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (product) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await cartService.addToCart(product.id, 1);
      dispatch({ type: 'ADD_TO_CART', payload: response.data });
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      await cartService.removeFromCart(itemId);
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    } catch (error) {
      console.error('Error removing from cart:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      await cartService.updateCartItem(itemId, quantity);
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const clearCart = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      await cartService.clearCart();
      dispatch({ type: 'CLEAR_CART' });
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        loading: state.loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 