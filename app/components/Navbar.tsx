import Link from "next/link";
const Navbar = () => {
  return (
    <nav className='flex items-center justify-center w-full py-4'>
       <div className='flex items-center justify-between w-[80%]'>
          <Link href="/" className='text-2xl font-bold'>.Chisom's Folio</Link>
          <ul className='flex gap-6'>
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
          </ul>

          <button className="font-semibold">Let's Talk</button>
        </div>
    </nav>
  )
}

export default Navbar;