import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero/index'
import Slider from '../components/Slider'

export default function Home(): JSX.Element {
  return (
    <div className="">
      <Head>
        <title>ThePixarDB: The Best OTT Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <main>
        <Slider />
      </main>
    </div>
  )
}