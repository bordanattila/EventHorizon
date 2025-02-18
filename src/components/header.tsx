import Link from "next/link"
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image className="logo" src="/images/brandlogov2.png" alt="app-logo" width={50} height={50} />
      </div>
      <div className="navLinks">
        <nav className="nav">
          <ul>
            <li><Link href="/" passHref><strong>Home</strong></Link></li>
          </ul>
          <ul>
            <li><Link href="/events" passHref><strong>Events</strong></Link></li>
          </ul>
          <ul>
            <li><Link href="/about-us" passHref><strong>About Us</strong></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;