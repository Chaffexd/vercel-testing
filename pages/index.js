import Landing from "@/components/layout/Landing";
import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Vercel Takehome</title>
        <meta name="description" content="Customer Success Takehome" />
      </Head>
      <Landing 
        intro={"Hi! I'm Shane 👋🏻 🇬🇧"}
        text={"Thanks for taking the time to go through my take home test. I look forward to talking soon!"}
      />
    </div>
  );
}
