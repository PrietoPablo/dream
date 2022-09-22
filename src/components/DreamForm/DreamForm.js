import PropTypes from 'prop-types';
import axios from 'axios';

import './DreamForm.scss';

function DreamForm({
  dream, setDream, setSubmitDream, setLoading
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setSubmitDream(dream);

    axios.get(`https://api.computerender.com/generate/${dream}.png`)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log('dream generated');
        setLoading(false);
      });

    setDream('');
  };

  return (
    <form className="dream-form" onSubmit={handleSubmit}>
      <input
        type="dream"
        className="dream-form-input"
        value={dream}
        onChange={(event) => setDream(event.target.value)}
      />
      <button type="submit" className="dream-form-submit">Dream</button>
    </form>
  );
}

DreamForm.propTypes = {
  dream: PropTypes.string.isRequired,
  setDream: PropTypes.func.isRequired,
  setSubmitDream: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default DreamForm;
