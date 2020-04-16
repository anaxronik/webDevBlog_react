import React from 'react';
import Fcomponent from './components/Fcomponent';
import Ccomponent from './components/Ccomponent';
import { AFcomponent } from './components/AFcomponent';

function App() {
  return (
    <div className="App">
      <Fcomponent name={'Sergey'} />
      <Ccomponent name={'Sergey'} />
      <AFcomponent name={'Sergey'} />
    </div>
  );
}

export default App;
