import Link from "next/link"
import Image from "next/image";

export default function Footer1() {
  return (
  <>

    <footer className="footer_section">
      <div className="footer_widget_area section_space_lg">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-xl-3 col-sm-6">
              <div className="footer_widget footer_about mb50-lg">
                <div className="site_logo"><Link href="/"><Image className="logo_before" src="/images/logo/logo.svg" alt="Petopia Logo" width={500} height={500} unoptimized /></Link></div>
                <p>Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...</p>
                <div className="footer_hotline iconbox_item iconbox_lefticon">
                  <div className="item_icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="tel:(913)756-3126">(913) 756-3126</Link></h3>
                    <p className="mb-0">Got Questions? Call us 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="footer_widget mb50-lg">
                <h3 className="footer_widget_title">Working Hours</h3>
                <div className="office_hour">
                  <ul className="unorder_list_block">
                    <li>
                      <span>Mon - Fri:</span>
                      <span>7am – 6pm</span>
                    </li>
                    <li>
                      <span>Saturday:</span>
                      <span>9am – 4pm</span>
                    </li>
                    <li>
                      <span>Sunday:</span>
                      <span><strong>Closed</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-sm-6">
              <div className="footer_widget mb50-sm">
                <h3 className="footer_widget_title">Useful Links</h3>
                <div className="page_list">
                  <ul className="unorder_list_block">
                    <li><Link href="/"><i className="fas fa-circle"></i>Home</Link></li>
                    <li><Link href="page-about"><i className="fas fa-circle"></i>About</Link></li>
                    <li><Link href="page-services"><i className="fas fa-circle"></i>Services</Link></li>
                    <li><Link href="page-shop"><i className="fas fa-circle"></i>Shop</Link></li>
                  </ul>
                  <ul className="unorder_list_block">
                    <li><Link href="page-faq"><i className="fas fa-circle"></i>FAQ</Link></li>
                    <li><Link href="page-gallery"><i className="fas fa-circle"></i>Gallery</Link></li>
                    <li><Link href="page-shipping-info"><i className="fas fa-circle"></i>Delivery</Link></li>
                    <li><Link href="page-deals"><i className="fas fa-circle"></i>Sales</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Newsletter</h3>
                <form action="#">
                  <div className="footer_newslatter">
                    <p>Be first in the queue! Get our latest news straight to your inbox.</p>
                    <div className="form_item">
                      <input type="text" name="newsletter-email" placeholder="Email"/>
                      <button type="submit"><i className="far fa-arrow-right"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <p className="copyrights_text text-center"><Link target="_blank" href="/">Petopia</Link> © Copyrights Template All rights reserved</p>
        </div>
      </div>
    </footer>

  </>
  )
}
