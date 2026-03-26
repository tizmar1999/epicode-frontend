import DsButton from "@workspace/design-system/components/ds-button"
import DsInput from "@workspace/design-system/components/ds-input"

export function ChatPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-medium">Comments</span>
        <span className="text-lg leading-none">⋯</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        <div className="flex justify-end">
          <div className="bg-primary text-white px-4 py-2.5 rounded-xl max-w-[70%]">
            How do I approach this lesson?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-muted text-foreground px-4 py-2.5 rounded-xl max-w-[70%]">
            Start by reviewing the video and then try the quiz.
          </div>
        </div>
      </div>

      <div className="border-t border-border px-4 py-3">
        <DsInput placeholder="Leave a comment..." />
        <DsButton className="w-full mt-2 h-11">Send</DsButton>
      </div>
    </div>
  )
}
