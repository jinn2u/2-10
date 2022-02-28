import { ChangeEvent, useCallback } from 'react';
import { Input } from './style';
import { Props } from './types';

const AutoComplete = ({
  width = 300,
  setAutoCompleteInput,
  autoCompleteInput,
  ...props
}: Props) => {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAutoCompleteInput(value);
  }, []);
  return <Input width={width} onChange={handleChange} value={autoCompleteInput} />;
};
export default AutoComplete;
