import { ChatContainer } from "@/components/ChatContainer";
import { Badge } from "@/components/ui/badge";
import { Bot, MessageSquare, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">LeixCode</h1>
                <p className="text-xs text-muted-foreground">Customer Support Portal</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              24/7 Support
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Info Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Bantuan Cepat</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground text-sm">Chat Support</h3>
                    <p className="text-xs text-muted-foreground">Respons instan dari SupportBot</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground text-sm">Keamanan Data</h3>
                    <p className="text-xs text-muted-foreground">Enkripsi end-to-end terjamin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground text-sm">Solusi Cepat</h3>
                    <p className="text-xs text-muted-foreground">Rata-rata 2-4 jam respons</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Topik Populer</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded-lg hover:bg-secondary transition-colors text-sm text-muted-foreground hover:text-foreground">
                  Cara integrasi Google Drive
                </button>
                <button className="w-full text-left p-2 rounded-lg hover:bg-secondary transition-colors text-sm text-muted-foreground hover:text-foreground">
                  Upgrade paket langganan
                </button>
                <button className="w-full text-left p-2 rounded-lg hover:bg-secondary transition-colors text-sm text-muted-foreground hover:text-foreground">
                  Reset password akun
                </button>
                <button className="w-full text-left p-2 rounded-lg hover:bg-secondary transition-colors text-sm text-muted-foreground hover:text-foreground">
                  API documentation
                </button>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <ChatContainer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
