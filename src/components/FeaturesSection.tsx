import { Clock, Shield, Truck, Star } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Get your food delivered in 30 minutes or less, guaranteed fresh and hot.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your payments are protected with bank-level security and encryption.'
  },
  {
    icon: Truck,
    title: 'Real-time Tracking',
    description: 'Track your order from kitchen to doorstep with live GPS tracking.'
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description: 'Only the best restaurants with verified reviews and ratings.'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose QuickBite?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering the best food experience with unmatched service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}