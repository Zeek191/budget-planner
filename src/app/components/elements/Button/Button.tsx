import { PropsWithChildren } from "react";

export default function Button({
  children,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements["button"]>) {
  return <button {...props}>{children}</button>;
}
