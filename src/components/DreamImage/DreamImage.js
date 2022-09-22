import PropTypes from 'prop-types';
import axios from 'axios';

import './DreamImage.scss';

function DreamImage({ submitDream }) {
  const createURL = () => `https://api.computerender.com/generate/${submitDream}.png`;

  const handleClick = () => {
    axios.get(`https://api.computerender.com/generate/${submitDream}.png`)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log('request axios done');
      });
  };

  return (
    <div className="dream-container">
      <img src={createURL()} alt={submitDream} className="dream-image" />
      <button className="test-button" onClick={handleClick} />
    </div>

  );
}

DreamImage.propTypes = {
  submitDream: PropTypes.string.isRequired,
};

export default DreamImage;
