const DEFAULT_THEME = 'default';

function encodeChart(chart: string): string {
  const payload = JSON.stringify({
    code: chart,
    mermaid: { theme: DEFAULT_THEME },
  });

  if (typeof window === 'undefined') {
    return Buffer.from(payload).toString('base64');
  }

  if (typeof btoa === 'function') {
    return btoa(unescape(encodeURIComponent(payload)));
  }

  // Fallback: best-effort UTF-8 encoding
  return Buffer.from(payload).toString('base64');
}

type MermaidProps = {
  chart: string;
};

export function Mermaid({ chart }: MermaidProps) {
  const encoded = encodeChart(chart);
  const src = `https://mermaid.ink/img/${encoded}?type=svg&scale=2`;

  return (
    <div className="mx-auto my-6 w-full max-w-6xl overflow-auto">
      <img
        src={src}
        alt="Mermaid diagram"
        className="h-auto w-full rounded-lg border border-fd-border bg-fd-card p-4"
        loading="lazy"
      />
    </div>
  );
}
