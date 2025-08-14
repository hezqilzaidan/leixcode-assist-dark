import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 mb-4 chat-message">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
        <Bot className="w-4 h-4 text-foreground" />
      </div>
      
      <div className="bg-secondary text-foreground px-4 py-3 rounded-xl">
        <div className="flex items-center gap-1">
          <span className="text-sm text-muted-foreground">SupportBot sedang mengetik</span>
          <div className="flex gap-1 ml-2">
            <span className="typing-indicator text-xs">•</span>
            <span className="typing-indicator text-xs" style={{ animationDelay: '0.2s' }}>•</span>
            <span className="typing-indicator text-xs" style={{ animationDelay: '0.4s' }}>•</span>
          </div>
        </div>
      </div>
    </div>
  );
};