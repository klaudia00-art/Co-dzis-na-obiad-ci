import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Co dziś na obiad? - Inspiracje na codzienne obiady",
  description: "Strona z inspiracjami na codzienne obiady - przepisy, pomysły i planowanie posiłków",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7454469455266269"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />

          {/* Blok reklamowy */}
          <ins className="adsbygoogle"
            style={{ display: "block", textAlign: "center", margin: "20px 0" }}
            data-ad-client="ca-pub-7454469455266269"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <script dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
          }} />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
