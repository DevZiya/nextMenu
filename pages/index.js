import Head from 'next/head'
import Categories from '../components/categories/Categories'
import Footer from '../components/footer/Footer'
import Products from '../components/products/Products'
import Search from '../components/serach/Search'
import Top from '../components/Top/Top'

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Koza Menu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <Top />
      <Search />
      <Categories />
      <Products />
      <Footer/>
    

    </div>
  )
}