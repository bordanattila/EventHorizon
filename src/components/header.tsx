import Link from "next/link"
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="headerDiv">
        <div className="topNav">
          <Image className="logo" src="/images/brandlogov2.png" alt="app-logo" width={50} height={50} />
          {/* <div className="navLinks"> */}
          <nav>
            <ul>
              <li><Link href="/" passHref>
                Home
              </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/about-us">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
          {/* </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header;