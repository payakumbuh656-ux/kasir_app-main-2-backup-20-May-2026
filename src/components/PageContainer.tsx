import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`
        w-full
        h-full
        max-w-[1800px]
        mx-auto

        px-4
        sm:px-5
        md:px-6
        lg:px-8
        xl:px-10
        2xl:px-12

        py-5

        ${className}
      `}
    >
      {children}
    </div>
  );
}