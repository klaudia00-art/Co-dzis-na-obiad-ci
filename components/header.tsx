import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { UtensilsCrossed } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <UtensilsCrossed className="h-6 w-6 text-green-600" />
          <span className="hidden font-bold sm:inline-block">Co dziś na obiad?</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Przepisy</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/przepisy/kategorie/obiady"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Obiady</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Pełnowartościowe dania obiadowe dla całej rodziny
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/przepisy/kategorie/zupy"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Zupy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Rozgrzewające zupy na każdą porę roku
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/przepisy/kategorie/desery"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Desery</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Słodkie zakończenie każdego posiłku
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/przepisy/kategorie/sniadania"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Śniadania</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Energetyczny początek dnia
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/planowanie" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Planowanie posiłków</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/inspiracje" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Inspiracje</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Zaloguj się
          </Button>
          <Button size="sm">Dołącz za darmo</Button>
        </div>
      </div>
    </header>
  )
}
