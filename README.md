export async function POST(request: Request) {
  const body = await request.json();
  const idea = String(body.idea || "");

  const startupName = createStartupName(idea);
  const problem = generateProblemSummary(idea);
  const audience = ["Busy homeowners", "Small property managers", "Frequent service users"];
  const market = determineMarket(idea);
  const valueProp = `A faster, more trusted way to discover and book home services without wasting time comparing providers.`;
  const features = [
    "Smart booking flow",
    "Verified service providers",
    "Real-time availability and pricing",
    "Customer reviews and trust scores",
  ];
  const revenueModel = ["Service commission", "Subscription for providers", "Featured listings"]; 
  const stack = ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"];
  const roadmap = [
    "Landing page and onboarding funnel",
    "Provider marketplace and booking flow",
    "Dashboard for service providers",
    "Ratings, payments, and retention engine",
  ];
  const pitch = `This business solves an everyday friction: people want trustworthy home services immediately, without endless searching and uncertainty.`;

  return Response.json({
    name: startupName,
    problem,
    targetAudience: audience,
    market,
    valueProp,
    features,
    revenueModel,
    stack,
    mvpRoadmap: roadmap,
    pitch,
  });
}

function createStartupName(idea: string) {
  const keywords = idea
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3);

  if (keywords.length === 0) return "IdeaPilot";

  const prefix = ["Home", "Launch", "Nest", "Flow", "Pilot", "Luma", "Spark", "Quick", "Trust", "Care"]; 
  const first = keywords[0]?.charAt(0).toUpperCase() + keywords[0]?.slice(1) || "Launch";
  const second = keywords[1] || "Nest";

  return `${prefix[Math.floor(Math.random() * prefix.length)]}${capitalize(second)}`;
}

function generateProblemSummary(idea: string) {
  return `The market has a clear pain point: people want to ${idea.toLowerCase()} but struggle with inconsistency, trust, and speed.`;
}

function determineMarket(idea: string) {
  const lower = idea.toLowerCase();

  if (lower.includes("home") || lower.includes("clean") || lower.includes("repair")) {
    return "Home services and local service marketplace";
  }

  if (lower.includes("food") || lower.includes("delivery") || lower.includes("restaurant")) {
    return "Local food & delivery market";
  }

  if (lower.includes("ai") || lower.includes("agent") || lower.includes("automation")) {
    return "AI workflow and productivity tools";
  }

  return "Consumer and SMB market with clear convenience demand";
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
