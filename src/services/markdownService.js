const CACHE_PREFIX = "md_cache_";

/**
 * Loads a markdown file from the public/content folder.
 * Falls back to localStorage cache if the request fails.
 * @param {string} fileName - e.g. "about", "experience"
 * @returns {Promise<string>} raw markdown content
 */
export async function loadMarkdown(fileName) {
  const url = `${process.env.PUBLIC_URL}/content/${fileName}.md`;
  const cacheKey = `${CACHE_PREFIX}${fileName}`;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    try { localStorage.setItem(cacheKey, text); } catch (_) {}
    return text;
  } catch (err) {
    console.warn(`[markdownService] Failed to load "${fileName}", using cache.`, err);
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;
    return "";
  }
}
