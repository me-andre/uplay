import React, { createContext, FC, ReactNode, useState } from 'react';
import createTransporter from './Transporter';

export interface LayoutElementSetter {
  (layoutElement: ReactNode): void;
}

const createMount = () => {
  const Context = createContext<LayoutElementSetter | null>(null);

  const Mount: FC = ({ children }) => {
    const [layoutElement, setLayoutElement] = useState<ReactNode>(null);

    return (
      <>
        {layoutElement}
        <Context.Provider value={setLayoutElement}>
          {children}
        </Context.Provider>
      </>
    );
  };

  const Ported = createTransporter(Context);

  return {
    Mount,
    Ported,
  };
};

export default createMount;
