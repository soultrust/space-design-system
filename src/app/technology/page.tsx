import TechnologyTabs from './tabs'
import data from '@/data.json'

const TechnologyPage = () => {
  return (
    <>
      <div className="bg-container bg-container--technology"></div>
      <main id="main" className="grid-container grid-container--tech flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space Launch 101
        </h1>

        <TechnologyTabs data={data} />
      </main>
    </>
  )
}

export default TechnologyPage
