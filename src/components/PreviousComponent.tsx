import { FC, useState } from 'react';

import { usePrevious } from '../hoc/usePrevious';

const PreviousComponent: FC = () => {
  const [count, setCount] = useState<number>(0);
  const prevCount = usePrevious<number>(count);

  return (
    <div>
      <h1>Current count: {count}</h1>
      <h1>Previous count: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export { PreviousComponent };
