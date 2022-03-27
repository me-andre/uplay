import React, { ComponentType } from 'react';
import { LayoutElementSetter } from './Mount';
declare const createTransporter: (Context: React.Context<LayoutElementSetter | null>) => <P>(Component: React.ComponentType<P>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<React.PropsWithChildren<P>> & React.RefAttributes<React.ComponentType<{}>>>;
export default createTransporter;
