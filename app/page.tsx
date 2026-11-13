import Image from "next/image";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#F8F7F2] text-[#172B3A]">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#C6A66B]/20" />
      <div className="pointer-events-none absolute -right-28 -top-28 h-[350px] w-[350px] rounded-full border border-[#C6A66B]/20" />

      {/* Navbar */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border border-[#B69760] font-serif text-2xl text-[#B69760]">
            R
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.25em]">
              ROSEMARY
            </p>
            <p className="mt-1 text-[9px] tracking-[0.2em] text-[#7D8588]">
              PUBLIC SCHOOL
            </p>
          </div>
        </div>

        <span className="hidden rounded-full border border-[#B69760]/40 px-5 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#8D7146] sm:block">
          WEBSITE COMING SOON
        </span>
      </header>

      {/* Main content */}
      <section className="relative flex flex-1 items-center justify-center px-6 py-20 sm:px-10">

        <div className="mx-auto w-full max-w-5xl text-center">

          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B69760]" />
            <p className="text-[10px] font-semibold tracking-[0.35em] text-[#A08350] sm:text-xs">
              A NEW DIGITAL EXPERIENCE
            </p>
            <span className="h-px w-8 bg-[#B69760]" />
          </div>

          <h1 className="font-serif text-5xl font-normal leading-[1.15] tracking-tight sm:text-7xl lg:text-8xl">
            Every great future
            <br />
            begins with{" "}
            <span className="italic text-[#B69760]">
              learning.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#747D80] sm:text-base">
            Something wonderful is taking shape. We are creating
            a new online experience for Rosemary Public School,
            bringing our school community closer together.
          </p>

          <div className="mx-auto mt-12 flex w-fit flex-col items-center gap-3">
            <div className="h-10 w-px bg-[#B69760]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#8D7146]">
              COMING SOON
            </span>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 border-y border-[#172B3A]/10 py-7 sm:grid-cols-3 sm:gap-8">

            <div>
              <p className="font-serif text-xl">Discover</p>
              <p className="mt-2 text-xs tracking-wide text-[#858C8D]">
                Our school
              </p>
            </div>

            <div className="border-y border-[#172B3A]/10 py-5 sm:border-x sm:border-y-0 sm:py-0">
              <p className="font-serif text-xl">Explore</p>
              <p className="mt-2 text-xs tracking-wide text-[#858C8D]">
                Learning opportunities
              </p>
            </div>

            <div>
              <p className="font-serif text-xl">Connect</p>
              <p className="mt-2 text-xs tracking-wide text-[#858C8D]">
                Our school community
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-7 text-center text-[10px] tracking-wider text-[#858C8D] sm:flex-row sm:px-10 lg:px-16">
        <p>© 2026 Rosemary Public School</p>
        <p>LEARNING TODAY. LEADING TOMORROW.</p>
      </footer>

    </main>
  );
}

