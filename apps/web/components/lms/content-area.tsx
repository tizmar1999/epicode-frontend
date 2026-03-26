import type { Lesson } from "@/lib/mock-data"

type ContentAreaProps = {
  lesson: Lesson | undefined
}

export function ContentArea({ lesson }: ContentAreaProps) {
  return (
    <main className="flex flex-col bg-[#0b0c15]">
      <div className="px-10 pt-4">
        <h1 className="text-2xl font-semibold text-white">{lesson?.title ?? "Dati 1"}</h1>
      </div>

      <div className="px-10 pt-6 pb-8">
        <div className="relative w-[820px] h-[420px] rounded-xl border border-[#1d2132] overflow-hidden bg-[#0c0f1f]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://replicate.delivery/xezq/pxe1AjgYmzxxMSFQNm0wueKbt7jidAHUvOEESMmR1irgu0UWA/out.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c0f1f] via-[#0c0f1f] to-transparent opacity-70" />
          <div className="relative z-10 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-7 h-7">
                  <span className="absolute w-4 h-4 bg-[#c029d6] skew-x-[-20deg] -left-0"></span>
                  <span className="absolute w-4 h-4 bg-[#8b2dff] skew-x-[-20deg] left-2 top-2"></span>
                  <span className="absolute w-4 h-4 bg-[#ff4da6] skew-x-[-20deg] left-1 top-4"></span>
                </div>
                <div className="text-xl font-bold tracking-wide">EPICODE</div>
              </div>
              <button className="bg-white text-[#1b1e2b] text-xs font-semibold px-4 py-2 rounded-md shadow">
                Dati 1 &nbsp; PDF
              </button>
            </div>
            <div className="mt-28">
              <div className="text-3xl font-semibold leading-tight">
                Introduzione al mondo dei
                <br />
                Dati
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-10 right-10">
            <div className="h-2 bg-white rounded-full relative">
              <div className="absolute left-0 top-0 h-2 w-6 bg-[#f65f5f] rounded-full"></div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-6 h-4 bg-[#d8dbe6] rounded-full border border-[#c5c8d8]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
