const CDN_BASE = "https://raw.githubusercontent.com/felipebabel/portfolio-refactor/main/content";
const CACHE_PREFIX = "md_cache_";

/**
 * Loads a markdown file from GitHub raw content.
 * Falls back to localStorage cache if the request fails.
 * @param {string} fileName - e.g. "about", "experience"
 * @returns {Promise<string>} raw markdown content
 */
export async function loadMarkdown(fileName) {
  // cache-busting por hora: atualiza a cada 1h sem precisar de purge manual
  const bust = Math.floor(Date.now() / (1000 * 60 * 60));
  const url = `${CDN_BASE}/${fileName}.md?v=${bust}`;
  const cacheKey = `${CACHE_PREFIX}${fileName}`;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    try { localStorage.setItem(cacheKey, text); } catch (_) {}
    return text;
  } catch (err) {
    console.warn(`[markdownService] CDN failed for "${fileName}", using cache.`, err);
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;
    return "";
  }
}
