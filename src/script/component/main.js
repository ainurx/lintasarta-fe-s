import React, { Component, useState, useEffect } from"react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//component
import Jumbotron from "./jumbotron";
import MovieList from "./movieList";
import {MovieSearch} from"./MovieSearch";
//import Movie from"./Movie";

class Main extends Component{
  constructor(props){
    super(props)
    this.state={
      keyword: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({keyword:event.target.value})
  }

  handleSubmit(event){
    console.log(keyword)
    event.preventDefault()
  }
  
  render(){
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Carifilm</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">Movies</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2"
                      type="search" placeholder="Search"
                      aria-label="Search"
                      value={this.state.keyword} 
                      onChange={this.handleChange.bind(this)}/>
                <Link to="search-movie" className="btn btn-outline-success my-2 my-sm-0" type="submit" value="submit">Search</Link>
              </form>
            </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Jumbotron}/>}/>
          <Route path="/movies" component={MovieList}/>}/>
          <Route path="/search-movie/" render={(props)=><MovieSearch {...this.state.keyword} keyword={this.state.keyword}/>}
          />
        </Switch>
      </Router>
    )}
  }

  export default Main;
  
//<Route path="/movie/detail" render={(props)=><Movie {...this.state.id}/>}/>