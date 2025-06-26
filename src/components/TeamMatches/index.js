// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    bannerUrl: '',
    isLoading: true,
  }
  componentDidMount() {
    this.getMatchItemData()
  }

  getMatchItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const latest = data.latest_match_details
    const recentMatches = data.recent_matches
    const updatedBannerUrl = data.team_banner_url
    console.log(updatedBannerUrl)

    console.log(recentMatches)
    const updatedData = {
      competingTeam: latest.competing_team,
      competingTeamLogo: latest.competing_team_logo,
      date: latest.date,
      firstInnings: latest.first_innings,
      manOfTheMatch: latest.man_of_the_match,
      umpires: latest.umpires,
      venue: latest.venue,
      result: latest.result,
      secondInnings: latest.second_innings,
    }
    const updatedRecentMatches = recentMatches.map(eachItem => ({
      id: eachItem.id,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
    }))
    this.setState({
      latestMatchDetails: updatedData,
      recentMatches: updatedRecentMatches,
      bannerUrl: updatedBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {latestMatchDetails, recentMatches, bannerUrl, isLoading} = this.state
    console.log(recentMatches)
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="itemDetailsContainer">
            <img src={bannerUrl} alt="team banner" className="teamBanner" />
            <p>Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="unorderedList">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} recentMatches={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
