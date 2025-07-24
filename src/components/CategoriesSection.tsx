const categories = [
  {
    id: '1',
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop',
    count: '120+ restaurants'
  },
  {
    id: '2',
    name: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop',
    count: '85+ restaurants'
  },
  {
    id: '3',
    name: 'Sushi',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop',
    count: '45+ restaurants'
  },
  {
    id: '4',
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=200&h=200&fit=crop',
    count: '95+ restaurants'
  },
  {
    id: '5',
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop',
    count: '75+ restaurants'
  },
  {
    id: '6',
    name: 'Healthy',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop',
    count: '60+ restaurants'
  },
  {
    id: '7',
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop',
    count: '55+ restaurants'
  },
  {
    id: '8',
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200&h=200&fit=crop',
    count: '40+ restaurants'
  }
]

export function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're craving from our diverse selection of cuisines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-24 md:h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {category.name}
                  </h3>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}