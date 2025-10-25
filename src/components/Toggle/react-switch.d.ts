declare module "react-switch" {
  import * as React from "react";

  export interface ReactSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    onColor?: string;
    offColor?: string;
    checkedIcon?: boolean | React.ReactNode;
    uncheckedIcon?: boolean | React.ReactNode;
    [key: string]: any;
  }

  const ReactSwitch: React.ComponentType<ReactSwitchProps>;
  export default ReactSwitch;
}
