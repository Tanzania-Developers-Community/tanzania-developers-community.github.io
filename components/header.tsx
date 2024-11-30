import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-0 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/logo.jpg" alt="Logo" width={100} height={20} />
        </Link>
        <nav className="space-x-4">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Button variant="outline" asChild>
            {/* 
            TDB: This is a placeholder link. Replace with your own link.
              <Link href="https://madein.co.tz">Made In Tanzania</Link> */}
            <Link href="https://tanzania-developers-community.github.io/made-in-tanzania/">Made In Tanzania</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

