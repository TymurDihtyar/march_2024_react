import { useState } from 'react';

type IToggle = [boolean, () => void];

export const useToggle = (initialValue: boolean): IToggle => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};
