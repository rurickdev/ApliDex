
import App from 'next/app'
import Head from 'next/head'

import '../sass/index.scss'

// ToDo: Delete this
const many = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

class MyApp extends App {
  render () {
    const { Component } = this.props

    return (
      <>
        <Head>
          <title>ApliDex</title>
        </Head>
        <div className='columns is-multiline is-marginless is-paddingless'>
          <aside className='column is-one-quarter'>
            <div className='details-container'>
              <h1>Details</h1>
            </div>
          </aside>
          <div className='has-background-white-ter column is-three-quarters'>
            <div className='columns is-multiline is-mobile is-marginless is-paddingless'>
              <div className='column is-full'>
                {/* ToDo: Crear el componente buscador */}
                <div className='search-bar'>
                  <h1>Buscador</h1>
                </div>
              </div>
              {/* ToDo: Cambiar esto por la petición a pokeapi */}
              {many.map((element, index) => (
                <div className='column is-half-mobile is-one-third-tablet is-one-third-desktop' key={index}>
                  <Component />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MyApp
