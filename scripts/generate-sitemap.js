import { writeFile } from 'node:fs/promises'
import process from 'node:process'

const configuredUrl = process.env.SITE_URL
  || process.env.URL
  || process.env.DEPLOY_PRIME_URL
  || process.env.DEPLOY_URL

if (!configuredUrl) {
  console.warn('Skipping sitemap generation: set SITE_URL for local builds. Netlify provides URL during deployment.')
  process.exit(0)
}

let siteOrigin
try {
  siteOrigin = new URL(configuredUrl).origin
} catch {
  console.error('Sitemap generation failed: SITE_URL must be an absolute URL.')
  process.exit(1)
}

const paths = ['/', '/about', '/services', '/contact']
const urls = paths.map((path) => `  <url><loc>${siteOrigin}${path}</loc></url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
const robots = `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`

await Promise.all([
  writeFile('dist/sitemap.xml', sitemap),
  writeFile('dist/robots.txt', robots),
])