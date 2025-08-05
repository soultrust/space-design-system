'use client'

import { useState } from 'react'

const CrewTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState('douglas-hurley')
  const members = data.crew

  const currMember = data.crew.find(
    (member) => member.slug.toLowerCase() === activeTab,
  )

  return (
    <>
      <picture id={`${currMember.slug}-image`}>
        <source
          srcSet={`/crew/image-${currMember.slug}.webp`}
          type="image/webp"
        />
        <img src={`/crew/image-${currMember.slug}.png`} alt={currMember.name} />
      </picture>
      <div className="dot-indicators flex" role="tablist" aria-label="crew">
        {members.map(({ name, slug }, i) => {
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
            </button>
          )
        })}
      </div>
      <article
        className="crew-details flow"
        id="moon-tab"
        tabIndex="0"
        role="tabpanel"
      >
        <h3>{currMember.role}</h3>
        <h2 className="fs-600 uppercase ff-serif">{currMember.name}</h2>

        <div className="crew-description flex">{currMember.bio}</div>
      </article>
    </>
  )
}

export default CrewTabs
