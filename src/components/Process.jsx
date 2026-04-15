export function Process({ steps }) {
  return (
    <section id="process" className="bg-white/70 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6b64]">Procedure</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">What the appointment feels like</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#5a5a66] md:text-base">
            From the moment you book to the final aftercare, we’ve designed a seamless experience that’s as comfortable as it is transformative.
          </p>
        </div>
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div key={step} className="flex gap-4 rounded-[1.5rem] border border-black/5 bg-[#fbf8f6] p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f2f5f] text-sm font-semibold text-white">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-[#141418]">{step}</p>
                <p className="mt-1 text-sm leading-6 text-[#666672]">
                  A clean, guided experience from consult to aftercare.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}