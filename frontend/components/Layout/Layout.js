import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Soundboard</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
