declare module "bootstrap/dist/js/bootstrap.bundle.min.js";

declare module "sal.js" {
  interface SalOptions {
    threshold?: number;
    once?: boolean;
    disabled?: boolean;
    selector?: string;
    animateClassName?: string;
    disabledClassName?: string;
    rootMargin?: string;
    enterEventName?: string;
    exitEventName?: string;
    root?: Element | null;
  }
  function sal(options?: SalOptions): void;
  export default sal;
}

declare module "react-odometerjs" {
  import { ComponentType } from "react";

  interface OdometerProps {
    value: number;
    format?: string;
    duration?: number;
    animation?: string;
    theme?: string;
  }

  const Odometer: ComponentType<OdometerProps>;
  export default Odometer;
}
