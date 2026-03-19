/**
 * Parses experience.md into an array of experience objects.
 * Sections are separated by "---"
 */
export function parseExperiences(md) {
  return md
    .split(/\n---\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, idx) => {
      const lines = block.split("\n");
      const role = lines[0]?.replace(/^##\s*/, "").trim();
      const period = extractMeta(block, "period");
      const logo = extractMeta(block, "logo");
      const logoAlt = extractMeta(block, "logoAlt");

      // description: first non-meta paragraph after the meta lines
      const descStart = lines.findIndex((l) => l.startsWith("**period:**")) + 3;
      const descLines = [];
      for (let i = descStart; i < lines.length; i++) {
        if (lines[i].startsWith("###")) break;
        if (lines[i].trim()) descLines.push(lines[i].trim());
      }
      const description = descLines.join(" ");

      // highlights: bullet items under "### Key Highlights"
      const highlightsMatch = block.match(/### Key Highlights\n([\s\S]*?)$/);
      const highlights = highlightsMatch
        ? highlightsMatch[1]
            .split("\n")
            .filter((l) => l.startsWith("- "))
            .map((l) => {
              const inner = l.replace(/^- /, "");
              const match = inner.match(/\*\*(.+?):\*\*\s*(.*)/);
              return match
                ? { title: match[1] + ":", text: match[2] }
                : { title: "", text: inner };
            })
        : [];

      return { id: idx + 1, role, period, description, highlights, logoSrc: logo, logoAlt };
    });
}

/**
 * Parses about.md into an array of paragraph strings.
 */
export function parseAbout(md) {
  return md
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/**
 * Parses skills.md into an array of skill objects.
 */
export function parseSkills(md) {
  return md
    .split("\n")
    .filter((l) => l.startsWith("- "))
    .map((l) => {
      const name = extractInline(l, "name");
      const icon = extractInline(l, "icon");
      const img = extractInline(l, "img");
      return img ? { name, img } : { name, icon };
    });
}

/**
 * Parses projects.md into an array of project objects.
 */
export function parseProjects(md) {
  return md
    .split(/\n##\s+/)
    .filter(Boolean)
    .map((block) => {
      const lines = block.split("\n");
      const title = lines[0].trim();
      const image = extractMeta(block, "image");
      const link = extractMeta(block, "link");
      return { title, image, link };
    });
}

// ── helpers ──────────────────────────────────────────────────────────────────

function extractMeta(block, key) {
  const match = block.match(new RegExp(`\\*\\*${key}:\\*\\*\\s*(.+)`));
  return match ? match[1].trim() : "";
}

function extractInline(line, key) {
  const match = line.match(new RegExp(`\\*\\*${key}:\\*\\*\\s*([^|]+)`));
  return match ? match[1].trim() : "";
}
