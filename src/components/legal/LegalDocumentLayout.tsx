import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-medium text-white md:text-2xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-neutral-400">{children}</div>
    </section>
  );
}

export function LegalDocumentLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <section className="border-b border-white/10 bg-neutral-950 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-8 inline-flex items-center text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
            Back to home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-neutral-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-black py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
    </div>
  );
}

export { LegalSection };
