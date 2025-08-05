import CrewTabs from './tabs'
import data from '@/data.json'

const CrewPage = () => {
  return (
    <>
      <div className="bg-container crew"></div>
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet Your Crew
        </h1>

        <CrewTabs data={data} />
      </main>
    </>
  )
}

export default CrewPage
