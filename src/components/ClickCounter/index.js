import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="header">
          The Button has been clicked <span className="number">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" onClick={this.onClicked} type="submit">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
