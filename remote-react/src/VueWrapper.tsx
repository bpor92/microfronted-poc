import React, { useEffect, useRef } from 'react';
import { createApp } from 'vue';
import VButton from 'vueRemote/VButton';

function VueInReact() {
  const vueContainerRef = useRef(null);

  useEffect(() => {
    // Utwórz instancję aplikacji Vue i zamontuj ją do kontenera
    const app = createApp(VButton);
    app.mount(vueContainerRef.current);

    // Posprzątaj po Vue przy odmontowaniu komponentu React
    return () => {
      app.unmount();
    };
  }, []);

  return <div ref={vueContainerRef}></div>;
}

export default VueInReact;