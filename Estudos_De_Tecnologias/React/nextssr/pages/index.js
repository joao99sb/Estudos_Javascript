import React from "react"
import Link from 'next/link'
import Head from 'next/head'

const Home = () => (

    <>
    <Head>
        <title>Home</title>
    </Head>
    <h1>Hello world</h1>
    <Link href="/users">
        <a>clik aqui</a>
    </Link>
    </>
)

export default Home