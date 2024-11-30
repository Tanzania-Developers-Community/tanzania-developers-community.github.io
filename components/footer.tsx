import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Tanzania Developers Community</h3>
            <p className="text-sm">Empowering Tanzanian developers since 2023</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="#" className="hover:underline">Home</Link>
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="https://madein.co.tz" className="hover:underline">Made In Tanzania</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tanzania Developers Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

