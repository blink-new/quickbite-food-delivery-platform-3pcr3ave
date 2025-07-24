import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, DollarSign, Phone, MapPin, Plus } from 'lucide-react';
import { getRestaurantById, getMenuItemsByRestaurant, getUniqueCategories } from '../data/restaurants';
import { useCart } from '../hooks/useCart';
import { Button } from './ui/button';
import { MenuItem } from '../types/cart';

interface RestaurantDetailProps {
  restaurantId: string;
  onBack: () => void;
}

export default function RestaurantDetail({ restaurantId, onBack }: RestaurantDetailProps) {
  const restaurant = getRestaurantById(restaurantId);
  const menuItems = getMenuItemsByRestaurant(restaurantId);
  const categories = getUniqueCategories(restaurantId);
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || '');
  const { addItem, openCart } = useCart();

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const filteredItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    openCart();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span>${restaurant.deliveryFee} delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="bg-white p-6 shadow-sm">
        <p className="text-gray-600 mb-4">{restaurant.description}</p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{restaurant.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>{restaurant.phone}</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex overflow-x-auto px-6 py-4 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-6">
        <div className="grid gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${item.price}</span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}