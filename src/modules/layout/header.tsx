import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              BacklinkBoost
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </Link>
            <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Log in
            </Link>
            <Link
              href="/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

