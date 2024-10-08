"use cleint";
import React from 'react'
import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";

const Provider =  ({ children }: PropsWithChildren)  => {
  return (
    <NextUIProvider>{children}</NextUIProvider> 
  )
}

export default Provider