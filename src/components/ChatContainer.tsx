import { useEffect, useRef } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";
import { useSupportBot } from "@/hooks/useSupportBot";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ChatContainer = () => {
  const { messages, isTyping, sendMessage } = useSupportBot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full max-h-[80vh] bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
      <ChatHeader />
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.message}
              isBot={message.isBot}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
    </div>
  );
};