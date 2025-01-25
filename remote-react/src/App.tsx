import React from 'react';

import VButton from 'vueRemote/VButton';

const App: React.FC = () => {
  const handleVueEvent = (message: string) => {
    alert(`Event z Vue: ${message}`);
  };
console.log(VButton)
  return (
    <div>
      <h1>React Host</h1>
        <VButton
          label="Przycisk z React"
          additionalInfo="Informacja z React"
          onClicked={handleVueEvent} // Obsługa eventu emitowanego przez Vue
        >
          {({ info }: { info: string }) => (
            <div style={{ marginTop: '10px', color: 'green' }}>
              Scoped slot z React: {info}
            </div>
          )}
        </VButton>
    </div>
  );
};

export default App;
