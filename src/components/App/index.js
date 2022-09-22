import { useState } from 'react';
import axios from 'axios';

import './App.scss';

import DreamImage from '../DreamImage/DreamImage';
import DreamForm from '../DreamForm/DreamForm';

function App() {
  const [dream, setDream] = useState('');
  const [submitDream, setSubmitDream] = useState('');
  console.log(submitDream);

  return (
    <div className="App">
      <DreamForm dream={dream} setDream={setDream} setSubmitDream={setSubmitDream} />
      {submitDream
      && <DreamImage submitDream={submitDream} />}
    </div>
  );
}

// == Export
export default App;
