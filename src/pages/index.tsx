import type { NextPage } from 'next'

import { Header } from '../../src/components/Header'
import { Body } from '../components/Body'
import { Footer } from '../components/Footer'
import { ModalMenu } from '../components/ModalMenu'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <ModalMenu />
    </>
  )
}

export default Home
