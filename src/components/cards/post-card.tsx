import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function AnimeGrid({ anime }: { anime: any }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-pink-500 transition-colors">
      <div className="relative">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <Badge variant="secondary" className="bg-orange-500">
            {anime.rating}
          </Badge>
          <Badge variant="secondary" className="bg-green-500">
            {anime.episodes}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <Link href={`${anime.type}/${anime.title}`}>
          <CardTitle className="text-lg text-white hover:text-pink-500 transition-colors cursor-pointer">
            {anime.title}
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400 line-clamp-2">
          {anime.description}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{anime.type}</span>
          <span>•</span>
          <span>{anime.duration}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
