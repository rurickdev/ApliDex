
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
        <main className='columns is-multiline is-marginless is-paddingless'>
          <aside className='column is-one-quarter is-hidden-mobile'>
            <div className='details-container'>
              <h1>Details</h1>
            </div>
          </aside>

          <div className='column is-three-quarters has-background-white-ter'>
            <div className='columns is-multiline is-mobile is-marginless is-paddingless'>
              <div className='column is-full'>
                {/* ToDo: Crear el componente buscador */}
                <div className='search-bar'>
                  <h1>Buscador</h1>
                </div>
              </div>
              <Component />
            </div>
          </div>
        </main>
        <footer className='details-container'>
          <h1>Details</h1>
        </footer>
      </>
    )
  }
}

export default MyApp
