import { cities } from "@/data/cities";

// Simple normalized projection of the 7 service-area towns for a minimal line-map motif.
// Longitude/latitude mapped to a 0-100 viewBox, roughly preserving relative position.
function project(lat: number, lng: number) {
  const minLat = 41.24, maxLat = 41.54;
  const minLng = -83.13, maxLng = -82.61;
  const x = ((lng - minLng) / (maxLng - minLng)) * 100;
  const y = 100 - ((lat - minLat) / (maxLat - minLat)) * 100;
  return { x, y };
}

export default function ServiceAreaMap({
  variant = "hero",
}: {
  variant?: "hero" | "footer";
}) {
  const points = cities.map((c) => ({ ...project(c.lat, c.lng), name: c.name }));
  const stroke = variant === "hero" ? "#FFFFFF" : "#A98B5D";

  return (
    <svg
      viewBox="-10 -10 120 120"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* connecting lines between nearby towns to suggest a service web, not a literal route */}
      {points.map((p, i) =>
        points.slice(i + 1).map((q, j) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist > 55) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={p.x}
              y1={p.y}
              x2={q.x}
              y2={q.y}
              stroke={stroke}
              strokeWidth="0.3"
              strokeDasharray="1000"
              className="animate-draw-line"
            />
          );
        })
      )}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.1" fill={stroke} />
      ))}
    </svg>
  );
}
