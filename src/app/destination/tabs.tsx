'use client'

import { useState, useRef, useEffect } from 'react'

const DestinationTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState('moon')
  const destinations = data.destinations
  const tabListRef = useRef(null)
  // let tabs = null
  let tabFocus = 0
  const tabs = useRef([])

  useEffect(() => {
    tabs.current = tabListRef.current.querySelectorAll('[role="tab"]')
  }, [])

  const currDestination = destinations.find(
    (dest) => dest.name.toLowerCase() === activeTab,
  )

  const handleTabClick = (current, index) => {
    tabFocus = index - 1
    setActiveTab(current)
  }

  const handleKeyDown = (e) => {
    const keydownLeft = 37
    const keydownRight = 39

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
      console.log(tabs.current[tabFocus])
      tabs.current[tabFocus].setAttribute('tabindex', -1)
    }
    if (e.keyCode === keydownRight) {
      tabFocus++
      if (tabFocus >= tabs.current.length) {
        tabFocus = 0
      }
    }
    if (e.keyCode === keydownLeft) {
      tabFocus--
      if (tabFocus < 0) {
        tabFocus = tabs.current.length - 1
      }
    }
    tabs.current[tabFocus].setAttribute('tabindex', 0)
    tabs.current[tabFocus].focus()
  }

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
        ref={tabListRef}
      >
        {destinations.map(({ name }, i) => {
          const current = name.toLowerCase()

          return (
            <button
              aria-selected={activeTab === name.toLowerCase()}
              role="tab"
              aria-controls={`${current}-tab`}
              className={`${activeTab === name.toLowerCase() ? 'active ' : ''}uppercase ff-sans-cond text-accent letter-spacing-2`}
              data-image={`${current}-image`}
              onClick={() => handleTabClick(current, i)}
              onKeyDown={handleKeyDown}
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
