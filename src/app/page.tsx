import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div>
      <Button>Click me</Button>
      <FlipWords words={words} />
      <TypingAnimation
      className="text-4xl font-bold text-black dark:text-white"
      text="Typing Animation"
    />
    </div>
  )
}
