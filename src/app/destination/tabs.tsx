'use client'

import { useState } from 'react'

const DestinationTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState('moon')
  const destinations = data.destinations

  const currDestination = destinations.find(
    (dest) => dest.name.toLowerCase() === activeTab,
  )

  return (
    <>
      <picture id={`${currDestination.name.toLowerCase()}-image`}>
        <source
          srcSet={`/destination/image-${currDestination.name.toLowerCase()}.webp`}
          type="image/webp"
        />
        <img
          src={`/destination/image-${currDestination.name.toLowerCase()}.png`}
          alt="the moon"
        />
      </picture>
      <div
        className="tab-list underline-indicators flex"
        role="tablist"
        aria-label="destination list"
      >
        {destinations.map(({ name }, i) => {
          const current = name.toLowerCase()

          return (
            <button
              aria-selected="false"
              role="tab"
              aria-controls={`${current}-tab`}
              className={`${activeTab === name.toLowerCase() ? 'active ' : ''}uppercase ff-sans-cond text-accent letter-spacing-2`}
              tabIndex={`${i === 0} ? '0' : '-1'`}
              data-image={`${current}-image`}
              onClick={() => setActiveTab(current)}
              key={current}
            >
              {name}
            </button>
          )
        })}
      </div>
      <article
        className="destination-info flow"
        id="moon-tab"
        tabIndex="0"
        role="tabpanel"
      >
        <h2 className="fs-800 uppercase ff-serif">{currDestination.name}</h2>
        <p>{currDestination.description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{currDestination.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{currDestination.travel}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default DestinationTabs
