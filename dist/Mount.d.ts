import React, { ReactNode } from 'react';
export interface LayoutElementSetter {
    (layoutElement: ReactNode): void;
}
declare const createMount: () => {
    Mount: React.FC<{}>;
    Ported: <P>(Component: React.ComponentType<P>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<React.PropsWithChildren<P>> & React.RefAttributes<React.ComponentType<{}>>>;
};
export default createMount;
