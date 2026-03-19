const CDN_BASE = "https://cdn.jsdelivr.net/gh/felipebabel/portfolio-refactor@main/content";
const CACHE_PREFIX = "md_cache_";

/**
 * Loads a markdown file from jsDelivr CDN.
 * Falls back to localStorage cache if the request fails.
 * @param {string} fileName - e.g. "about", "experience"
 * @returns {Promise<string>} raw markdown content
 */
export async function loadMarkdown(fileName) {
  const url = `${CDN_BASE}/${fileName}.md`;
  const cacheKey = `${CACHE_PREFIX}${fileName}`;

  try {
    const res = await fetch(url, { cache: "force-cache" });
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
