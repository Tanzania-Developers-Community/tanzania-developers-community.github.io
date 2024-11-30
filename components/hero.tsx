import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Tanzania Developers Community</h1>
        <p className="text-xl mb-8">Connecting and empowering Tanzanian developers</p>
        <Button size="lg" asChild>
          <a href="#join">Join Our Community</a>
        </Button>
      </div>
    </section>
  )
}

