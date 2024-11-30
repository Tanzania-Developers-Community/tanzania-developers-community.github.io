import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import FeaturedProjects from '@/components/featured-projects'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}

