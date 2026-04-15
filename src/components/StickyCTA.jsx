

export function StickyCTA({ stickyVisible }) {
    if (!stickyVisible) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/95 px-4 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
            <div className="mx-auto flex max-w-6xl gap-3">
                <a href="https://wa.me/919877695827" className="flex-1 rounded-full bg-[#1f2f5f] px-4 py-3 text-center text-sm font-semibold text-white">
                    WhatsApp
                </a>
                <a href="tel:+919877695827" className="flex-1 rounded-full border border-[#1f2f5f]/15 bg-white px-4 py-3 text-center text-sm font-semibold text-[#1f2f5f]">
                    Call
                </a>
            </div>
        </div>
    );
}