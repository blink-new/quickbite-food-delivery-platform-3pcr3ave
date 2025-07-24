import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CategoriesSection } from './components/CategoriesSection'
import { RestaurantsSection } from './components/RestaurantsSection'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CategoriesSection />
        <RestaurantsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App