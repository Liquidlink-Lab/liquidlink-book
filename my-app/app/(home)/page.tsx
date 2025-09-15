import Link from 'next/link';
import Layout from '../docs/layout';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-3xl font-bold">Liquidlink</h1>
      <p className="text-fd-muted-foreground text-2xl">
       A on chain incentive system on SUI & IOTA.
      </p>
    </main>
  );
}
