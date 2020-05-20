
import { useState } from 'react'

import RurickDetails from './rurick-details'

function RurickBottomSheet (props) {
  const { data = {} } = props
  const [isOpen, setOpen] = useState(false)

  function toggleOpen () {
    setOpen(!isOpen)
  }

  return (
    <>
      {isOpen
        ? (
          <>
            <div className='column is-full has-text-right is-marginless is-paddingless'>
              <span
                className='mdi mdi-close'
                onClick={() => { toggleOpen() }}
              />
            </div>
            <div className='column is-rurick-details-bottom-sheet is-paddingless'>
              <RurickDetails data={data} />
            </div>
          </>
        )
        : (
          <div
            className='columns is-multiline is-mobile'
            onClick={() => { toggleOpen() }}
          >
            <figure className='column is-one-third is-paddingless'>
              <img
                src={data.picture}
                alt={data.firstName}
                className='is-rurick-image'
              />
            </figure>
            <div className='is-rurick-data-mobile column is-two-thirds'>
              <div className='columns is-multiline is-mobile is-vcentered'>
                <span className='is-rurick-name-mobile is-size-4 column is-full has-not-scrollbar'>
                  {`${data.firstName} ${data.paternalLastName}`}
                </span>
                {data.onlineProfiles.map((profile, index) => (
                  <div
                    className='column is-2-mobile has-text-left'
                    key={index}
                  >
                    <a
                      href={profile.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span
                        className={`mdi mdi-${profile.icon} is-size-4`}
                        title={profile.name}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default RurickBottomSheet
