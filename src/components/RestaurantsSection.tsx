import { RestaurantCard } from './RestaurantCard'

const restaurants = [
  {
    id: '1',
    name: 'Mario\'s Italian Kitchen',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
    cuisine: 'Italian • Pizza • Pasta',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: '$2.99',
    isPromoted: true
  },
  {
    id: '2',
    name: 'Tokyo Sushi Bar',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    cuisine: 'Japanese • Sushi • Asian',
    rating: 4.9,
    deliveryTime: '30-40 min',
    deliveryFee: '$3.99'
  },
  {
    id: '3',
    name: 'Burger Palace',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    cuisine: 'American • Burgers • Fast Food',
    rating: 4.6,
    deliveryTime: '15-25 min',
    deliveryFee: '$1.99'
  },
  {
    id: '4',
    name: 'Spice Garden',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    cuisine: 'Indian • Curry • Vegetarian',
    rating: 4.7,
    deliveryTime: '35-45 min',
    deliveryFee: '$2.49'
  },
  {
    id: '5',
    name: 'Fresh Salad Co.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    cuisine: 'Healthy • Salads • Bowls',
    rating: 4.5,
    deliveryTime: '20-30 min',
    deliveryFee: '$2.99'
  },
  {
    id: '6',
    name: 'Dragon Wok',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop',
    cuisine: 'Chinese • Noodles • Stir Fry',
    rating: 4.4,
    deliveryTime: '25-35 min',
    deliveryFee: '$3.49'
  }
]

export function RestaurantsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Restaurants
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best restaurants in your area, from local favorites to trending spots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            View All Restaurants
          </button>
        </div>
      </div>
    </section>
  )
}