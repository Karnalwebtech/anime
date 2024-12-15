"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface SeasonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  season: number;
}

export function SeasonButton({
  season,
  className,
  ...props
}: SeasonButtonProps) {
  const router = useRouter();
  const nevigate = () => {
    router.push(`/tv/ssdsds/sesion-1`);
  };
  return (
    <Button
      onClick={() => nevigate()}
      variant="secondary"
      className={cn(
        "bg-pink-500/20 text-pink-500 hover:bg-pink-500/30 hover:text-pink-400",
        className
      )}
      {...props}
    >
      Season {String(season).padStart(2, "0")}
    </Button>
  );
}
