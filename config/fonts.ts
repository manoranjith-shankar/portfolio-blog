import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontCaniculeDisplay = localFont({
  src: "./fonts/otfs/CaniculeDisplayv0.1-Regular-test.otf",
  variable: "--font-canicule-display-regular",
})

export const fontMonaco = localFont({
  src: "./Monaco.woff",
  variable: "--font-monaco",
})