import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './FavSuitsPage.css';
import suitsService from '../../utils/suitsService';

class FavSuitsPage extends Component {

  async componentDidMount() {
    const suits = await suitsService.index();
    this.props.handleUpdateSuits(suits);
  }

  render() {
    const suitRows = ((suit, idx) => (
      <tr key={idx}>
        <td>{suit}</td>
      </tr>
    ));
  
    return (
      <div className={styles.FavSuit}>
        <header className='header-footer'>Fav-Suits</header>
        {this.props.suits ? 
          <table className={`${styles.table} table text-info`}>
            <thead>
        <tr><th width={80}>#</th><th width={100}>Nice!</th><th width={100}>Guesses</th><th>Seconds</th></tr>
            </thead>
            <tbody>
              {suitRows}
            </tbody>
          </table>
          :
          <h4 className='text-info'>No Favorite Suits Yet</h4>
        }
        <div>
          <Link className={`${styles.cancel} btn btn-default btn-sm`} to='/'>Back to Create</Link>
        </div>
      </div>
    );
  }

}

export default FavSuitsPage;