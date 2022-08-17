import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>URL Shortening</title>
                <meta name="description" content="url-shortening-api-master" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout