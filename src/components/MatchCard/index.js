// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeam, result, matchStatus, competingTeamLogo} = recentMatches

  const matchstatus = matchStatus === 'Won' ? 'greenColor' : 'redColor'
  return (
    <li className={`listContainer ${matchStatus}`}>
      <div className="matchCardContainer">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competingTeamLogo"
        />
        <p className="teamName">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`descAboutTeam ${matchStatus}`}>{matchstatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
