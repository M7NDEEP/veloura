import React from 'react'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="px-4 divide-y dark:bg-black dark:text-gray-100" >
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 ">
                <img src="/veloura.png" alt="" srcset="" style={{ borderRadius: "50%", filter: "invert()" }} />
              </div>
              <span className="self-center text-2xl font-semibold" style={{ letterSpacing: "2px" }}>VELOURA</span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracki uppercase dark:text-gray-50">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Mens</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Womens</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Accessories</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracki uppercase dark:text-gray-50">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Privacy</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-50">Customers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Guidelines</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Return Policies</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Track Oders</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3">
                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                  <FaLinkedin style={{ transform: 'scale(1.5)' }} />
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                  <FaTwitter style={{ transform: 'scale(1.5)' }} />
                </a>
                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                  <FaInstagram style={{ transform: 'scale(1.5)' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-300">© 2024 Veloura Co. All rights reserved.</div>
      </footer>
    </>
  )
}

export default Footer