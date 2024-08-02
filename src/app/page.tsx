import Introduction from "@/components/farmer-motion/Introduction";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"


export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="overflow-x-hidden container py-10">
      <Button>Click me</Button>
      <FlipWords words={words} />
      <TypingAnimation
        className="text-4xl font-bold text-black dark:text-white"
        text="Typing Animation"
      />
      <br />
      <Introduction />


    </div>
  )
}
