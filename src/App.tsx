import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CategoriesSection } from './components/CategoriesSection'
import { RestaurantsSection } from './components/RestaurantsSection'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'
import RestaurantDetail from './components/RestaurantDetail'
import CartSidebar from './components/CartSidebar'
import { CartProvider } from './contexts/CartContext'

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'restaurant'>('home')
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null)

  const handleRestaurantClick = (restaurantId: string) => {
    setSelectedRestaurantId(restaurantId)
    setCurrentView('restaurant')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedRestaurantId(null)
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {currentView === 'home' ? (
          <>
            <Header />
            <main>
              <Hero />
              <CategoriesSection />
              <RestaurantsSection onRestaurantClick={handleRestaurantClick} />
              <FeaturesSection />
            </main>
            <Footer />
          </>
        ) : (
          selectedRestaurantId && (
            <RestaurantDetail 
              restaurantId={selectedRestaurantId} 
              onBack={handleBackToHome}
            />
          )
        )}
        <CartSidebar />
      </div>
    </CartProvider>
  )
}

export default App