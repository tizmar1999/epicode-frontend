type ChatPanelProps = {
  onClose?: () => void
}

export function ChatPanel({ onClose }: ChatPanelProps) {
  return (
    <div className="flex h-full flex-col bg-[#0c0d17]">
      <div className="flex items-center gap-2 px-4 py-4 border-b border-[#1b1e2d]">
        <i className="fas fa-users text-[#c03ad8] text-sm" />
        <div className="text-sm font-semibold">Comments</div>
        <button
          type="button"
          className="ml-auto text-[#c03ad8]"
          onClick={onClose}
        >
          <i className="fas fa-chevron-up text-xs" />
        </button>
      </div>
      <div className="p-4 flex-1">
        <textarea
          className="w-full border border-[#2a2e45] rounded-lg h-36 bg-transparent text-sm text-[#d8dbe6] p-3 focus:outline-none"
          placeholder="Leave a comment..."
        />
      </div>
      <div className="px-4 pb-6">
        <button
          className="w-full bg-[#2a2e45] text-[#9aa0b4] py-2 rounded-md text-sm cursor-not-allowed"
          disabled
        >
          Submit
        </button>
      </div>
    </div>
  )
}
