import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp?: string;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex gap-3 mb-4 chat-message",
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <Bot className="w-4 h-4 text-foreground" />
        </div>
      )}
      
      <div className={cn(
        "max-w-[70%] px-4 py-3 rounded-xl",
        isBot 
          ? "bg-secondary text-foreground" 
          : "bg-[hsl(var(--chat-user-bg))] border border-[hsl(var(--chat-user-border))] text-foreground"
      )}>
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {message}
        </div>
        {timestamp && (
          <div className="text-xs text-muted-foreground mt-1 opacity-60">
            {timestamp}
          </div>
        )}
      </div>

      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};