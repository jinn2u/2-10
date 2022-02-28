import { Dispatch, SetStateAction } from 'react';

export interface Props {
  width?: number;
  setAutoCompleteInput: Dispatch<SetStateAction<string>>;
  autoCompleteInput: string;
}
