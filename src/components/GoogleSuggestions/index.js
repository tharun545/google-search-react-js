// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchBasedInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDisplaySearch = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const updatedSearch = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-icon"
        />
        <div className="search-container">
          <div className="search-display">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-box"
              onChange={this.onSearchBasedInput}
              value={searchInput}
            />
          </div>
          <ul>
            {updatedSearch.map(eachSearch => (
              <SuggestionItem
                suggestionsList={eachSearch}
                key={eachSearch.id}
                onDisplaySearch={this.onDisplaySearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
