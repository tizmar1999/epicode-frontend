export function TopBar() {
  return (
    <div className="flex items-center justify-between px-10 pt-6">
      <div className="w-[360px]">
        <div className="relative">
          <input
            className="w-full rounded-lg border border-[#1e2133] bg-[#121421] px-4 py-2 pl-10 text-[#cfd3e3] text-sm focus:outline-none"
            placeholder="Search in course"
          />
          <i className="fas fa-search absolute top-3 left-3 text-[#6d7286] text-sm" />
          <span className="absolute top-2.5 right-3 rounded border border-[#2d3146] bg-[#1b1e2b] px-2 py-0.5 text-[#aeb3c4] text-xs">
            ⌘K
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[#9aa0b4]">
        <div className="relative">
          <i className="fas fa-bell" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff4d6d] text-[10px] text-white">
            1
          </span>
        </div>
        <i className="fas fa-user" />
      </div>
    </div>
  );
}
