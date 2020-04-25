import React, {Component} from'react';
import ReactDOM from'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const API = 'https://api.themoviedb.org/3/movie/popular?api_key=341c549444f65b6a022eea5fc24f5b77&language=en-US&page=1';
const DEFAULT_QUERY = 'redux';

class MovieList extends Component{
  constructor(props){
    super(props);
    this.state={
      results: []
    }
  }

  componentDidMount(){
    fetch( API + DEFAULT_QUERY )
      .then(response=>response.json())
      .then(data=>{
        this.setState({results:data.results})
      })
  }

  render(){
    const {results} = this.state;
    return(
      <div className="row container">
          {results.map((result, i) =>
          <div className="col-md-4">
            <div className="card" style={{width: '15rem'}} key={result.id}>
              <img src="" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{result.title}</h5>
                <p>{result.id}</p>
                <Link to="/movie/detail">Detail</Link>
              </div>
            </div>
          </div>
          )}
          
      </div>
    );
  }
}

export default MovieList;