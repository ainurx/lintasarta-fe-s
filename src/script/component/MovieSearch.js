import React, {Component, useState, useEffect} from 'react';
import ReactDOM from'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Movie from"./Movie"

//const keyword = 'avenger';
const API = 'https://api.themoviedb.org/3/search/movie?api_key=341c549444f65b6a022eea5fc24f5b77&language=en-US&query='
const API2 = '&page=1&include_adult=false';
const DEFAULT_QUERY = 'redux';
  

export class MovieSearch extends Component{
  constructor(props){
    super(props);
    this.state={
      movies:[],
      keyword: props.keyword,
      id:''
    }
    
    this.handleId = this.handleId.bind(this)
  }

  handleId(event){
    this.setState({id:event.target.value})
  }
  
  componentDidMount(){
    const {keyword} = this.state
    fetch(`${API}${keyword}${API2}`+ DEFAULT_QUERY)
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      this.setState({movies:data.results})
    })
  }

  render(){
    const {movies, id} = this.state;
  
    return(
      <div className="row container">
          {movies.map((movie) =>
          <div className="col-md-4">
            <div className="card" style={{width: '15rem'}} key={movie.id}>
              <img src="" className="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5> 
                <p>{movie.id}</p>
                <Router>
                  <Link to={`/movie-detail/${movie.id}`} onClick={this.handleId}
                    value={movie.id}
                    className="btn btn-warning">
                    {movie.id}
                  </Link>
                  <Route path="/movie-detail/:id" render={props=><Movie {...movie.id} id={movie.id}/>}/>
                </Router>
              </div>
            </div>
          </div>
          )}    
      </div>
    )
  }
}

export default MovieSearch;