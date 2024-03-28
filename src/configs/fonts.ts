import { Fira_Code as FontMono, Inter as FontSans, Space_Mono, Italiana, Roboto, Jost, Caveat } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400","500","700"] ,
  variable: "--font-roboto",
});

export const fontSpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400","700", ] ,
  variable: "--font-space-mono"
});

export const fontJost = Jost({
  subsets: ["latin"],
  weight: ["400","700"] ,
  variable: "--font-jost"
});
export const fontCaveat = Caveat({
  subsets: ["latin"],
  weight: ["400","700"] ,
  variable: "--font-caveat"
});

export const fontItaliana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
});
