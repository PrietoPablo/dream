import { useState } from 'react';

import './App.scss';

import DreamImage from '../DreamImage/DreamImage';
import DreamForm from '../DreamForm/DreamForm';

function App() {
  const [dream, setDream] = useState('');
  const [submitDream, setSubmitDream] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <DreamForm
        dream={dream}
        setDream={setDream}
        setSubmitDream={setSubmitDream}
        setLoading={setLoading}
      />
      {submitDream
      && <DreamImage submitDream={submitDream} loading={loading} />}
    </div>
  );
}

export default App;
