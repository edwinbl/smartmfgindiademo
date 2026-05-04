import { MessageCircle } from "lucide-react";

export const WireChatbotFAB = () => {
  return (
    <button
      aria-label="Open Smart Manufacturing Assistant"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 h-12 px-4 rounded-full border border-foreground bg-background text-foreground shadow-md hover:bg-secondary transition-colors"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="text-sm font-medium hidden sm:inline">Assistant</span>
    </button>
  );
};
