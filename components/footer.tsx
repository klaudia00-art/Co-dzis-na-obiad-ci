import Link from "next/link"
import { UtensilsCrossed } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <UtensilsCrossed className="h-6 w-6 text-green-600" />
              <span className="font-bold">Co dziś na obiad?</span>
            </Link>
            <p className="text-sm text-gray-500">
              Strona z inspiracjami na codzienne obiady. Znajdź pomysł na dzisiejszy posiłek!
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Przepisy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/przepisy/kategorie/obiady" className="text-gray-500 hover:text-gray-900">
                  Obiady
                </Link>
              </li>
              <li>
                <Link href="/przepisy/kategorie/zupy" className="text-gray-500 hover:text-gray-900">
                  Zupy
                </Link>
              </li>
              <li>
                <Link href="/przepisy/kategorie/desery" className="text-gray-500 hover:text-gray-900">
                  Desery
                </Link>
              </li>
              <li>
                <Link href="/przepisy/kategorie/sniadania" className="text-gray-500 hover:text-gray-900">
                  Śniadania
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Narzędzia</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/planowanie" className="text-gray-500 hover:text-gray-900">
                  Planowanie posiłków
                </Link>
              </li>
              <li>
                <Link href="/kalkulator" className="text-gray-500 hover:text-gray-900">
                  Kalkulator kalorii
                </Link>
              </li>
              <li>
                <Link href="/konwerter" className="text-gray-500 hover:text-gray-900">
                  Konwerter miar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">O nas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/o-nas" className="text-gray-500 hover:text-gray-900">
                  O projekcie
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-500 hover:text-gray-900">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className="text-gray-500 hover:text-gray-900">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Co dziś na obiad? Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
