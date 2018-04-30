import React, { Component } from 'react';
import Character from './Character';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCard } from '../store/cards/cards.actions';

import Loading from './Loading';
import ErrPage from './ErrPage';

class CharacterPage extends Component {
  componentDidMount() {
    this.props.getCard(this.props.match.params.id)
  }

  render() {
    return (
      <div className="singlepoke">
        { this.props.card.loading ?
          <Loading />
          : 
          this.props.card.error ?
          <ErrPage />
          :
          <Character />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  card: state.cardReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getCard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);