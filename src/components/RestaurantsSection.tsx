import { RestaurantCard } from './RestaurantCard'
import { restaurants } from '../data/restaurants'

interface RestaurantsSectionProps {
  onRestaurantClick?: (id: string) => void
}

export function RestaurantsSection({ onRestaurantClick }: RestaurantsSectionProps) {
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
            <RestaurantCard 
              key={restaurant.id} 
              id={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              deliveryFee={`${restaurant.deliveryFee}`}
              onClick={onRestaurantClick}
            />
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