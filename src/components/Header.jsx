import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export function Header({ navItems }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">

                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8f6b64]">
                        Elora's PMU
                    </p>
                    <p className="text-sm font-medium text-[#3d3d44]">Lip Blushing in Delhi</p>
                </div>

                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map(([label, href]) => (
                        <a key={label} href={href} className="text-sm font-medium text-[#3d3d44] transition hover:text-[#8f6b64]">
                            {label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/919877695827"
                        className="inline-flex items-center gap-2 rounded-full bg-[#1f2f5f] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1f2f5f]/15 transition hover:translate-y-[-1px]"
                    >
                        Book Now <ArrowRight className="h-4 w-4" />
                    </a>
                </nav>

                <button
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-black/5 bg-white px-4 py-4 md:hidden">
                    <div className="flex flex-col gap-3">
                        {navItems.map(([label, href]) => (
                            <a key={label} href={href} className="rounded-2xl bg-[#faf7f6] px-4 py-3 text-sm font-medium text-[#3d3d44]" onClick={() => setMenuOpen(false)}>
                                {label}
                            </a>
                        ))}
                        <a href="https://wa.me/919877695827" className="rounded-2xl bg-[#1f2f5f] px-4 py-3 text-center text-sm font-semibold text-white">
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}