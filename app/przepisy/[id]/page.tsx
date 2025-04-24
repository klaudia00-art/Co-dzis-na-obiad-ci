import { notFound } from "next/navigation"
import Link from "next/link"
import { Clock, Users, ChefHat, Printer, Share2, Bookmark, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// This would come from a database in a real application
const getMealById = (id: string) => {
  const meals = {
    "1": {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "Klasyczne włoskie danie z mięsem mielonym i sosem pomidorowym",
      image: "/placeholder.svg?height=500&width=800",
      prepTime: "30 min",
      cookTime: "20 min",
      totalTime: "50 min",
      difficulty: "Łatwe",
      servings: 4,
      ingredients: [
        "400g makaronu spaghetti",
        "500g mielonej wołowiny",
        "1 cebula, drobno posiekana",
        "2 ząbki czosnku, drobno posiekane",
        "2 marchewki, starte na tarce",
        "2 łodygi selera naciowego, drobno posiekane",
        "400g krojonych pomidorów z puszki",
        "2 łyżki koncentratu pomidorowego",
        "200ml bulionu wołowego",
        "1 łyżeczka suszonego oregano",
        "1 łyżeczka suszonego tymianku",
        "2 liście laurowe",
        "Sól i pieprz do smaku",
        "Oliwa z oliwek",
        "Tarty parmezan do podania",
      ],
      instructions: [
        "Zagotuj dużą ilość osolonej wody i ugotuj makaron spaghetti zgodnie z instrukcją na opakowaniu.",
        "W dużym garnku rozgrzej oliwę z oliwek na średnim ogniu. Dodaj cebulę i smaż przez 5 minut, aż zmięknie.",
        "Dodaj czosnek, marchewkę i seler. Smaż przez kolejne 5 minut, mieszając od czasu do czasu.",
        "Zwiększ ogień i dodaj mięso mielone. Smaż, rozbijając większe kawałki, aż mięso zbrązowieje.",
        "Dodaj koncentrat pomidorowy i smaż przez 1-2 minuty.",
        "Wlej pomidory z puszki i bulion. Dodaj zioła, liście laurowe, sól i pieprz.",
        "Zmniejsz ogień, przykryj i gotuj przez około 30 minut, mieszając od czasu do czasu.",
        "Podawaj sos na ugotowanym makaronie, posypany tartym parmezanem.",
      ],
      categories: ["Włoskie", "Makarony", "Mięsne"],
      nutrition: {
        calories: 520,
        protein: "28g",
        carbs: "65g",
        fat: "15g",
      },
    },
  }

  return meals[id as keyof typeof meals] || null
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const meal = getMealById(params.id)

  if (!meal) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Powrót do strony głównej
      </Link>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{meal.title}</h1>
            <p className="mt-2 text-gray-500">{meal.description}</p>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <img src={meal.image || "/placeholder.svg"} alt={meal.title} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium">Czas przygotowania</p>
                <p className="text-sm text-gray-500">{meal.prepTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium">Poziom trudności</p>
                <p className="text-sm text-gray-500">{meal.difficulty}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium">Porcje</p>
                <p className="text-sm text-gray-500">{meal.servings}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Składniki</h2>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {meal.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="block h-2 w-2 translate-y-1.5 rounded-full bg-green-500" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Przygotowanie</h2>
            <Separator className="my-4" />
            <ol className="space-y-4">
              {meal.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    {index + 1}
                  </div>
                  <p className="mt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-xl font-bold">Akcje</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Printer className="h-4 w-4" />
                Drukuj
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Share2 className="h-4 w-4" />
                Udostępnij
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Bookmark className="h-4 w-4" />
                Zapisz
              </Button>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-xl font-bold">Wartości odżywcze</h3>
            <p className="text-sm text-gray-500">Na porcję</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Kalorie</span>
                <span className="font-medium">{meal.nutrition.calories} kcal</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Białko</span>
                <span className="font-medium">{meal.nutrition.protein}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Węglowodany</span>
                <span className="font-medium">{meal.nutrition.carbs}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Tłuszcze</span>
                <span className="font-medium">{meal.nutrition.fat}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-xl font-bold">Kategorie</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {meal.categories.map((category, index) => (
                <Badge key={index} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
