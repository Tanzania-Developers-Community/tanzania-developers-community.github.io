import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">TDC</Link>
        <nav className="space-x-4">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Button variant="outline" asChild>
            <Link href="https://madein.co.tz">Made In Tanzania</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

