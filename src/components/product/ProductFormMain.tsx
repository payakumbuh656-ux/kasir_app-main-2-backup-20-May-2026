import type { ReactNode } from "react";

type ProductFormMainProps = {
  children: ReactNode;
};

export default function ProductFormMain({ children }: ProductFormMainProps) {
  return <>{children}</>;
}
