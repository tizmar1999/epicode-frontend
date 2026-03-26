import type { Lesson } from "@/lib/mock-data";

interface ContentAreaProps {
  lesson: Lesson | undefined;
}

export function ContentArea({ lesson }: ContentAreaProps) {
  return (
    <main className="flex flex-col bg-[#0b0c15]">
      <div className="px-10 pt-4">
        <h1 className="font-semibold text-2xl text-white">
          {lesson?.title ?? "Dati 1"}
        </h1>
      </div>

      <div className="px-10 pt-6 pb-8">
        <div className="relative h-[420px] w-[820px] overflow-hidden rounded-xl border border-[#1d2132] bg-[#0c0f1f]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://replicate.delivery/xezq/pxe1AjgYmzxxMSFQNm0wueKbt7jidAHUvOEESMmR1irgu0UWA/out.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c0f1f] via-[#0c0f1f] to-transparent opacity-70" />
          <div className="relative z-10 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-7 w-7">
                  <span className="absolute -left-0 h-4 w-4 skew-x-[-20deg] bg-[#c029d6]" />
                  <span className="absolute top-2 left-2 h-4 w-4 skew-x-[-20deg] bg-[#8b2dff]" />
                  <span className="absolute top-4 left-1 h-4 w-4 skew-x-[-20deg] bg-[#ff4da6]" />
                </div>
                <div className="font-bold text-xl tracking-wide">EPICODE</div>
              </div>
              <button
                className="rounded-md bg-white px-4 py-2 font-semibold text-[#1b1e2b] text-xs shadow"
                type="button"
              >
                Dati 1 &nbsp; PDF
              </button>
            </div>
            <div className="mt-28">
              <div className="font-semibold text-3xl leading-tight">
                Introduzione al mondo dei
                <br />
                Dati
              </div>
            </div>
          </div>
          <div className="absolute right-10 bottom-6 left-10">
            <div className="relative h-2 rounded-full bg-white">
              <div className="absolute top-0 left-0 h-2 w-6 rounded-full bg-[#f65f5f]" />
              <div className="absolute -top-1 left-1/2 h-4 w-6 -translate-x-1/2 rounded-full border border-[#c5c8d8] bg-[#d8dbe6]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
