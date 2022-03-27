import React, { ComponentType, FC, forwardRef, PropsWithChildren } from 'react';
import { LayoutElementSetter } from './Mount';

const createTransporter = (Context: React.Context<LayoutElementSetter | null>) => {
  const Transporter: FC = ({ children }) => {
    return (
      <Context.Consumer>
        {(setLayoutElement) => {
          if (!setLayoutElement) {
            throw new TypeError('Must be a descendant of <Mount>');
          }
          setLayoutElement(children);
          return null;
        }}
      </Context.Consumer>
    );
  };

  return <P,>(Component: ComponentType<P>) => forwardRef<ComponentType, PropsWithChildren<P>>((props, ref) => (
    <Transporter>
      <Component ref={ref} {...props} />
    </Transporter>
  ));
};

export default createTransporter;
