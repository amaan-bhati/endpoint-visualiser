'use client'; // 🔥 This is required

import dynamic from 'next/dynamic';

// Dynamically import TreeChart with SSR disabled
const TreeChart = dynamic(() => import('@/components/TreeChart'), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1>Tree Chart</h1>
      {/* <TreeChart /> */}
      <TreeChart width={500} height={400} />

    </main>
  );
}
