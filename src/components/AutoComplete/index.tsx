import { ChangeEvent, useCallback, useState } from 'react';
import { Input } from './style';
import { Props, TypeDropdownList } from './types';
import { createDropdownListAndSetDropDownOpen } from './utils/createDropdownListAndSetDropDownOpen';

const AutoComplete = ({
  width = 300,
  setAutoCompleteInput,
  autoCompleteInput,
  wordList,
  ...props
}: Props) => {
  const [dropdownList, setDropdownList] = useState<TypeDropdownList>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setAutoCompleteInput(value);

      if (!value.length) {
        setShowDropdown(false);
        return setDropdownList([]);
      }
      createDropdownListAndSetDropDownOpen(wordList, value, setDropdownList, setShowDropdown);
    },
    [wordList],
  );

  return <Input width={width} onChange={handleChange} value={autoCompleteInput} />;
};
export default AutoComplete;
