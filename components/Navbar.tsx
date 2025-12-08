import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='glass;'>
      <nav className='flex flex-row justify-between px-4 py-5;'>
        <Link href='/' className='flex flex-row items-center gap-2;'>
          <Image src='/icon.png' alt='GlacierTrack' width={31} height={31} />
          <p className='text-xl font-bold pl-4'>GlacierTrack</p>
        </Link>
        <ul className='flex flex-row items-center gap-6'>
          <Link href='/' className=' hover:text-blue-400 transition'>Home</Link>
          <Link href='/map' className=' hover:text-blue-400 transition'>Map</Link>
          <Link href='/about' className=' hover:text-blue-400 transition'>About</Link>
          <Link href='/contribute' className=' hover:text-blue-400 transition'>Contribute</Link>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar