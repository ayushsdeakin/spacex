
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

export async function AnimatedGradientTextDemo() {
  return (
    <div className="z-10 flex py-2 items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
            Get into GenAI
        </span>
        <ChevronRight className="ml-1 size-3 text-green-400 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
