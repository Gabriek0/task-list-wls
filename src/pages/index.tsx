import type { NextPage } from 'next'

import { Header } from '../../src/components/Header'
import { Body } from '../components/Body'
import { TaskContextProvider } from '../hooks/TaskContext'

import styles from './home.module.scss';

const Home: NextPage = () => {

  return (
    <TaskContextProvider>
      <div className={styles.modalMenuDesktop}></div>
      <Body />
    </TaskContextProvider>

  )
}

export default Home
