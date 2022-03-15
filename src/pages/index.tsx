import type { NextPage } from 'next'

import { Header } from '../../src/components/Header'
import { Body } from '../components/Body'
import { TaskContextProvider } from '../hooks/TaskContext'

const Home: NextPage = () => {

  return (
    <TaskContextProvider>
      <Header />
      <Body />
    </TaskContextProvider>

  )
}

export default Home
