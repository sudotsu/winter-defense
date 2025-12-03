import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Setup File Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This points to src/data/locations.json assuming this script is in /scripts folder
const LOCATIONS_DATA_PATH = path.join(__dirname, '../src/data/locations.json');
const PUBLIC_SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const BASE_URL = 'https://omahatreecare.com';

console.log('📖 Reading location data from:', LOCATIONS_DATA_PATH);

try {
  // 2. Read the Data
  const rawData = fs.readFileSync(LOCATIONS_DATA_PATH, 'utf-8');
  const locationsData = JSON.parse(rawData);

  // 3. Define Static Pages (The main menu items)
  const staticPages = [
    '',
    '/tools',
    '/emergency-tree-service-omaha',
    '/tree-consultation-omaha'
  ];

  // 4. Start Building XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Helper to append URL blocks
  const addUrl = (urlPath, priority = '0.8', freq = 'weekly') => {
    const date = new Date().toISOString().split('T')[0];
    xml += `
  <url>
    <loc>${BASE_URL}${urlPath}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  };

  // 5. Add Static Pages
  console.log('⚙️  Processing static pages...');
  staticPages.forEach(page => addUrl(page, '1.0'));

  // 6. Add Dynamic Location Pages
  console.log('🌍 Processing location pages...');
  let locationCount = 0;

  Object.keys(locationsData).forEach(city => {
    // Add City Hub (e.g., /locations/omaha)
    addUrl(`/locations/${city}`, '0.9');
    locationCount++;

    // Add Neighborhoods (e.g., /locations/omaha/dundee)
    const neighborhoods = locationsData[city];
    neighborhoods.forEach(hood => {
      addUrl(`/locations/${city}/${hood}`, '0.8');
      locationCount++;
    });
  });

  // 7. Close and Write File
  xml += `
</urlset>`;

  fs.writeFileSync(PUBLIC_SITEMAP_PATH, xml);
  console.log(`\n✅ Success! Generated sitemap with ${staticPages.length + locationCount} URLs.`);
  console.log(`📍 Saved to: ${PUBLIC_SITEMAP_PATH}`);

} catch (error) {
  console.error('\n❌ Error generating sitemap:', error.message);
  console.error('Check that src/data/locations.json exists and is valid JSON.');
}