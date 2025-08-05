import DestinationTabs from './tabs'
import data from '@/data.json'

const DestinationPage = () => {
  return (
    <>
      <div className="bg-container bg-container--destination"></div>
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <DestinationTabs data={data} />
      </main>
    </>
  )
}

export default DestinationPage
