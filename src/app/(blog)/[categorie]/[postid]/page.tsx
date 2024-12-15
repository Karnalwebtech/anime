import { SeasonButton } from "@/components/buttons/season-button";
import { Card, CardContent } from "@/components/ui/card";
import {  ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
export default async function page() {
  const anime = {
    title: "Demon Slayer: Kimetsu no Yaiba",
    image: "/assets/demon.webp?height=400&width=280",
    description:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself.",
    rating: "PG-13",
    type: "Tv",
    duration: "52m",
    status: "Ongoing",
    score: "8.70",
    aired: "Apr 6, 2019 to Jun 18, 2023",
    ageRating: "PG-13 - Teens 13 or older",
  };
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="flex min-h-screen flex-col">
        <div className="container">
          <div className="mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:text-gray-100" href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                <BreadcrumbItem  >
                  <BreadcrumbLink className="hover:text-gray-100" href={`/${anime.type}`}>
                    {anime.type}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-200">{anime.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col gap-8 my-2">
              <Card className="bg-gray-800/70 backdrop-blur-lg">
                <CardContent className="grid gap-4 p-6 md:grid-cols-[280px_1fr]">
                  <div className="aspect-[2/3] overflow-hidden rounded-lg">
                    <img
                      src={anime.image}
                      alt={anime.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl text-gray-200 font-sm">{anime.title}</h1>
                      <div className="flex gap-2">
                        <Badge className="bg-gray-200" variant="outline">{anime.rating}</Badge>
                        <Badge className="bg-gray-200" variant="outline">HD</Badge>
                        <Badge className="bg-gray-200" variant="outline">{anime.duration}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <SeasonButton season={1} />
                      <SeasonButton season={2} />
                      <SeasonButton season={3} />
                      <SeasonButton season={4} />
                    </div>
                    <p className="text-gray-300 ">{anime.description}</p>
                    <div className="mt-auto grid gap-2 text-sm md:grid-cols-2">
                      <div>
                        <div className="font-sm text-gray-200">Aired:</div>
                        <div className="text-gray-300">
                          {anime.aired}
                        </div>
                      </div>
                      <div>
                        <div className="font-sm text-gray-200">Status:</div>
                        <div className="text-gray-300">
                          {anime.status}
                        </div>
                      </div>
                      <div>
                        <div className="font-sm text-gray-200">Score:</div>
                        <div className="text-gray-300">
                          {anime.score}
                        </div>
                      </div>
                      <div>
                        <div className="font-sm text-gray-200">Age Rating:</div>
                        <div className="text-gray-300">
                          {anime.ageRating}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
