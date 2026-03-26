interface ChatPanelProps {
  onClose?: () => void;
}

export function ChatPanel({ onClose }: ChatPanelProps) {
  return (
    <div className="flex h-full flex-col bg-[#0c0d17]">
      <div className="flex items-center gap-2 border-[#1b1e2d] border-b px-4 py-4">
        <i className="fas fa-users text-[#c03ad8] text-sm" />
        <div className="font-semibold text-sm">Comments</div>
        <button
          className="ml-auto text-[#c03ad8]"
          onClick={onClose}
          type="button"
        >
          <i className="fas fa-chevron-up text-xs" />
        </button>
      </div>
      <div className="flex-1 p-4">
        <textarea
          className="h-36 w-full rounded-lg border border-[#2a2e45] bg-transparent p-3 text-[#d8dbe6] text-sm focus:outline-none"
          placeholder="Leave a comment..."
        />
      </div>
      <div className="px-4 pb-6">
        <button
          className="w-full cursor-not-allowed rounded-md bg-[#2a2e45] py-2 text-[#9aa0b4] text-sm"
          disabled
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
