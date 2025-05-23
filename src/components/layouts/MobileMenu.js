'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>
      <ul className="navigation clearfix">
        {/*Keep This Empty / Menu will come through Javascript*/}
        <li className="current dropdown"><Link href="/">Home</Link>
          <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
            <li><Link href="/">Home page 01</Link></li>
            <li><Link href="/index-2">Home page 02</Link></li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div></li>                    
        <li><Link href="/page-about">About</Link></li>
        <li className="dropdown"><Link href="/page-team">Team</Link>
          <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
            <li><Link href="/page-team">Team Grid</Link></li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div></li>
        <li className="dropdown"><Link href="/page-services">Services</Link>
          <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
            <li><Link href="/page-services">Services Grid</Link></li>
            <li><Link href="/service-details">Service Details</Link></li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div></li>
        <li className="dropdown"><Link href="/page-projects">Projects</Link>
          <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
            <li><Link href="/page-projects">Projects Grid</Link></li>
            <li><Link href="/page-project-details">Project Details</Link></li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div></li>
        <li className="dropdown"><Link href="/news-grid">News</Link>
          <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
            <li><Link href="/news-grid">News Grid</Link></li>
            <li><Link href="/news-details">News Details</Link></li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div></li>
        <li><Link href="/page-contact">Contact</Link></li>
      </ul>

    </>
  )
}
