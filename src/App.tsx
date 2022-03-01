import { useState } from 'react';
import AutoComplete from './components/AutoComplete';
import { MOCK_DATA } from './components/AutoComplete/MOCK_DATA';

function App() {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const [wordList, setWordList] = useState(MOCK_DATA);

  const handleSubmit = (word: string) => {
    console.log(word, 'submit');
  };

  return (
    <AutoComplete
      autoCompleteInput={autoCompleteInput}
      setAutoCompleteInput={setAutoCompleteInput}
      wordList={wordList}
      setWordList={setWordList}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;
