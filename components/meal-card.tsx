import Link from "next/link"
import { Clock, BarChart } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Meal {
  id: number
  title: string
  description: string
  image: string
  prepTime: string
  difficulty: string
}

interface MealCardProps {
  meal: Meal
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <Link href={`/przepisy/${meal.id}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={meal.image || "/placeholder.svg"}
            alt={meal.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="line-clamp-1 text-xl">{meal.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="line-clamp-2 text-sm text-gray-500">{meal.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-1 h-4 w-4" />
            <span>{meal.prepTime}</span>
          </div>
          <Badge variant="outline" className="text-xs">
            <BarChart className="mr-1 h-3 w-3" />
            {meal.difficulty}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}
