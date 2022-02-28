import { ChangeEvent, useCallback, useState } from 'react';
import { Input, Li, Ul, Wrapper } from './style';
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

  return (
    <Wrapper>
      <Input width={width} onChange={handleChange} value={autoCompleteInput} />
      {showDropdown && (
        <Ul width={width}>
          {dropdownList.map(({ id, name }) => (
            <Li key={id}>{name}</Li>
          ))}
        </Ul>
      )}
    </Wrapper>
  );
};
export default AutoComplete;
