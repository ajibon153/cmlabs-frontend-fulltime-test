import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/organisms"


export const metadata: Metadata = {
    title: "CML-Meal",
    description: "Don't just be CML-Meal, make tasty food."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/img/logo.svg" type="image/x-icon" />
            </head>
            <body suppressHydrationWarning={true}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
