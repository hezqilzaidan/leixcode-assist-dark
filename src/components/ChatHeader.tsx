import { Badge } from "@/components/ui/badge";
import { Bot, Settings } from "lucide-react";

export const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border bg-card">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <Bot className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <h2 className="font-semibold text-foreground">SupportBot</h2>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
              Online
            </Badge>
            <span className="text-xs text-muted-foreground">LeixCode Assistant</span>
          </div>
        </div>
      </div>
      
      <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
        <Settings className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
};