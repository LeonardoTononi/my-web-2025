// src/routes/sitemap.xml.js
export const prerender = true;

export function get() {
    return {
        body: `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://leonardotononi.com/</loc>
          <changefreq>weekly</changefreq>
          <priority>1.0</priority>
        </url>
      </urlset>
    `,
        headers: {
            'Content-Type': 'application/xml'
        }
    };
}