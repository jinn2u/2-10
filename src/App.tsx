import { useState } from 'react';
import AutoComplete from './components/AutoComplete';

function App() {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');

  return (
    <AutoComplete
      autoCompleteInput={autoCompleteInput}
      setAutoCompleteInput={setAutoCompleteInput}
    />
  );
}

export default App;
