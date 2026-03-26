import DsChatBubble from "@workspace/design-system/components/ds-chat-bubble"
import DsChatInput from "@workspace/design-system/components/ds-chat-input"

export function ChatPanel() {
  function handleSend(val: string) {
    console.log("Send message:", val)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-medium">Comments</span>
        <span className="text-lg leading-none">⋯</span>
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
