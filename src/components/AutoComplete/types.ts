import { Dispatch, SetStateAction } from 'react';

export interface Props {
  width?: number;
  setAutoCompleteInput: Dispatch<SetStateAction<string>>;
  autoCompleteInput: string;
  wordList: TypeWordList;
}
export type TypeWordList = { id: number; name: string }[];
export type TypeDropdownList = { id: number; name: string; isSelected: boolean }[];
