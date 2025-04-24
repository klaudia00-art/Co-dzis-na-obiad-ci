import { MealCard } from "@/components/meal-card"
import { SearchBar } from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { ChevronRight, UtensilsCrossed } from "lucide-react"

export default function Home() {
  // Sample meal data - in a real app, this would come from an API or database
  const featuredMeals = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "Klasyczne włoskie danie z mięsem mielonym i sosem pomidorowym",
      image: "/placeholder.svg?height=300&width=400",
      prepTime: "30 min",
      difficulty: "Łatwe",
    },
    {
      id: 2,
      title: "Kotlet Schabowy",
      description: "Tradycyjny polski kotlet panierowany z ziemniakami i surówką",
      image: "/placeholder.svg?height=300&width=400",
      prepTime: "45 min",
      difficulty: "Średnie",
    },
    {
      id: 3,
      title: "Zupa Pomidorowa",
      description: "Rozgrzewająca zupa pomidorowa z makaronem i świeżymi ziołami",
      image: "/placeholder.svg?height=300&width=400",
      prepTime: "40 min",
      difficulty: "Łatwe",
    },
    {
      id: 4,
      title: "Placki Ziemniaczane",
      description: "Chrupiące placki ziemniaczane podawane ze śmietaną",
      image: "/placeholder.svg?height=300&width=400",
      prepTime: "35 min",
      difficulty: "Średnie",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                Co dziś na obiad?
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Inspiracje na codzienne obiady
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Odkryj pyszne i proste przepisy na każdy dzień tygodnia. Koniec z zastanawianiem się, co ugotować!
              </p>
              <div className="w-full max-w-md">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popularne przepisy</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Sprawdzone przepisy, które zawsze się udają i smakują całej rodzinie.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
              {featuredMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="gap-1">
                Zobacz więcej przepisów <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Planowanie posiłków na cały tydzień
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Zaplanuj swoje posiłki na cały tydzień z wyprzedzeniem. Oszczędzaj czas i pieniądze, jednocześnie
                  jedząc zdrowo i różnorodnie.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Stwórz plan posiłków</Button>
                  <Button variant="outline">Przeglądaj gotowe plany</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
                    <UtensilsCrossed className="h-24 w-24 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
