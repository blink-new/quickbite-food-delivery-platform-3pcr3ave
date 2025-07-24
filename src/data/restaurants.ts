import { MenuItem } from '../types/cart';

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  description: string;
  address: string;
  phone: string;
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Bella Italia',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    description: 'Authentic Italian cuisine with fresh ingredients and traditional recipes.',
    address: '123 Main St, Downtown',
    phone: '(555) 123-4567'
  },
  {
    id: '2',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    cuisine: 'Japanese',
    rating: 4.9,
    deliveryTime: '30-40 min',
    deliveryFee: 3.99,
    description: 'Premium sushi and Japanese dishes made by expert chefs.',
    address: '456 Oak Ave, Midtown',
    phone: '(555) 234-5678'
  },
  {
    id: '3',
    name: 'Burger Palace',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    cuisine: 'American',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 1.99,
    description: 'Gourmet burgers and classic American comfort food.',
    address: '789 Pine St, Uptown',
    phone: '(555) 345-6789'
  },
  {
    id: '4',
    name: 'Spice Garden',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
    cuisine: 'Indian',
    rating: 4.7,
    deliveryTime: '35-45 min',
    deliveryFee: 2.49,
    description: 'Authentic Indian spices and traditional curry dishes.',
    address: '321 Elm St, Eastside',
    phone: '(555) 456-7890'
  }
];

export const menuItems: MenuItem[] = [
  // Bella Italia Menu
  {
    id: 'pizza-margherita',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomato sauce, basil, and olive oil on crispy thin crust',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=300&fit=crop',
    category: 'Pizza',
    restaurantId: '1',
    restaurantName: 'Bella Italia'
  },
  {
    id: 'pasta-carbonara',
    name: 'Spaghetti Carbonara',
    description: 'Classic Roman pasta with eggs, pecorino cheese, pancetta, and black pepper',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=300&fit=crop',
    category: 'Pasta',
    restaurantId: '1',
    restaurantName: 'Bella Italia'
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    description: 'Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop',
    category: 'Dessert',
    restaurantId: '1',
    restaurantName: 'Bella Italia'
  },
  
  // Sushi Master Menu
  {
    id: 'salmon-roll',
    name: 'Salmon Avocado Roll',
    description: 'Fresh salmon, avocado, and cucumber wrapped in seasoned rice and nori',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop',
    category: 'Sushi',
    restaurantId: '2',
    restaurantName: 'Sushi Master'
  },
  {
    id: 'chirashi-bowl',
    name: 'Chirashi Bowl',
    description: 'Assorted sashimi over seasoned sushi rice with wasabi and pickled ginger',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop',
    category: 'Bowl',
    restaurantId: '2',
    restaurantName: 'Sushi Master'
  },
  {
    id: 'miso-soup',
    name: 'Miso Soup',
    description: 'Traditional Japanese soup with tofu, seaweed, and green onions',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop',
    category: 'Soup',
    restaurantId: '2',
    restaurantName: 'Sushi Master'
  },
  
  // Burger Palace Menu
  {
    id: 'classic-burger',
    name: 'Classic Cheeseburger',
    description: 'Beef patty, cheddar cheese, lettuce, tomato, onion, and special sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
    category: 'Burger',
    restaurantId: '3',
    restaurantName: 'Burger Palace'
  },
  {
    id: 'truffle-fries',
    name: 'Truffle Fries',
    description: 'Crispy fries with truffle oil, parmesan cheese, and fresh herbs',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop',
    category: 'Sides',
    restaurantId: '3',
    restaurantName: 'Burger Palace'
  },
  {
    id: 'chocolate-shake',
    name: 'Chocolate Milkshake',
    description: 'Rich chocolate milkshake topped with whipped cream and chocolate chips',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=300&fit=crop',
    category: 'Drinks',
    restaurantId: '3',
    restaurantName: 'Burger Palace'
  },
  
  // Spice Garden Menu
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Tender chicken in creamy tomato-based curry with aromatic spices',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop',
    category: 'Curry',
    restaurantId: '4',
    restaurantName: 'Spice Garden'
  },
  {
    id: 'biryani',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice with spiced chicken, saffron, and fried onions',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=300&fit=crop',
    category: 'Rice',
    restaurantId: '4',
    restaurantName: 'Spice Garden'
  },
  {
    id: 'naan-bread',
    name: 'Garlic Naan',
    description: 'Fresh baked naan bread with garlic, butter, and cilantro',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop',
    category: 'Bread',
    restaurantId: '4',
    restaurantName: 'Spice Garden'
  }
];

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find(restaurant => restaurant.id === id);
}

export function getMenuItemsByRestaurant(restaurantId: string): MenuItem[] {
  return menuItems.filter(item => item.restaurantId === restaurantId);
}

export function getMenuItemsByCategory(restaurantId: string, category: string): MenuItem[] {
  return menuItems.filter(item => item.restaurantId === restaurantId && item.category === category);
}

export function getUniqueCategories(restaurantId: string): string[] {
  const items = getMenuItemsByRestaurant(restaurantId);
  return [...new Set(items.map(item => item.category))];
}