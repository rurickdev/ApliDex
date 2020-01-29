
import { useState } from 'react'

function RurickDetails (props) {
  const { data } = props

  const [isTrainer, setTrainer] = useState(false)

  function toggleIsTrainer () {
    setTrainer(!isTrainer)
  }

  return (
    <div className='is-rurick-details columns is-multiline is-centered is-paddingless'>
      {/* Name */}
      <div className='column is-11 is-size-3 has-text-centered'>
        {
          isTrainer
            ? (
              <h1 className='has-bit-font is-size-5-mobile'>
                Entrenador {data.firstName}
              </h1>
            )
            : (
              <h1>
                {`${data.firstName} ${data.paternalLastName} ${data.maternalLastName}`}
              </h1>
            )
        }
      </div>

      {/* Avatar & Picture */}
      <figure
        className='is-rurick-image column is-11'
        onClick={toggleIsTrainer}
      >
        <img
          className='image overlay'
          src={isTrainer ? data.asPokemonTrainer.avatar : data.picture}
          alt={data.firstName}
          title='Click Me'
        />
      </figure>

      {/* Battle & About */}
      <div className='is-rurick-about-container column is-11 is-size-6 has-text-centered'>
        {
          isTrainer
            ? (
              <div className='is-battle-background'>
                <span className='corner top-left' />
                <span className='corner top-right' />
                <span className='corner bottom-left' />
                <span className='corner bottom-right' />
                <h5 className='is-battle-dialog is-size-6 has-bit-font'>¡Interactuaste conmigo! ¡Vamos a batallar!</h5>
              </div>
            )
            : <p className='is-rurick-about'>{data.about}</p>
        }
      </div>

      {/* Defeated Gyms & Skills */}
      <div className='column is-11 is-size-4 has-text-left'>
        {
          isTrainer
            ? (
              <h5 className='has-bit-font is-size-6'>
                Gimnasios Derrotados
              </h5>
            )
            : <h5>Habilidades</h5>
        }
        <div className='columns is-multiline is-centered is-mobile'>
          {data.asPokemonTrainer.medals.map((medal, index) => (
            <div
              className='column is-one-quarter'
              key={index}
            >
              <div
                className={`is-trainer-medal is-${medal.name}`}
                title={medal.values.join('\n')}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PokemonTeam & Links */}
      <div className='column is-11 is-size-4 has-text-left'>
        {
          isTrainer
            ? (
              <>
                <h5 className={isTrainer ? 'has-bit-font is-size-6' : ''}>
                  Equipo Pokémon
                </h5>
                <div className='columns is-multiline is-centered is-mobile'>
                  {data.asPokemonTrainer.pokemonTeam.map((pokemon, index) => (
                    <div
                      className='column is-one-third is-paddingless has-text-centered'
                      key={index}
                    >
                      <img
                        className='is-pokemon-image'
                        src={pokemon.image}
                        alt={pokemon.name}
                        key={index}
                      />
                    </div>
                  ))}
                </div>
              </>
            )
            : (
              <>
                <h5>Perfiles online</h5>
                <div className='columns is-multiline is-centered is-mobile'>
                  {data.onlineProfiles.map((profile, index) => (
                    <div
                      className='column is-one-quarter-mobile has-text-centered is-marginless'
                      key={index}
                    >
                      <a
                        href={profile.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <span
                          className={`mdi mdi-${profile.icon} is-size-1`}
                          title={profile.name}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )
        }
      </div>
    </div>
  )
}

export default RurickDetails
