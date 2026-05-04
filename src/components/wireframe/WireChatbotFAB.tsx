import { MessageCircle } from "lucide-react";

export const WireChatbotFAB = () => {
  return (
    <a
      href="#chatbot"
      aria-label="Open Smart Manufacturing Assistant"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 h-12 px-5 rounded-full text-white font-semibold text-sm shadow-2xl transition-transform hover:scale-105"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--navy-800)) 0%, hsl(var(--navy-600)) 100%)",
        boxShadow: "0 14px 36px hsl(var(--navy-900) / 0.35)",
      }}
    >
      <span className="relative grid place-items-center h-7 w-7 rounded-full bg-cii-orange">
        <MessageCircle className="h-4 w-4 text-white" />
        <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cii-red border-2 border-white" />
      </span>
      <span className="hidden sm:inline">Ask the Assistant</span>
    </a>
  );
};
