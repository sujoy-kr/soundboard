import React from 'react'
import Header from '../Header/Header'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Soundboard</title>
            </Head>
            <Header />
            {children}
        </>
    )
}

export default Layout
