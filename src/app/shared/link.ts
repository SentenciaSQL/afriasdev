export function splitLink(url: string): { path: string; query: Record<string, string> } {
  const [path, search = ''] = url.split('?');
  const query: Record<string, string> = {};
  if (search) {
    for (const part of search.split('&')) {
      const [key, value = ''] = part.split('=');
      if (key) query[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  }
  return { path, query };
}
