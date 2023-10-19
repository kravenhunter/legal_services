import { Hero } from "@/components";

export default async function Home() {
  console.log("App");

  return (
    <main className='min-h-screen overflow-hidden'>
      <Hero />
    </main>
  );
}
