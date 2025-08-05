'use client'

import { useState } from 'react'

const TechnologyTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState('launch-vehicle')
  const techs = data.technology

  const currTech = techs.find((tech) => tech.slug === activeTab)

  return (
    <>
      <picture id={`${currTech.slug}-image`}>
        <source
          srcSet={`/technology/image-${currTech.slug}-portrait.jpg`}
          type="image/jpg"
        />
        <img
          src={`/technology/image-${currTech.slug}-portrait.jpg`}
          alt={currTech.name}
        />
      </picture>

      <article
        className="tech-details"
        id="moon-tab"
        tabIndex="0"
        role="tabpanel"
      >
        <div className="numbers-list flex" role="tablist" aria-label="crew">
          {techs.map(({ name, slug }, i) => {
            return (
              <button
                aria-selected="false"
                role="tab"
                aria-controls={`${slug}-tab`}
                className={`${activeTab === name.toLowerCase() ? 'active ' : ''}uppercase ff-sans-cond text-accent letter-spacing-2`}
                tabIndex={`${i === 0} ? '0' : '-1'`}
                data-image={`${slug}-image`}
                onClick={() => setActiveTab(slug)}
                key={slug}
              >
                <span className="sr-only">{name}</span>
                {++i}
              </button>
            )
          })}
        </div>
        <div>
          <h3>The Terminology...</h3>
          <h2 className="fs-600 uppercase ff-serif">{currTech.name}</h2>
          <div className="crew-description flex">{currTech.description}</div>
        </div>
      </article>
    </>
  )
}

export default TechnologyTabs
