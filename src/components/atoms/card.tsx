import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props): ReactElement {
  return <div>{children}</div>;
}
