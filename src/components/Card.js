import React from 'react';
import PropTypes from 'prop-types';
import IconComponent from 'react-icons/hi2'

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
        <div className="card-icon">
            <IconComponent size={20}/>
        </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Card;
