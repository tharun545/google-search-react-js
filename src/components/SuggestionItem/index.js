// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onDisplaySearch} = props
  const {suggestion} = suggestionsList

  const onClickSuggestion = () => {
    onDisplaySearch(suggestion)
  }
  return (
    <li className="list-container">
      <p>{suggestion}</p>
      <button className="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
