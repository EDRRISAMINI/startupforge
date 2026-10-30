"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white" dir="rtl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_40%,transparent_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-lg font-black text-slate-950">
            Z
          </div>
          <div>
            <p className="text-lg font-black tracking-tight">Zehn Barter</p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">زهن برتر</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="#features">ویژگی‌ها</Link>
          <Link href="#workflow">فرآیند</Link>
          <Link href="#agents">ایجنت‌ها</Link>
          <Link href="#free">رایگان</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/demo" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:border-indigo-400 hover:text-white">
            مشاهده دمو
          </Link>
          <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02]">
            شروع رایگان
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-200">
            هوش مصنوعی برای ساخت استارت‌آپ
          </div>

          <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">
            از ایده تا استارتاپ، هم‌زمان با ایجنت‌های هوشمند.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            ایده‌تان را بنویسید؛ تیم هوش مصنوعی ما آن را به استراتژی محصول، تحلیل بازار، نقشه MVP، برند، صفحه فرود و کد اولیه تبدیل می‌کند.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-6 py-3 text-center font-bold text-slate-950 shadow-xl shadow-indigo-500/30 transition hover:scale-[1.02]">
              توضیح ایده من
            </Link>
            <Link href="#workflow" className="rounded-full border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
              دیدن نحوه کار
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <div>
              <span className="block text-2xl font-bold text-white">100%</span>
              رایگان
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">7</span>
              ایجنت تخصصی
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">24/7</span>
              همراه شما
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-indigo-950/30 backdrop-blur">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">ورودی ایده</p>
                <p className="mt-2 text-lg font-semibold text-white">زهن برتر</p>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                آماده
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-slate-300">
                “پلتفرمی برای رزرو خدمات منزل مثل تمیزکاری، تعمیرات و خدمات خانه در کمتر از 10 دقیقه.”
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <p className="text-xs text-slate-400">بازار</p>
                  <p className="mt-2 text-sm font-medium text-white">خدمات خانگی</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <p className="text-xs text-slate-400">مدل درآمدی</p>
                  <p className="mt-2 text-sm font-medium text-white">کمیسیون + اشتراک</p>
                </div>
              </div>

              <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">خروجی</p>
                <p className="mt-2 text-base font-semibold text-white">HomeNest</p>
                <p className="mt-2 text-sm text-slate-300">مخاطب: صاحبان خانه و مدیران ملک.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">ویژگی‌ها</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">از ایده تا استارتاپ در یک فضای کاری</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["تحلیل بازار", "بازار، رقبا و شکاف‌ها را دقیق بررسی می‌کند."],
            ["استراتژی محصول", "ویژگی‌ها، مسیر کاربر و MVP را به‌صورت هوشمند می‌سازد."],
            ["معماری فنی", "تکنولوژی مناسب، دیتابیس و نقشه توسعه را پیشنهاد می‌دهد."],
            ["برند و ارائه", "نام برند، صفحه فرود و اسلایدهای ارائه را آماده می‌کند."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-slate-950">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">فرآیند</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">یک فرایند سریع برای ساخت استارتاپ</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["01", "ایده خود را بنویسید", "فقط مشکل و مخاطب هدف را توضیح دهید."],
            ["02", "ایجنت‌ها با هم کار می‌کنند", "تحلیل بازار، محصول و فنی با هم هماهنگ می‌شوند."],
            ["03", "پروژه آماده می‌شود", "خروجی نهایی شامل استراتژی، مسیر MVP و کد اولیه است."],
          ].map(([step, title, text]) => (
            <div key={step} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-4 text-sm font-semibold text-indigo-300">{step}</div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="agents" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">ایجنت‌ها</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">تیم متخصص، یک مأموریت مشترک</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Idea Analyst", "مشکل واقعی و زاویه استارتاپ را پیدا می‌کند."],
            ["Market Researcher", "تقاضا، رقبا و بازار را تحلیل می‌کند."],
            ["Product Strategist", "MVP و اولویت‌بندی ویژگی‌ها را می‌سازد."],
            ["Technical Builder", "معماری و کد شروع پروژه را آماده می‌کند."],
          ].map(([name, text]) => (
            <div key={name} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-4 h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 ring-1 ring-indigo-400/30" />
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="free" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">رایگان</p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">همه امکانات Zehn Barter کاملاً رایگان هستند</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            هیچ پلنی پولی وجود ندارد. ایده شما، خروجی‌ها و ابزارها همه برای شما رایگان هستند تا بتوانید سریع شروع کنید.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-center font-bold text-slate-950">
              همین حالا شروع کنید
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-800 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row lg:px-8">
          <p>© 2026 Zehn Barter</p>
          <div className="flex gap-6">
            <Link href="#features">ویژگی‌ها</Link>
            <Link href="#workflow">فرآیند</Link>
            <Link href="#free">رایگان</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
