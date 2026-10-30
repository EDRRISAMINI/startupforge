import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white" dir="rtl">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-lg font-black text-slate-950">
            Z
          </div>
          <div>
            <p className="text-lg font-black">Zehn Barter</p>
          </div>
        </Link>

        <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
          شروع رایگان
        </Link>
      </header>

      <section className="mx-auto max-w-4xl px-6 pb-16 pt-12 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">رایگان</p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">همه امکانات Zehn Barter رایگان‌اند</h1>
          <p className="mt-4 text-lg text-slate-300">
            هیچ هزینه‌ای برای استفاده از ابزارها، خروجی‌ها و پروژه‌ها وج��د ندارد. همه چیز برای شروع و ساخت ایده شما آماده است.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["تحلیل ایده", "ایده شما به‌صورت ساختاریافته و حرفه‌ای بررسی می‌شود."],
            ["تحلیل بازار", "رقبا، بازار و شکاف فرصت بررسی می‌شود."],
            ["MVP و استراتژی", "مسیر رشد و ساخت محصول برای شما ترسیم می‌شود."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-xl text-emerald-300">✓</div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-bold text-slate-950">
            شروع رایگان
          </Link>
        </div>
      </section>
    </main>
  );
}
