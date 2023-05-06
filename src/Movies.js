import React, {Component} from 'react'
export default class moviesArray extends Component {
    constructor(props) {
      super(props)
      this.moviesArray = props.movies
    }
    
    render () {
      return(
        <table>
          <thead>
            <tr>
              <td>Movie Title</td>
              <td>Description</td>
              <td>Age Rating</td>
            </tr>
          </thead>
          <tbody>
            {this.MoviesArray.map((movie, index) => (
              <tr key={index} >
                <td>{movie.movieName}</td>
                <td>{movie.description}</td>
                <td>{movie.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
  }