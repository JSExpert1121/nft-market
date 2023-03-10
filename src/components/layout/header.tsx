import Link from "next/link";

export const Header = () => (
  <header className='flex items-center px-4 h-12 bg-gray-50'>
    <Link href='/' className='text-blue-700 hover:text-blue-500 font-semibold'>Home</Link>
  </header>
)