import { ShieldCheck } from 'lucide-react';

export function Pricing({ pricing }) {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6b64]">Pricing</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">Starting prices</h2>
        <p className="mt-3 text-sm leading-7 text-[#5a5a66] md:text-base">
            We keep our pricing simple and transparent. No hidden fees, no confusing packages. Just straightforward pricing for beautiful lips.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {pricing.map((item) => (
          <div key={item.label} className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-[#666672]">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-[#141418]">{item.value}</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-[#8f6b64]">
              <ShieldCheck className="h-4 w-4" />
              Consultation based
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}