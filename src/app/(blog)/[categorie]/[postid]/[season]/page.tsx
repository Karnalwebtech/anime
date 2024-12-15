import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Play, Search } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
interface Episode {
  id: number;
  title: string;
  isActive?: boolean;
}
export default async function page() {
  const episodes: Episode[] = [
    { id: 1, title: "Cruelty", isActive: true },
    { id: 2, title: "Trainer sakonji urokodaki" },
    { id: 3, title: "Sabito and makomo" },
    { id: 4, title: "Final selection" },
    { id: 5, title: "My own steel" },
    // ... more episodes
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="flex min-h-screen flex-col">
        <div className="container">
          <div className="container grid lg:grid-cols-[300px_1fr_300px] gap-6 p-4">
            {/* Episode List Sidebar */}
            <aside className="hidden lg:block">
              <Card className="p-4 bg-gray-800">
                <div className="sticky top-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-md font-semibold">List of episodes:</h2>
                    <Input placeholder="Number of ep" className="w-32" />
                  </div>
                  <ScrollArea className="h-[calc(100vh-200px)]">
                    <div className="space-y-2 pr-4">
                      {episodes.map((episode) => (
                        <Button
                          key={episode.id}
                          variant={episode.isActive ? "secondary" : "ghost"}
                          className="w-full justify-start"
                        >
                          <span className="mr-2">{episode.id}</span>
                          {episode.title}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </Card>
            </aside>

            {/* Video Player Area */}
            <main className="space-y-4">
              <div className="aspect-video bg-black/90 rounded-lg relative flex items-center justify-center">
                <iframe
                  src="//listeamed.net/e/PlBVEZ1elygxDv9"
                  width="600"
                  height="400"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
                {/* <Button size="lg" className="absolute">
                  <Play className="mr-2 h-4 w-4" />
                  Play Episode
                </Button> */}
              </div>

              {/* Video Controls */}
              <div className="flex flex-wrap gap-4">
                <Select defaultValue="1080p">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="480p">480p</SelectItem>
                  </SelectContent>
                </Select>

                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-video bg-muted rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/placeholder.svg"
                      alt={`Episode thumbnail ${i + 1}`}
                      width={320}
                      height={180}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </main>

            {/* Info Sidebar */}
            <aside className="hidden lg:block">
              <Card className="bg-gray-800">
                <div className="sticky top-4 space-y-4">
                  <div className="aspect-[2/3] bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/assets/demon.webp"
                      alt="Anime Cover"
                      width={300}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-2">
                    <h2 className="text-xl text-gray-100 font-bold mb-2">
                      Demon Slayer: Kimetsu no Yaiba
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>TV</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>HD</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>55m</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      It is the Taisho Period in Japan. Tanjiro, a kindhearted
                      boy who sells charcoal for a living, finds his family
                      slaughtered by a demon...
                    </p>
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </div>





      
    </div>
  );
}
