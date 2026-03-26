import DsChatBubble from "@workspace/design-system/components/ds-chat-bubble"
import DsChatInput from "@workspace/design-system/components/ds-chat-input"
import { Users, ChevronUp } from "lucide-react"

export function ChatPanel() {
  function handleSend(val: string) {
    console.log("Send message:", val)
  }

  return (
    <div className="flex h-full flex-col bg-background-secondary">
      <div className="flex items-center gap-2 border-b border-border px-4 py-4">
        <Users className="w-4 h-4 text-[#c03ad8]" />
        <span className="text-sm font-semibold">Comments</span>
        <ChevronUp className="w-3 h-3 text-[#c03ad8] ml-auto" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        <DsChatBubble variant="user">How do I approach this lesson?</DsChatBubble>
        <DsChatBubble variant="assistant">
          Start by reviewing the video and then try the quiz.
        </DsChatBubble>
      </div>

      <div className="border-t border-border px-4 py-3">
        <DsChatInput placeholder="Leave a comment..." onSend={handleSend} />
      </div>
    </div>
  )
}
