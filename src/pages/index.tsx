import type { NextPage } from 'next'

import { Header } from '../../src/components/Header'
import { Body } from '../components/Body'
import { Footer } from '../components/Footer'
import { TaskContextProvider } from '../hooks/TaskContext'

const Home: NextPage = () => {

  return (
    <TaskContextProvider>
      <Header />
      <Body />
      <Footer />
    </TaskContextProvider>

  )
}

export default Home
