import PropTypes from 'prop-types';

import './DreamForm.scss';

function DreamForm({ dream, setDream, setSubmitDream }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitDream(dream);
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
};

export default DreamForm;
