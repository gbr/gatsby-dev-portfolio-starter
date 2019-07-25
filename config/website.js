const tailwind = require("../tailwind");

/* 
  TODO
  2. Use the tailwind.js file to configure TailwindCSS.
    - The Tailwind documentation explains it step-by-step.
  3. Modify the files in the src/styles directory.
    - Customize animations and main foreground and background colors
  4. Modify the sections in the src/views directory. They contain the Dividers & SVG icons.
    - Change the gradient boxes to actually match the theme and maintain a legible contrast on all sides
    - Remove the copyright once the theme is sufficiently different
  5. Place the icons somewhere else on the page, modify their animation and hide them on smaller screens (see GitHub page)
    - Change the icons into PSX icons only (and change the logo into an outline X)
*/

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Glenn Ryan's Dev Portfolio", // Navigation and Site Title
  siteTitleAlt: "Glenn Ryan", // Alternative Site title for SEO
  siteTitleShort: "GlennR", // short_name for manifest
  siteHeadline: "UI Engineer with a keen eye", // Headline for schema.org JSONLD
  siteUrl: "https://glennr.dev", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo-black.png", // Used for SEO and manifest
  siteDescription:
    "Glenn Ryan's portfolio site for demo apps and visualizations",
  author: "@gbr", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@glennthepen", // Twitter Username
  //   ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-74357056-3",

  // Manifest and Progress color
  themeColor: tailwind.colors.purple,
  backgroundColor: tailwind.colors.blue
};
