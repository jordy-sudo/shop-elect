// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import NavbarUI from "./components/NavbarUI";
import FooterUI from './components/FooterUI';


export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NavbarUI/>
      {children}
      <FooterUI />
    </NextUIProvider>
  )
}