import React from 'react'
import Image from 'next/image'
import Logo from '../public/static/images/logo.svg'
import IconFace from '../public/static/images/icon-facebook.svg'
import IconTwitter from '../public/static/images/icon-twitter.svg'
import IconPinteres from '../public/static/images/icon-pinterest.svg'
import IconInstagram from '../public/static/images/icon-instagram.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container-footer'>
        <div className='invert brightness-0'>
          <Image src={Logo} alt='logoUrl' />
        </div>
        <div>
          <h3>Features</h3>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex space-x-3'>
          <div><Image src={IconFace} alt='logoface' /></div>
          <div className='pt-[0.2rem]'><Image src={IconTwitter} alt='logotwit' /></div>
          <div><Image src={IconPinteres} alt='logopinteres' /></div>
          <div><Image src={IconInstagram} alt='logoinsta' /></div>
        </div>

      </div>
      <div className='pb-[3rem] md:text-base text-center text-grayish-violet '>
        Challenge from <Link href="https://frontendmentor.io" target='_blank'><a className='text-white underline'>Frontend Mentor</a></Link>. Coded by <Link href="https://github.com/znmaki" target='_blank'><a className='text-white underline'>Cristhian Ortiz P.</a></Link>
      </div>
    </footer>
  )
}

export default Footer