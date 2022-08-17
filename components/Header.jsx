import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/static/images/logo.svg'

const Header = () => {

    const [navExpanded, setNavExpanded] = useState(false)

    return (
        <nav className='grid grid-cols-2  grid-flow-row 2xl:flex 2xl:justify-between w-[75%] mx-auto mt-5'>
            <div className='2xl:basis-1/4 flex'>
                <Image src={Logo} />
            </div>
            <div className='2xl:hidden justify-self-end' onClick={() => { setNavExpanded(!navExpanded) }}>
                {/* HEROICONS https://heroicons.com/ */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className={`2xl:!hidden text-center text-white rounded-md col-span-2 bg-violet-custze mt-5 mb-5 ${navExpanded ? 'navigation expande' : 'navigation'}`}>
                <ul className='list-navigation mt-5'>
                    <li><Link href='/'><a>Features</a></Link></li>
                    <li><Link href='/'><a>Pricing</a></Link></li>
                    <li><Link href='/'><a>Resources</a></Link></li>
                </ul>
                <hr className='my-[12px]' />
                <ul className='list-navigation mb-5'>
                    <li><Link href='/'><a>Login</a></Link></li>
                    <li><Link href='/'><a className='button-primary'>Sign Up</a></Link></li>
                </ul>
            </div>
            <div className='hidden 2xl:flex basis-3/4 justify-between items-center'>
                <ul className='list-header'>
                    <li><Link href='/'><a>Features</a></Link></li>
                    <li><Link href='/'><a>Pricing</a></Link></li>
                    <li><Link href='/'><a>Resources</a></Link></li>
                </ul>
                <ul className='list-header'>
                    <li>
                        <Link href='/'><a>Login</a></Link>
                    </li>
                    <li>
                        <Link href='/'><a className='button-primary'>Sign Up</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header