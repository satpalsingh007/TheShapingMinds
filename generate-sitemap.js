const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define the base URL for your app
const baseUrl = 'https://www.theshapingmind.in'; // Change to your actual domain or localhost

// Define all the routes in your application
const routes = [
    '/',
    '/about-us',
    '/contact-us',
  '/individuals-blogs',
  '/couples-blogs',
  '/children-blogs',
  '/corporation-blogs',
  '/depression',
  '/anxiety',
  '/stress',
  '/trauma',
  '/personal-growth',
  '/premarital-counselling',
  '/relationship-concerns',
  '/marital-discords',
  '/emotional-concern',
  '/learning-disabilities',
  '/autism',
  '/adhd',
  '/workplace-counselling',
  '/mental-wellness',
  '/employee-assistance-program',
  '/executive-coaching'
];

// Create a stream for the sitemap
const sitemapStream = new SitemapStream({ hostname: baseUrl });

// Convert the routes array to a readable stream
const links = routes.map(route => ({
  url: `${baseUrl}${route}`,
  changefreq: 'monthly', // You can change the frequency based on your content updates
  priority: 0.8 // Set a priority for each page
}));

// Create a readable stream from the links array
const readableStream = Readable.from(links);

// Pipe the stream data into the sitemapStream
readableStream.pipe(sitemapStream);

// Convert the sitemapStream into a promise
streamToPromise(sitemapStream)
  .then((smStream) => {
    // Write the sitemap to a file
    const sitemapPath = path.resolve(__dirname, '../sitemap.xml'); // Save directly in the root of the project

    fs.writeFileSync(sitemapPath, smStream.toString(), 'utf-8');
    console.log('Sitemap will be saved to:', sitemapPath);

  })
  .catch((err) => {
    console.error('Error generating sitemap:', err);
  });
