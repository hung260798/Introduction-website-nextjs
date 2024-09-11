import { Open_Sans, Raleway, Roboto, Inter } from "next/font/google";

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});


export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"]
})

export const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})