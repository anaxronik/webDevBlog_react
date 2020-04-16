import React from 'react';
import FormComponent from './components/FormComponent';
import Ccomponent from './components/Ccomponent';

function App() {
  return (
    <div className="App">
      <Ccomponent name={'Sergey'} />
      <FormComponent />
    </div>
  );
}

export default App;
