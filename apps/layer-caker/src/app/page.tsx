import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 px-6 py-16 font-sans dark:bg-black">
      <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={96}
          height={20}
          priority
        />
      </div>
      <h1 className="max-w-xl text-center text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
        Layer Caker
      </h1>
      <p className="max-w-2xl text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        A Next 16 app using Biome for linting and formatting.
      </p>
    </main>
  );
}
