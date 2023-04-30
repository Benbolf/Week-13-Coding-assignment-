import React, {Component} from 'react'

let date = new Date()

let singleUser = {
  
  time: date.toDateString(),
}

export default class Section extends Component {
  render() {
    return (
      <section className="welcomeSection">
        <h3>Welcome, Log in below{singleUser.name}</h3>
        <p>The date is: {singleUser.time}</p>
      </section>
    )
  }
}