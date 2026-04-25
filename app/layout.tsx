import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/organisms"
import { Rubik, Shadows_Into_Light_Two } from "next/font/google"
import "./globals.css"

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap"
})

const shadows_into_light = Shadows_Into_Light_Two({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-shadows-into-light-2",
    display: "swap"
})

export const metadata: Metadata = {
    title: "CML-Meal",
    description: "Don't just be CML-Meal, make tasty food."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${shadows_into_light.variable}`}>
            <head>
                <link rel="icon" href="/img/logo.svg" type="image/x-icon" />
            </head>
            <body className={rubik.className} suppressHydrationWarning={true}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
