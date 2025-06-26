// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import TeamMatches from '../TeamMatches'

class TeamCard extends Component {
  render() {
    const {teamList} = this.props
    const {id, name, teamImageUrl} = teamList
    return (
      <Link to={`/team-matches/${id}`} className="linkContainer">
        <li className="listContainer">
          <div className="teamCard">
            <img src={teamImageUrl} alt={`${name}`} className="teamImageUrl" />
            <p className="teamName">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
