import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="speed-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="speed-paragraph">
          Min Limit is 0mph, Max Limit is 200Mph
        </p>
        <div>
          <button
            type="button"
            className="accelerate-button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="brake-button"
            onClick={this.applyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
