import React, { useEffect, useRef, useState } from "react";
import {
  Circle,
  CornerDownLeft,
  Terminal as TerminalIcon,
  X,
} from "lucide-react";

interface TerminalProps {
  onClose?: () => void;
  setActiveTab?: (tab: string) => void;
  isEmbed?: boolean;
}

const PROMPT = "nishant@portfolio:~$";

const INITIAL_HISTORY = [
  "Nishant Portfolio Terminal v2.0.0",
  "Explore my work, experience, skills, and contact details.",
  "Type 'help' to view the available commands.",
  "",
];

const EXTERNAL_LINKS = {
  github: "https://github.com/nishantmudgal",
  linkedin: "https://www.linkedin.com/in/nishant-mudgal",
  leetcode: "https://leetcode.com/u/nishantmudgal",
  portfolio: "https://nishant-mudgal.vercel.app/",
  resume: "/resume/Nishant_Mudgal_Resume.pdf",
} as const;

export default function Terminal({
  onClose,
  setActiveTab,
  isEmbed = false,
}: TerminalProps) {
  const [history, setHistory] = useState<string[]>(INITIAL_HISTORY);
  const [input, setInput] = useState("");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    // Avoid stealing focus when the terminal is rendered inside the projects page.
    if (!isEmbed) {
      inputRef.current?.focus();
    }
  }, [isEmbed]);

  useEffect(() => {
    if (isEmbed || !onClose) {
      return;
    }

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isEmbed, onClose]);

  const navigateTo = (tab: string, label: string) => {
    if (!setActiveTab) {
      return "Navigation is unavailable in this embedded preview.";
    }

    setActiveTab(tab);
    return `Navigated to ${label}.`;
  };

  const openLink = (url: string) => {
    const openedWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (openedWindow) {
      openedWindow.opener = null;
    }
  };

  const handleCommand = (command: string) => {
    const normalizedCommand = command.trim().toLowerCase().replace(/\s+/g, " ");

    if (!normalizedCommand) {
      return;
    }

    let reply = "";

    switch (normalizedCommand) {
      case "help":
        reply = `Available commands:

  about / whoami       View a short professional introduction
  experience           Review my professional experience
  education            View my academic background
  skills               Explore my technical capabilities
  stack                 Inspect the technology behind this portfolio
  ai                    View my AI-assisted development approach
  projects              List the projects currently featured
  certifications        View verified professional credentials
  impact                Review measurable outcomes from my work
  contact               Display direct contact information
  links                 Show GitHub, LinkedIn, LeetCode, and live portfolio
  status                Check my current connection status
  vitals                View the portfolio performance-audit note
  goto <section>        Navigate to about, projects, experience, blogs, or contact
  open <destination>    Open github, linkedin, leetcode, portfolio, or resume
  clear                 Clear the terminal`;
        break;

      case "about":
      case "whoami":
      case "profile":
        reply = `--- PROFILE ---

Nishant Mudgal
Software Engineer

I have 5+ years of experience building user-focused web applications and
digital platforms. My work focuses on React.js, Next.js, TypeScript,
frontend architecture, reusable design systems, accessibility, performance,
software quality, and production support.

Location: Gurugram, India (UTC+5:30)`;
        break;

      case "experience":
      case "work":
        reply = `--- PROFESSIONAL EXPERIENCE ---

McKinsey & Company — Software Engineer
June 2022 – July 2026
• Built and maintained client-facing web applications used by 5M+ monthly users.
• Modernized React and Next.js implementations and supported template migrations.
• Created reusable design-system components that reduced repeated UI effort by 40%.
• Improved accessibility, performance, security, testing, and production stability.

IDEMIA — Software Engineer
January 2018 – September 2019
• Developed firmware for biometric access-control systems using C++ and Linux.
• Built browser-based interfaces using JavaScript and HTML.
• Debugged device-level issues and improved system reliability.`;
        break;

      case "education":
        reply = `--- EDUCATION ---

M.Tech — Machine Intelligence and Data Analytics
Netaji Subhash University of Technology
September 2020 – June 2022

B.Tech — Computer Science Engineering
Chitkara University
August 2014 – June 2018`;
        break;

      case "skills":
      case "capabilities":
        reply = `--- TECHNICAL CAPABILITIES ---

Languages:
JavaScript, TypeScript, HTML5, CSS3, SCSS, C++, Python, SQL

Frontend:
React.js, Next.js, Redux, responsive UI, design systems, accessibility

APIs & Platforms:
GraphQL, REST APIs, Sitecore CMS, API integration

Testing & Quality:
Jest, React Testing Library, unit testing, Lighthouse, Chrome DevTools

DevOps & Tools:
Git, GitHub Actions, CI/CD, Docker, Storybook

Core Engineering:
Frontend architecture, performance optimization, code splitting,
caching, system design, Agile/Scrum`;
        break;

      case "stack":
      case "portfolio stack":
        reply = `--- PORTFOLIO TECHNOLOGY STACK ---

Framework: React 19
Language: TypeScript
Build Tool: Vite
Styling: Tailwind CSS v4
Animation: Motion
Icons: Lucide React
Deployment: Vercel

Architecture:
Reusable React components, responsive layouts, theme switching,
interactive project demos, and an embedded command terminal.`;
        break;

      case "ai":
      case "ai development":
      case "ai-assisted development":
        reply = `--- AI-ASSISTED DEVELOPMENT ---

Tools:
GitHub Copilot, Cursor, and Claude

Use Cases:
• Code exploration and implementation planning
• Debugging and root-cause analysis
• Refactoring and legacy-code modernization
• Unit-test creation and documentation
• Faster iteration across unfamiliar code paths

Approach:
AI suggestions are reviewed, tested, and validated before implementation.
The goal is to improve engineering productivity without compromising
quality, security, or maintainability.`;
        break;

      case "projects":
        reply = `--- FEATURED PROJECTS ---

1. Interactive Developer Portfolio [DEPLOYED]
   A responsive, terminal-inspired portfolio built with React 19,
   TypeScript, Vite, Tailwind CSS, Motion, reusable components,
   theme switching, and interactive project demonstrations.

Live: nishant-mudgal.vercel.app
Source: github.com/nishantmudgal/Portfolio`;
        break;

      case "certifications":
      case "certification":
      case "certs":
        reply = `--- VERIFIED CREDENTIALS ---

1. AWS Certified AI Practitioner
   Amazon Web Services

2. Microsoft Certified: Azure Fundamentals (AZ-900)
   Microsoft`;
        break;

      case "impact":
      case "outcomes":
      case "metrics":
        reply = `--- SELECTED IMPACT ---

5M+   Monthly users served by supported client-facing platforms
40%   Reduction in repeated UI development effort through reusable components
18%   Improvement in engagement metrics from UI and interaction enhancements
95%+  Test coverage maintained across supported frontend modules`;
        break;

      case "contact":
        reply = `--- CONTACT ---

Email: 3nishantmudgal@gmail.com
Phone: +91 8968774126
Location: Gurugram, India (UTC+5:30)
Status: OPEN TO CONNECT

Use 'open linkedin' or 'open github' to continue the conversation.`;
        break;

      case "links":
        reply = `--- PROFESSIONAL LINKS ---

GitHub:   github.com/nishantmudgal
LinkedIn: linkedin.com/in/nishant-mudgal
LeetCode: leetcode.com/u/nishantmudgal
Portfolio: nishant-mudgal.vercel.app

Use 'open <destination>' to launch a link.`;
        break;

      case "status":
        reply = `--- CURRENT STATUS ---

Connection Status: OPEN TO CONNECT
Location: Gurugram, India
Open Protocols: Job opportunities, collaborations, and technical discussions
Preferred Focus: Frontend engineering, web platforms, and full-stack development`;
        break;

      case "vitals":
        reply = `--- PERFORMANCE AUDIT NOTE ---

This terminal does not display hard-coded Lighthouse or Core Web Vitals scores.
For an accurate result, run a fresh Lighthouse audit against:

https://nishant-mudgal.vercel.app/

This keeps performance claims current and independently verifiable.`;
        break;

      case "resume":
      case "open resume":
      case "download resume":
        reply = "Opening Nishant Mudgal's resume in a new tab...";
        openLink(EXTERNAL_LINKS.resume);
        break;

      case "open github":
        reply = "Opening GitHub...";
        openLink(EXTERNAL_LINKS.github);
        break;

      case "open linkedin":
        reply = "Opening LinkedIn...";
        openLink(EXTERNAL_LINKS.linkedin);
        break;

      case "open leetcode":
        reply = "Opening LeetCode...";
        openLink(EXTERNAL_LINKS.leetcode);
        break;

      case "open portfolio":
      case "open live":
        reply = "Opening the deployed portfolio...";
        openLink(EXTERNAL_LINKS.portfolio);
        break;

      case "goto about":
      case "goto core":
      case "goto skills":
      case "goto education":
        reply = navigateTo("about", "Core");
        break;

      case "goto projects":
      case "goto artifacts":
        reply = navigateTo("projects", "Projects");
        break;

      case "goto experience":
      case "goto timeline":
        reply = navigateTo("experience", "Professional Timeline");
        break;

      case "goto blogs":
      case "goto certifications":
      case "goto certs":
        reply = navigateTo("blogs", "Blogs & Certifications");
        break;

      case "goto contact":
      case "goto connect":
        reply = navigateTo("contact", "Let's Connect");
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        if (normalizedCommand.startsWith("goto ")) {
          const target = normalizedCommand.slice(5);
          reply = `Unknown section "${target}". Try: about, projects, experience, blogs, or contact.`;
        } else if (normalizedCommand.startsWith("open ")) {
          const target = normalizedCommand.slice(5);
          reply = `Unknown destination "${target}". Try: github, linkedin, leetcode, portfolio, or resume.`;
        } else {
          reply = `Command not found: "${normalizedCommand}". Type "help" to view available commands.`;
        }
    }

    setHistory((previousHistory) => [
      ...previousHistory,
      `${PROMPT} ${command}`,
      reply,
      "",
    ]);
    setInput("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleCommand(input);
    }
  };

  const renderHistoryLine = (line: string, index: number) => {
    const isPrompt = line.startsWith(PROMPT);
    const isHeading =
      line.startsWith("---") || line.startsWith("Available commands:");
    const isSuccess =
      line.includes("OPEN TO CONNECT") ||
      line.includes("[DEPLOYED]") ||
      line.includes("Opening ");
    const isError =
      line.startsWith("Command not found") ||
      line.startsWith("Unknown ") ||
      line.startsWith("Navigation is unavailable");

    return (
      <div
        key={`${index}-${line}`}
        className="whitespace-pre-wrap leading-relaxed"
      >
        {isPrompt ? (
          <span className="text-primary font-semibold">{line}</span>
        ) : isHeading ? (
          <span className="text-secondary">{line}</span>
        ) : isSuccess ? (
          <span className="text-tertiary">{line}</span>
        ) : isError ? (
          <span className="text-error">{line}</span>
        ) : (
          line
        )}
      </div>
    );
  };

  const terminalPanel = (
    <div
      className={`w-full bg-surface-container border border-outline-variant/60 overflow-hidden flex flex-col font-mono ${isEmbed
          ? "h-[420px] rounded-xl shadow-sm"
          : "max-w-2xl h-[440px] rounded-lg shadow-2xl"
        }`}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex justify-between items-center bg-surface-container-high px-4 py-2 border-b border-outline-variant/60">
        <div className="flex items-center gap-1.5">
          <Circle
            size={10}
            className="fill-error/85 stroke-error/85 text-error"
          />
          <Circle
            size={10}
            className="fill-secondary/85 stroke-secondary/85 text-secondary"
          />
          <Circle
            size={10}
            className="fill-tertiary/85 stroke-tertiary/85 text-tertiary"
          />

          <span className="text-xs text-on-surface-variant font-medium ml-2 flex items-center gap-1">
            <TerminalIcon size={12} />
            nishant@portfolio:~
          </span>
        </div>

        {isEmbed ? (
          <span className="text-[9px] font-mono text-outline uppercase font-semibold">
            INTERACTIVE_PROFILE
          </span>
        ) : (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose?.();
            }}
            className="text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none p-1"
            aria-label="Close terminal"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <div
        ref={containerRef}
        className="p-4 flex-1 overflow-y-auto space-y-1.5 text-xs text-on-surface-variant text-left"
        aria-live="polite"
      >
        {history.map(renderHistoryLine)}
      </div>

      <div className="flex items-center bg-surface-container-low border-t border-outline-variant/60 px-4 py-2.5">
        <span className="text-primary text-xs font-semibold shrink-0 mr-1.5">
          {PROMPT}
        </span>

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none text-xs font-mono text-on-surface outline-none flex-1 focus:ring-0 focus:outline-none p-0"
          placeholder="Type 'help' and press Enter..."
          aria-label="Portfolio terminal command"
          autoComplete="off"
          spellCheck={false}
        />

        <CornerDownLeft
          size={12}
          className="text-outline shrink-0 ml-1.5"
        />
      </div>
    </div>
  );

  if (isEmbed) {
    return terminalPanel;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md font-mono">
      {terminalPanel}
    </div>
  );
}