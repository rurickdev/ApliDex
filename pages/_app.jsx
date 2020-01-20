
import App from 'next/app'
import Head from 'next/head'

import '../sass/index.scss'

class MyApp extends App {
  render () {
    const { Component } = this.props

    return (
      <>
        <Head>
          <title>ApliDex</title>
        </Head>
        <div className='columns is-multiline is-marginless is-paddingless'>
          <Component />
        </div>
      </>
    )
  }
}

export default MyApp
