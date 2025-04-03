import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";


interface Tool {
  name: string;
  image: string;
}

interface ProjectCardProps {
  title: string;
  website: string;
  description: string;

  logoColor?: string;
  tools: Tool[];
}

export default function ProjectCard({
  title,
  website,
  description,
  logoColor = "bg-yellow-400",
  tools,
}: ProjectCardProps) {
  return (
    <Card className="w-full flex flex-col max-w-md hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-3">
          <div className={`${logoColor} w-10 h-10 rounded-lg flex items-center justify-center`}>
            <span className="text-black font-bold text-xl">{title.split("")[0]}</span>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-left text-lg">{title}</h3>
            <a
              href={website}
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-left text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex items-end flex-1 flex-wrap w-full justify-between">
        <p className="text-muted-foreground">.</p>
        <div className="flex px-2 py-1 -space-x-2 overflow-hidden">
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool.image}
              alt={`${tool.name} icon`}
              width={30}
              height={30}
              className={`inline-block  h-7 w-7 rounded-full ring-2 ring-white dark:ring-gray-700 `}
            />
          ))}
        </div>
      </CardFooter>

    </Card>
  )
}