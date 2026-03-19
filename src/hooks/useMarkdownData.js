import { useState, useEffect } from "react";
import { loadMarkdown } from "../services/markdownService";

/**
 * Hook that loads a markdown file and parses it with the provided parser.
 * @param {string} fileName - content file name without extension
 * @param {Function} parser - function that receives raw md and returns parsed data
 * @param {*} initialValue - initial state value before data loads
 */
export function useMarkdownData(fileName, parser, initialValue) {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    loadMarkdown(fileName).then((md) => {
      if (!cancelled && md) setData(parser(md));
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [fileName, parser]);

  return { data, loading };
}
