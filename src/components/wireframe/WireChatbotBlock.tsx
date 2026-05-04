import { WireSection } from "./WireSection";

const prompts = [
  "What is the readiness assessment?",
  "Show me programmes for MSMEs",
  "Find case studies on traceability",
  "What resources are available on Industry 4.0?",
];

export const WireChatbotBlock = () => {
  return (
    <WireSection id="chatbot" tag="Section 8 — Chatbot prompt block">
      <div className="border border-border rounded-sm p-6 md:p-8 bg-secondary/40">
        <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
          Ask the Smart Manufacturing Assistant
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl">
          Try one of these example questions to navigate the portal.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {prompts.map((p) => (
            <li key={p}>
              <button className="wire-chip hover:bg-background transition-colors">
                {p}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Ask a question…"
            className="flex-1 h-11 px-4 text-sm border border-border bg-background rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="wire-cta-primary h-11">Ask</button>
        </div>
      </div>
    </WireSection>
  );
};
