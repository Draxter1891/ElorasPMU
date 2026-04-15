import { CheckCircle2, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';

export function Hero({ beforeAfter }) {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(143,107,100,0.18),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(31,47,95,0.12),transparent_28%)]" />
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-20">
                <div className="relative z-10 flex flex-col justify-center">
                    <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#8f6b64]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8f6b64] shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Premium Korean Aesthetic Feel
                    </div>
                    <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#141418] md:text-6xl">
                        Lip blushing in Delhi that looks soft, clean, and expensive.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#5a5a66] md:text-lg">
                        Enhance lip color, improve symmetry, and get a naturally fresh tint without daily lipstick. Built to match the polished style of Elora’s PMU while converting cold traffic into consultation bookings.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a href="https://wa.me/919877695827" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f2f5f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1f2f5f]/15 transition hover:-translate-y-0.5">
                            Book on WhatsApp <MessageCircle className="h-4 w-4" />
                        </a>
                        <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f2f5f]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#1f2f5f] transition hover:-translate-y-0.5">
                            View Pricing <ChevronRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        {[
                            ['Delhi', 'Location targeted'],
                            ['15–30 min', 'Consultation ready'],
                            ['Soft finish', 'Natural results'],
                        ].map(([a, b]) => (
                            <div key={a} className="rounded-3xl border border-black/5 bg-white p-4 shadow-sm">
                                <p className="text-lg font-semibold text-[#141418]">{a}</p>
                                <p className="mt-1 text-sm text-[#666672]">{b}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-[#1f2f5f]/10">
                        <div className="grid gap-4 p-4 md:p-5">
                            <div className="rounded-[1.5rem] bg-[#f3ece9] p-4">
                                <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6b64]">
                                    <span>Before / After</span>
                                    <span>Dummy visuals</span>
                                </div>
                                <div className="grid gap-3">
                                    {beforeAfter.map((item) => (
                                        <div key={item.before} className="grid grid-cols-2 gap-3">
                                            <div className="rounded-2xl bg-white p-4 text-sm text-[#666672] shadow-sm">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b4938a]">Before</p>
                                                <p className="mt-2">{item.before}</p>
                                            </div>
                                            <div className="rounded-2xl bg-[#1f2f5f] p-4 text-sm text-white shadow-sm">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">After</p>
                                                <p className="mt-2">{item.after}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    'Natural tint, not overdone',
                                    'Premium consultation flow',
                                    'Designed for Delhi audience',
                                    'Sticky CTA friendly layout',
                                ].map((x) => (
                                    <div key={x} className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#8f6b64]" />
                                        <span className="text-sm font-medium text-[#3d3d44]">{x}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}