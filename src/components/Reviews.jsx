import { Star } from 'lucide-react';

export function Reviews({ testimonials }) {
  return (
    <section id="reviews" className="bg-white/70 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6b64]">Testimonials</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">What trust sounds like</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-[1.75rem] border border-black/5 bg-[#fbf8f6] p-6 shadow-sm">
              <div className="flex gap-1 text-[#8f6b64]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#3d3d44]">“{t.text}”</p>
              <p className="mt-5 text-sm font-semibold text-[#141418]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}