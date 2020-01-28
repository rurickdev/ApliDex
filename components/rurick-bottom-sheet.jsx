
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
            <div className='column is-full has-text-right is-marginless'>
              <span
                className='mdi mdi-close'
                onClick={() => { toggleOpen() }}
              />
            </div>
            <div className='column is-rurick-details-bottom-sheet'>
              <RurickDetails data={data} />
            </div>
          </>
        )
        : (
          <div
            className='columns is-multiline is-mobile'
            onClick={() => { toggleOpen() }}
          >
            <div className='column is-one-third'>
              <img src={data.picture} alt={data.firstName} className='is-rurick-image' />
            </div>
            <div className='is-rurick-data-mobile column is-two-thirds'>
              <div className='columns is-multiline is-mobile is-vcentered'>
                <span className='is-rurick-name-mobile has-bit-font column is-full has-not-scrollbar'>
                  {data.firstName}
                </span>
                {data.onlineProfiles.map((profile, index) => (
                  <div className='column is-2-mobile has-text-centered' key={index}>
                    <a href={profile.link} target='_blank' rel='noopener noreferrer'>
                      <span className={`mdi mdi-${profile.icon} is-size-4`} title={profile.name} />
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
