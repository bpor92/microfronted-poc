import React from 'react';

import VButton from 'vueRemote/VButton';
import VueInReact from './VueWrapper';
const App: React.FC = () => {
  const handleVueEvent = (message: string) => {
    alert(`Event z Vue: ${message}`);
  };
console.log(VButton)

  return (
    <div>
      <h1>React Host</h1>
      <VueInReact/>
       
    </div>
  );
};

export default App;
