/// <reference types="vite/client" />

/// <reference types="react" />



declare module 'vueRemote/VButton' {

    import { FC } from 'react';
  
  
  
    interface VButtonProps {
  
      label: string;
  
      additionalInfo: string;
  
      onClicked: (message: string) => void;
  
      children: ({ info }: { info: string }) => JSX.Element;
  
    }
  
  
  
    const VButton: FC<VButtonProps>;
  
    export default VButton;
  
  }
  