// components/Container.jsx
import React from "react";

export const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-full mx-auto py-16 lg:py-24 px-6 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
};