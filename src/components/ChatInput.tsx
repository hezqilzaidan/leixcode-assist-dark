import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t border-border bg-card">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ketik pertanyaan Anda tentang LeixCode..."
        disabled={disabled}
        className="flex-1 bg-[hsl(var(--chat-input-bg))] border-border text-foreground placeholder:text-muted-foreground"
      />
      <Button 
        type="submit" 
        disabled={!message.trim() || disabled}
        className="px-4 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
};