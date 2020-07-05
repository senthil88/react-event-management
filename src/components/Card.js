import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Card.css';

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  pic: PropTypes.string,
  available_seats: PropTypes.number
}

const defaultProps = {
  name: 'Evnet N',
  date: '23-may-2020',
  pic: 'https://vignette.wikia.nocookie.net/naruto/images/4/42/Naruto_Part_III.png/revision/latest/scale-to-width-down/300?cb=20180117103539',
  available_seats: 23
}

const Card = ({name, date, pic, available_seats,id}) => {

  const LinkButton = () => {
    if(available_seats > 0) {
      return(
        <Link to={`/events/${id}`}>
          <button type="button" className='button-min'>Book Now</button>          
        </Link>
      );
    } else {
      return(
        <button type="button" className='button-min' disabled>Sold Out</button>
      );
    }
  }

  return (
    <div className='UserCard'>
      <div className='UserCardTop'>
        <img src={pic} alt='img' />
      </div>
      <div className='UserCardBottom'>
        <h3>{name}</h3>
        <h5>{date}</h5>
        <p>Seats Available:</p>
        <h5>{available_seats}</h5>
        <LinkButton/>
      </div>
    </div>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;


export default Card;