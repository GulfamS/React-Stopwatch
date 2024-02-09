import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, timeInSeconds: 0}

  componentWillUnamount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateTimer = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="time-card">
          <div className="time-with-label-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="watch-icon"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="time">{time}</h1>
          <div className="button-container">
            <button
              type="button"
              className="start-btn"
              onClick={this.startTimer}
              disabled={isTimeRunning}
            >
              Start
            </button>
            <button
              className="stop-btn"
              type="button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              className="reset-btn"
              type="button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
