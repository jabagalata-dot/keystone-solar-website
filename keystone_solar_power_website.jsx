export default function KeystoneSolarPowerWebsite() {
  const navItems = ["Solutions", "Benefits", "Process", "Projects", "Financing", "Reviews", "About", "Contact"];

  const services = [
    {
      title: "Residential Solar Installation",
      text: "Custom rooftop solar systems designed to reduce utility costs, improve efficiency, and add long-term value to your home.",
    },
    {
      title: "Battery Backup Systems",
      text: "Reliable energy storage options that help protect essential circuits during outages and improve overall energy independence.",
    },
    {
      title: "System Upgrades & Support",
      text: "Troubleshooting, modernization, and performance improvements for existing solar and electrical systems.",
    },
  ];

  const benefits = [
    "Lower monthly energy costs",
    "Cleaner and more dependable home power",
    "Straightforward consultation and proposal process",
    "Modern installation-focused approach",
  ];

  const steps = [
    {
      step: "01",
      title: "Consultation",
      text: "We review your property, energy use, and project goals to determine the right solar path for your home or small business.",
    },
    {
      step: "02",
      title: "Design & Proposal",
      text: "You receive a tailored recommendation with system details, estimated savings, and a clear next-step plan.",
    },
    {
      step: "03",
      title: "Install & Activate",
      text: "We move the project from planning to installation with a cleaner process built around confidence and clarity.",
    },
  ];

  const reviews = [
    {
      name: "Homeowner Review",
      text: "The process felt organized from the first call to the final walkthrough. Everything was explained clearly.",
    },
    {
      name: "Savings Review",
      text: "We wanted lower energy costs without confusion. The proposal was clear and easy to understand.",
    },
    {
      name: "Installation Review",
      text: "Professional communication, strong follow-through, and a smooth installation experience overall.",
    },
  ];

  const trustPoints = [
    "Modern brand built for trust",
    "Quote-focused website designed to generate leads",
    "Clear communication from estimate to completion",
    "Residential and small business solar positioning",
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-900 shadow-lg shadow-cyan-500/10">
              <img src="/keystone-logo.png" alt="Keystone Solar Power Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white md:text-xl">Keystone <span className="text-cyan-300">Solar Power</span></p>
              <p className="text-[10px] uppercase tracking-[0.32em] text-cyan-200/60 md:text-xs">Modern solar solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/70 transition hover:text-cyan-300">
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="rounded-full border border-cyan-300/30 bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]">
            Free Estimate
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.16),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(249,115,22,0.12),transparent_30%),linear-gradient(180deg,#020617_0%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              Clean energy. Clear process. Stronger brand.
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              Solar made <span className="text-cyan-300">modern</span> for homes that want lower bills and better energy control.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Keystone Solar Power helps homeowners and small businesses move to clean, dependable energy through a professional process built around clarity, trust, and long-term savings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]">
                Get a Free Solar Estimate
              </a>
              <a href="#solutions" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/5">
                Explore Solutions
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <p className="text-2xl font-semibold text-cyan-300">Clean</p>
                <p className="mt-2 text-sm leading-6 text-white/65">Energy-first solutions built for real utility savings.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <p className="text-2xl font-semibold text-cyan-300">Clear</p>
                <p className="mt-2 text-sm leading-6 text-white/65">A process customers can understand from day one.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <p className="text-2xl font-semibold text-cyan-300">Strong</p>
                <p className="mt-2 text-sm leading-6 text-white/65">A more premium brand presence that builds trust fast.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[2rem] border border-cyan-300/20 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900">
                    <img src="/keystone-logo.png" alt="Keystone Solar Power Logo" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Featured Brand</p>
                    <h2 className="mt-1 text-2xl font-semibold">Keystone Solar Power</h2>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/5 p-4">
                    <p className="text-sm text-white/50">Primary message</p>
                    <p className="mt-2 text-lg font-medium">A cleaner, more premium website built to turn visitors into quote requests.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm text-white/45">Built for</p>
                      <p className="mt-2 font-medium">Homeowners and small businesses</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm text-white/45">Core action</p>
                      <p className="mt-2 font-medium">Free solar quote requests</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-cyan-400/15 via-blue-500/10 to-orange-400/10 p-4">
                    <p className="text-sm text-white/55">Brand direction</p>
                    <p className="mt-2 text-lg font-medium">Modern, tech-forward, and clearer in the keystone concept.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Solutions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Professional solar services with a more premium presentation.</h2>
          <p className="mt-4 text-white/65">
            This layout makes the company look more established by explaining services clearly and keeping the design clean, modern, and direct.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">✦</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Benefits</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Why this kind of message works for homeowners.</h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Customers want simple explanations, a clean brand, and confidence that the company knows what it is doing. This section reinforces that fast.
            </p>
          </div>
          <div className="grid gap-4">
            {benefits.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <div className="mt-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.7)]" />
                <p className="text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Process</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A process customers can understand immediately.</h2>
          </div>
          <p className="max-w-xl text-white/65">
            Showing the next steps clearly helps visitors trust the company and feel ready to reach out.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-cyan-300/[0.06] to-transparent p-6">
              <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">{item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A project gallery ready for real installation photos.</h2>
          <p className="mt-4 text-white/65">Real job photos will make this section much stronger later. For now, the structure is in place so the site already feels more complete.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="flex h-64 items-end rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-sm text-white/50">Installation Photo</div>
          <div className="flex h-64 items-end rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-sm text-white/50">Roof Solar Project</div>
          <div className="flex h-64 items-end rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-sm text-white/50">Completed System</div>
        </div>
      </section>

      <section id="financing" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Financing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Flexible solar financing options</h2>
          <p className="mt-4 max-w-2xl text-white/65">Many homeowners qualify for solar with little or no upfront cost, making it easier to move from interest to action.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold">$0 Down Solar</h3>
              <p className="mt-3 text-white/65">Start with little or no upfront cost depending on financing approval and project structure.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold">Predictable Savings</h3>
              <p className="mt-3 text-white/65">Replace high monthly utility costs with a more controlled energy plan.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold">Tax Incentives</h3>
              <p className="mt-3 text-white/65">Homeowners may qualify for available solar tax incentives and other local opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Reviews</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A trust-building reviews section ready for real Google feedback.</h2>
          <p className="mt-4 text-white/65">Replace these placeholders with real customer reviews later. The section itself already makes the brand feel more complete.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-1 text-cyan-300">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="leading-7 text-white/75">“{review.text}”</p>
              <p className="mt-5 text-sm font-medium text-white/55">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:grid-cols-[1fr_0.95fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A stronger, more modern brand direction for Keystone Solar Power.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/65">
              Keystone Solar Power is positioned as a clean-energy brand with a more premium visual identity, a clearer keystone concept, and a website built to turn interest into actual leads.
            </p>
          </div>
          <div className="grid gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <div className="mt-1 h-3 w-3 rounded-full bg-cyan-300" />
                <p className="text-white/85">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Ready to make Keystone Solar Power look real online?</h2>
              <p className="mt-4 max-w-2xl text-white/70">
                This version is designed to feel more premium, modern, and better aligned with your logo. The next step is publishing it with your real logo file and project photos.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6 backdrop-blur">
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="text-sm text-white/45">Business name</p>
                  <p className="mt-1 text-lg font-medium">Keystone Solar Power</p>
                </div>
                <div>
                  <p className="text-sm text-white/45">Website</p>
                  <p className="mt-1 text-lg font-medium">keystonesolarpower.com</p>
                </div>
                <div>
                  <p className="text-sm text-white/45">Phone</p>
                  <p className="mt-1 text-lg font-medium">763-325-5697</p>
                </div>
                <div>
                  <p className="text-sm text-white/45">Email</p>
                  <p className="mt-1 text-lg font-medium">jabagalata@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-white/45">Service Area</p>
                  <p className="mt-1 text-lg font-medium">Ohio & Minnesota</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-white/45">Quick Quote Request</p>
                  <form className="mt-3 space-y-3">
                    <input className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-sm text-white placeholder:text-white/35" placeholder="Name" />
                    <input className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-sm text-white placeholder:text-white/35" placeholder="Phone" />
                    <input className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-sm text-white placeholder:text-white/35" placeholder="Address" />
                    <button className="w-full rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20">Request Free Solar Quote</button>
                  </form>
                </div>
                <button className="mt-4 w-full rounded-full border border-white/10 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]">
                  Call 763-325-5697 today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
