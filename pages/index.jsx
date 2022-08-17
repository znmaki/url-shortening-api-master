import Layout from "../components/Layout"
import Link from 'next/link'
import Image from 'next/image'
import Illustration from '../public/static/images/illustration-working.svg'
import LogoBrand from '../public/static/images/icon-brand-recognition.svg'
import LogoRecord from '../public/static/images/icon-detailed-records.svg'
import LogoCustom from '../public/static/images/icon-fully-customizable.svg'
import FormURL from "../components/FormURL"
import { useState } from "react"

export default function Home() {

  const [url, setUrl] = useState([])

  /* console.log(url); */

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.previousElementSibling.href)
    e.currentTarget.classList.add('bg-violet-custze')
    e.currentTarget.innerHTML = 'Copied'
    setTimeout(() => {
      e.target.classList.remove('bg-violet-custze')
      e.target.innerHTML = 'Copy !'
      /* console.log(e.target.firstChild.data); */
    }, 1000);
    /* console.log(e.currentTarget.classList); */
  }

  return (
    <Layout>
      <div>
        <section className="flex flex-col 2xl:flex-row justify-center 2xl:justify-between items-center h-screen relative w-[75%] mx-auto">
          <div className="2xl:order-1 order-2 mb-[120px] text-center 2xl:text-left">
            <h1 className="text-very-dark-violet text-4xl 2xl:text-5xl font-bold">More than just <br /> shorter links</h1>
            <p className="text-grayish-violet 2xl:mb-[5rem] mb-[2rem]">Build your brand&apos;s recognition and get detailed <br /> insights on how your links are performing.</p>
            <Link href='/'><a className="button-primary">Get Started</a></Link>
          </div>
          <div className='2xl:order-2 order-1 2xl:mb-[120px]'>
            <Image src={Illustration} width={650} height={450} alt='Illustration'/>
          </div>
          <FormURL url={url} setUrl={setUrl} />

        </section>

        <section className="bg-grayish-custze flex flex-col items-center justify-center pt-[6rem] pb-[8rem]">
          <ul className="mb-8 w-[75%]">
            {url.map(url => (
              <div key={url.code} className="flex items-center bg-white p-5 rounded-md flex-col 2xl:flex-row">
                <p className="basis-[80%]">{url.original_link}</p>
                
                <div className="flex basis-2/5 justify-between items-center flex-col 2xl:flex-row">
                  <Link href={url.full_short_link}>
                    <a target="_blanck" className="text-cyan hover:underline hover:decoration-1">{url.short_link}</a>
                  </Link>                  
                  <button className="button-primary-sm" onClick={handleClick}>Copy !</button>
                </div>
              </div>
            ))}
          </ul>
          <h2 className="text-3xl text-very-dark-violet font-bold mt-[1rem] mb-[1rem]">Advanced Statistics</h2>
          <p className="text-center text-grayish-violet mb-[5rem]">Track how your links are performinf across the web with <br /> our advanced statics dashborad.</p>
          <div className="grid grid-rows-3 2xl:grid-rows-1 2xl:grid-flow-col  text-left gap-x-4 auto-cols-[minmax(10px,310px)] line-before relative">
            <article className='card'>
              <div>
                <Image src={LogoBrand} alt='LogoBrand'/>
              </div>
              <h2>Brand Recognition</h2>
              <p>Boost your brand recognition with <br /> each click. Generic links don&apos;t mean a <br /> thing. Branded links help instil <br /> confidence in your content.</p>
            </article>
            <article className="card translate-y-[2rem] ">
              <div>
                <Image src={LogoRecord} alt='LogoRecord'/>
              </div>
              <h2>Detailed Records</h2>
              <p>Gain insights into who is clicking your <br /> links. Knowing when and where <br /> people engage with your content <br /> helps inform better decisions.</p>
            </article>
            <div className="card translate-y-[4rem]">
              <div>
                <Image src={LogoCustom} width={40} height={40} alt='LogoCustom'/>
              </div>
              <h2>Fully Customizable</h2>
              <p>Improve brand awareness and <br /> content discoverability through <br /> customizable links, supercharging <br /> audience engagement.</p>
            </div>
          </div>
        </section>
        <section className="bg-ima-custze text-white text-center">
          <h2 className="mb-7 font-bold text-4xl">Boost your links today</h2>
          <Link href='/'><a className="button-primary">Get Started</a></Link>
        </section>
      </div>
    </Layout>
  )
}