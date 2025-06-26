// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    umpires,
    venue,
    result,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latestMatchContainer">
      <div className="latestMatchDetails">
        <div className="firstSection">
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competingTeamLogos"
          />
        </div>
        <div className="thirdSection">
          <hr className="horizontalLine" />
          <div>
            <p className="label">First Innings</p>
            <p>{firstInnings}</p>
          </div>
          <div>
            <p className="label">Second Innings</p>
            <p>{secondInnings}</p>
          </div>

          <div>
            <p className="label">Man Of the Match</p>
            <p>{manOfTheMatch}</p>
          </div>
          <div>
            <p className="label">Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
