import React, { Component } from 'react';
import ErrPage from './ErrPage';
import Character from './Character';

class CharacterPage extends Component {
  constructor() {
    super()
    this.state = {
      charData: {}
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id

    fetch(`https://swapi.co/api/people/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        this.setState((prevState) => {
          return {
            charData: { ...prevState.charData, ...data }
          }
        })
      }).catch((err) => {
        console.log(err.response)
      })
    // axios.get(`https://swapi.co/api/people/${id}`)
    //   .then((response) => {
    //     console.log(response)
    //     this.setState((prevState) => {
    //       return {
    //         charData: { ...prevState.charData, ...response.data }
    //       }
    //     })
    //   }).catch((err) => {
    //     console.log(err.response)
    //     this.props.history.push('/character')
    //   })
  }

  backtoList = () => {
    this.props.history.push('/character')
  }

  render() {
    return (
      <div>
        { this.state.charData.detail ? (
          <ErrPage />
        ) : (
          <Character charData={ this.state.charData }/>
        ) }
        
        <button onClick={ this.backtoList }>Back To List</button>
      </div>
    );
  }
}

export default CharacterPage;