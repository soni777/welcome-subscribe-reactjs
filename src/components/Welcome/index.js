import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscribe = () => {
    this.setState(() => ({isSubscribed: true}))
  }

  subscribed = () => {
    this.setState(() => ({isSubscribed: false}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {isSubscribed && (
          <button className="button" type="button" onClick={this.subscribed}>
            Subscribe
          </button>
        )}
        {!isSubscribed && (
          <button className="button" type="button" onClick={this.subscribe}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
