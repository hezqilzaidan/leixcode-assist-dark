import { useState } from "react";

export interface ChatMessage {
  id: string;
  message: string;
  isBot: boolean;
  timestamp: string;
}

const SUPPORT_RESPONSES = {
  greeting: "Halo! Saya SupportBot dari LeixCode 👋\n\nSaya siap membantu Anda dengan:\n• Panduan penggunaan fitur\n• Pertanyaan billing & langganan\n• Troubleshooting ringan\n• Integrasi & API\n\nAda yang bisa saya bantu hari ini?",
  
  features: "Berikut fitur utama LeixCode:\n\n1. **Manajemen Proyek** - Buat, edit, dan monitor proyek\n2. **Kolaborasi Tim** - Undang anggota dan atur permission\n3. **Integrasi API** - Hubungkan dengan tools favorit Anda\n4. **Analytics Dashboard** - Laporan performa real-time\n5. **Cloud Storage** - Backup otomatis dan sinkronisasi\n\nMau saya jelaskan fitur yang mana secara detail?",
  
  billing: "Untuk pertanyaan billing:\n\n1. **Upgrade/Downgrade** - Bisa diubah kapan saja di Pengaturan > Billing\n2. **Refund** - Tersedia dalam 30 hari untuk paket premium\n3. **Metode Pembayaran** - Kartu kredit, debit, dan e-wallet\n4. **Invoice** - Otomatis dikirim ke email setiap bulan\n\n📧 Butuh bantuan lebih lanjut? Hubungi billing@leixcode.com",
  
  integration: "Integrasi yang tersedia:\n\n• **Google Drive** - Sinkronisasi file otomatis\n• **Slack** - Notifikasi proyek\n• **GitHub** - Import repository\n• **Trello** - Sync task management\n• **Zapier** - Automasi workflow\n\nPilih Pengaturan > Integrasi untuk mengaktifkan.\nMau panduan step-by-step untuk integrasi tertentu?",
  
  troubleshooting: "Untuk troubleshooting:\n\n1. **Refresh browser** dan clear cache\n2. **Cek koneksi internet** Anda\n3. **Update browser** ke versi terbaru\n4. **Disable extensions** yang mungkin konflik\n\nJika masih bermasalah, beri tahu saya:\n• Browser & versi yang digunakan\n• Pesan error yang muncul\n• Langkah terakhir sebelum error",
  
  contact: "Hubungi tim support kami:\n\n📧 **Email**: support@leixcode.com\n💬 **Live Chat**: Tersedia 24/7 di dashboard\n📞 **Phone**: +62-21-1234-5678 (Senin-Jumat, 09:00-17:00)\n🎫 **Tiket**: Buat tiket di Help Center\n\nRespon time rata-rata: 2-4 jam kerja.",
  
  default: "Maaf, saya belum bisa memahami pertanyaan Anda dengan baik.\n\nCoba tanyakan tentang:\n• Cara menggunakan fitur tertentu\n• Masalah billing atau langganan\n• Troubleshooting teknis\n• Integrasi dengan aplikasi lain\n\nAtau hubungi CS manusia di support@leixcode.com untuk bantuan lebih lanjut."
};

export const useSupportBot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      message: SUPPORT_RESPONSES.greeting,
      isBot: true,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('fitur') || message.includes('feature') || message.includes('fungsi')) {
      return SUPPORT_RESPONSES.features;
    }
    
    if (message.includes('billing') || message.includes('bayar') || message.includes('tagihan') || 
        message.includes('upgrade') || message.includes('langganan') || message.includes('refund')) {
      return SUPPORT_RESPONSES.billing;
    }
    
    if (message.includes('integrasi') || message.includes('api') || message.includes('google drive') ||
        message.includes('slack') || message.includes('github') || message.includes('zapier')) {
      return SUPPORT_RESPONSES.integration;
    }
    
    if (message.includes('error') || message.includes('masalah') || message.includes('tidak bisa') ||
        message.includes('gagal') || message.includes('trouble') || message.includes('bug')) {
      return SUPPORT_RESPONSES.troubleshooting;
    }
    
    if (message.includes('hubungi') || message.includes('kontak') || message.includes('support') ||
        message.includes('bantuan') || message.includes('cs') || message.includes('customer service')) {
      return SUPPORT_RESPONSES.contact;
    }
    
    if (message.includes('halo') || message.includes('hai') || message.includes('hello') ||
        message.includes('help') || message.includes('apa') || message.includes('bisa')) {
      return SUPPORT_RESPONSES.greeting;
    }
    
    return SUPPORT_RESPONSES.default;
  };

  const sendMessage = async (userMessage: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      message: userMessage,
      isBot: false,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate bot thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Add bot response
    const botResponse = generateResponse(userMessage);
    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      message: botResponse,
      isBot: true,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };
    
    setIsTyping(false);
    setMessages(prev => [...prev, botMsg]);
  };

  return {
    messages,
    isTyping,
    sendMessage
  };
};