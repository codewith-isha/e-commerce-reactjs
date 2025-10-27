import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
    <div>
      <div>
        <h3>e-Shop</h3>
        <p>Your one-side for all your needs. Shop with us and experience the best online shopping experience</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow us</h4>
        <div>
          <a href=""><FaFacebook/></a>
          <a href=""><FaTwitter/></a>
          <a href=""><FaGithub/></a>
          <a href=""><FaInstagram/></a>
        </div>
        <form >
          <input type="email" />
          <button>Subscribe</button>

        </form>
      </div>
    </div>
    </footer>
  )
}

export default Footer