import { Search, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Delicious food,
            <span className="text-primary block">delivered fast</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep in minutes.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-2xl shadow-lg">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="pl-12 border-0 focus:ring-0 text-lg h-14"
                />
              </div>
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for restaurants or food"
                  className="pl-12 border-0 focus:ring-0 text-lg h-14"
                />
              </div>
              <Button size="lg" className="h-14 px-8 text-lg font-semibold">
                Find Food
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-gray-600">Popular:</span>
            {['Pizza', 'Burgers', 'Sushi', 'Chinese', 'Italian'].map((item) => (
              <Button
                key={item}
                variant="outline"
                size="sm"
                className="rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}