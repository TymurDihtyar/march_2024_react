import './App.css';

import { PreviousComponent } from './components/PreviousComponent.tsx';
import { ToggleComponent } from './components/ToggleComponent.tsx';

function App() {
  return (
    <>
      <ToggleComponent />
      <hr />
      <PreviousComponent />
    </>
  );
}

export default App;
