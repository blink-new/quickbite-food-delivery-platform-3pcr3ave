import { Star, Clock, Truck } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

interface RestaurantCardProps {
  id: string
  name: string
  image: string
  cuisine: string
  rating: number
  deliveryTime: string
  deliveryFee: string
  isPromoted?: boolean
  onClick?: (id: string) => void
}

export function RestaurantCard({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  isPromoted = false,
  onClick
}: RestaurantCardProps) {
  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      onClick={() => onClick?.(id)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isPromoted && (
          <Badge className="absolute top-3 left-3 bg-accent text-white">
            Promoted
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{cuisine}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Truck className="h-4 w-4" />
            <span>{deliveryFee}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}