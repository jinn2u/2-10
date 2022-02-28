import { useState } from 'react';
import AutoComplete from './components/AutoComplete';
import { MOCK_DATA } from './components/AutoComplete/MOCK_DATA';

function App() {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const [wordList, setWordList] = useState(MOCK_DATA);
  return (
    <AutoComplete
      autoCompleteInput={autoCompleteInput}
      setAutoCompleteInput={setAutoCompleteInput}
      wordList={wordList}
      handleSubmit={() => console.log(autoCompleteInput)}
    />
  );
}

export default App;
