import React from 'react'
import Head from 'next/head'

import ReactLogo from '../assets/react.svg'
import * as S from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <S.Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <ReactLogo />
      </main>
    </S.Container>
  )
}

export default Home
