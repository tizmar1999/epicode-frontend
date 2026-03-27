import { useMemo, useState } from "react";

import DsChatBubble from "@workspace/design-system/components/ds-chat-bubble";
import DsChatInput from "@workspace/design-system/components/ds-chat-input";

interface ChatPanelProps {
  onClose?: () => void;
}

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export function ChatPanel({ onClose }: ChatPanelProps) {
  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        id: "m-1",
        role: "assistant",
        text: "Ciao! Posso aiutarti a ripassare la lezione \"Dati 1\" o vuoi un breve riassunto?",
      },
      {
        id: "m-2",
        role: "user",
        text: "Fammi un riassunto veloce, grazie.",
      },
      {
        id: "m-3",
        role: "assistant",
        text: "Nella lezione trovi le basi di data ingestion, pulizia e una panoramica su modelli lineari. Vuoi un esempio pratico o materiale aggiuntivo?",
      },
    ],
    []
  );

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  function handleSend(value: string) {
    setMessages((prev) => [
      ...prev,
      { id: `m-${Date.now()}`, role: "user", text: value },
    ]);
  }

  return (
    <div className="flex h-full flex-col bg-[#0c0d17]">
      <div className="flex items-center gap-2 border-b border-[#1b1e2d] px-4 py-4">
        <i className="fas fa-robot text-[#c03ad8] text-sm" />
        <div className="font-semibold text-sm">AI Tutor</div>
        <button
          className="ml-auto text-[#c03ad8]"
          onClick={onClose}
          type="button"
        >
          <i className="fas fa-chevron-up text-xs" />
        </button>
      </div>

      <div className="scrollbar-hide flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <DsChatBubble key={message.id} variant={message.role}>
            {message.text}
          </DsChatBubble>
        ))}
      </div>

      <div className="border-t border-[#1b1e2d] px-4 py-4">
        <DsChatInput
          className="bg-[#0c0d17]"
          onSend={handleSend}
          placeholder="Scrivi un messaggio..."
        />
      </div>
    </div>
  );
}
