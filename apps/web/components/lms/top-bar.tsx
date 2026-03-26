export function TopBar() {
  return (
    <div className="flex items-center justify-between px-10 pt-6">
      <div className="w-[360px]">
        <div className="relative">
          <input
            className="w-full bg-[#121421] border border-[#1e2133] rounded-lg px-4 py-2 pl-10 text-sm text-[#cfd3e3] focus:outline-none"
            placeholder="Search in course"
          />
          <i className="fas fa-search absolute left-3 top-3 text-[#6d7286] text-sm" />
          <span className="absolute right-3 top-2.5 text-xs bg-[#1b1e2b] border border-[#2d3146] text-[#aeb3c4] px-2 py-0.5 rounded">
            ⌘K
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[#9aa0b4]">
        <div className="relative">
          <i className="fas fa-bell" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff4d6d] text-[10px] rounded-full flex items-center justify-center text-white">
            1
          </span>
        </div>
        <i className="fas fa-user" />
      </div>
    </div>
  )
}
