import Link from "next/link"

export default function Menu() {

  return (
  <>
  <ul className="navigation">
    <li className="dropdown current"><Link href="/">Home</Link>
      <ul>
        <li><Link href="/">Home V1</Link></li>
        <li><Link href="/index-2">Home V2</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="/page-services">Services</Link>
      <ul>
        <li><Link href="/page-services">Our Service</Link></li>
        <li><Link href="/service-details">Service Details</Link></li>
        <li><Link href="/page-gallery">Our Gallery</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="/page-shop">Shop</Link>
      <ul>
        <li><Link href="/page-shop">Our Shop</Link></li>
        <li><Link href="/shop-details">Shop Details</Link></li>
        <li><Link href="/shop-sales">Sales Page</Link></li>
        <li><Link href="/shop-cart">Shopping Cart</Link></li>
        <li><Link href="/shipping-info">Shipping Info</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="#">Blogs</Link>
      <ul>
        <li><Link href="/news-grid">Our Blogs</Link></li>
        <li><Link href="/news-details">Blog Details</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="#">Pages</Link>
      <ul>
        <li><Link href="/page-about">About Us</Link></li>
        <li><Link href="/page-contact">Contact Us</Link></li>
        <li><Link href="/page-faq">FAQ</Link></li>
        <li><Link href="/page-error">Error 404</Link></li>
        <li><Link href="/page-team">Our Team</Link></li>
      </ul>
    </li>
  </ul>
  </>
  )
}
