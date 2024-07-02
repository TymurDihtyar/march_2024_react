import { FC } from 'react';

import { useToggle } from '../hoc/useToggle';

const ToggleComponent: FC = () => {
  const [state, toggle] = useToggle(false);
  return (
    <div>
      <h1>{state ? 'ON' : 'OFF'}</h1>
      <button onClick={toggle}>toggle</button>
    </div>
  );
};

export { ToggleComponent };
