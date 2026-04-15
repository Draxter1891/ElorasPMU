import { HeartHandshake } from 'lucide-react';

export function Benefits({ benefits }) {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6b64]">Benefits</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">Why people choose lip blushing</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {benefits.map((b) => (
          <div key={b} className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <HeartHandshake className="mt-0.5 h-5 w-5 text-[#8f6b64]" />
              <p className="text-sm leading-6 text-[#3d3d44]">{b}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}