import PropTypes from 'prop-types';

import './DreamImage.scss';

function DreamImage({ submitDream, loading }) {
  const createURL = () => `https://api.computerender.com/generate/${submitDream}.png`;

  return (
    <div className="dream-container">
      {loading ? <p>Dreaming...</p> : <img src={createURL()} alt={submitDream} className="dream-image" />}
    </div>
  );
}

DreamImage.propTypes = {
  submitDream: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DreamImage;
