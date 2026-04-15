import { ArrowRight, MessageCircle, PhoneCall } from 'lucide-react';

export function CTA() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <div className="grid gap-6 rounded-[2rem] bg-[#1f2f5f] p-6 text-white shadow-2xl shadow-[#1f2f5f]/15 md:grid-cols-[1.1fr_0.9fr] md:p-10">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Contact</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">Make seemless booking</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                        You can reach out via WhatsApp or phone call, or simply fill out the quick form. The easier you make it for people to contact you, the more bookings you'll get.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a href="https://wa.me/919877695827" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1f2f5f]">
                            WhatsApp Now <MessageCircle className="h-4 w-4" />
                        </a>
                        <a href="tel:+919877695827" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white">
                            Call Now <PhoneCall className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <form className="rounded-[1.75rem] bg-white p-5 text-[#1d1d1f] shadow-xl">
                    <p className="text-sm font-semibold text-[#141418]">Quick lead form</p>
                    <div className="mt-4 grid gap-3">
                        <input className="rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none ring-0 focus:border-[#8f6b64]" placeholder="Full name" />
                        <input className="rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none ring-0 focus:border-[#8f6b64]" placeholder="Phone number" />
                        <textarea className="min-h-[110px] rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none ring-0 focus:border-[#8f6b64]" placeholder="Tell us your concern (dark lips, uneven color, etc.)" />
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f2f5f] px-6 py-3.5 text-sm font-semibold text-white">
                            Submit Enquiry <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}