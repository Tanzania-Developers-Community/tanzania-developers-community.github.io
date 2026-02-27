import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Tanzania Developers Community Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="#about" className="text-gray-700 hover:text-black transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-gray-700 hover:text-black transition-colors">
            Projects
          </Link>

          <Button variant="outline" asChild>
            <Link
              href="https://tanzania-developers-community.github.io/made-in-tanzania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made In Tanzania
            </Link>
          </Button>
        </nav>

      </div>
    </header>
  )
}
