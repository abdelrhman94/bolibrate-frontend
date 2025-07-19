'use client'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-2xl text-primary">
      <h1>Bolibrate Starter is ready 🚀</h1>
      <Button variant="outline" onClick={() => {
        console.log("first")
      }}>Button</Button>
    </main>
  );
}
