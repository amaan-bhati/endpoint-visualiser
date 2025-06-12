'use client';

import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import TreeChart without SSR
const TreeChart = dynamic(() => import('@/components/TreeChart'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Endpoint Visualiser Dashboard</title>
        <meta name="description" content="Visualise your API endpoints" />
      </Head>

      <main
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/a9/ab/2f/a9ab2fa01e210bc9e94633554c536fc0.jpg')` }} 
      >
        <div className="absolute inset-0 bg-black/40 z-0" /> {/* Optional overlay for contrast */}

        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
              Visualisation Dashboard
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/90">
              A modern and interactive map of your API structure.
            </p>
          </div>

          <div
  className="w-full max-w-6xl bg-white/10 border border-white/30 backdrop-blur-3xl rounded-3xl p-6 md:p-10 shadow-2xl transition-all duration-300 flex justify-center items-center"
>
            <TreeChart
              width={1000}
              height={600}
              margin={{ top: 30, right: 30, bottom: 70, left: 30 }}/>
          </div>
        </div>
      </main>
    </>
  );
}
