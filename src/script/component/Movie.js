import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const API1 = 'https://api.themoviedb.org/3/movie/';
const API2 = '?api_key=341c549444f65b6a022eea5fc24f5b77&language=id';
const DEFAULT_QUERY = 'redux';

class Movie extends Component{
  constructor(props){
    super(props);
    this.state= {
      id: props.id, 
      movie: []
    }
  }

  componentDidMount(){
    const {id} = this.state
    console.log(id)
    console.log(API1+id+API2)
    fetch(`${API1}${id}${API2}` + DEFAULT_QUERY)
      .then(response=>response.json())
      .then(data=>{
        this.setState({movie:data});
      })
  }

  render(){
    const {movie} = this.state;

    const pColor ={
      color: 'white'
    }
    return(
      <div>
        <div className="jumbotron">
          <h1 className="display-4">{movie.title}</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"/>
          <p>It uses utility class for typography and spacing to space content out within the larger container.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button"/>Learn more
        </div>
        <h1 style={pColor}>{movie.title}</h1>
      </div>
    );
  }


}

export default Movie;
