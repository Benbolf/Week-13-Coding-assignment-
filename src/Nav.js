
import React, {Component} from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul>
          <li>Homepage</li>
          <li>About</li>
          <li>Contact me</li>
        </ul>
      </nav>
    )
  }
}