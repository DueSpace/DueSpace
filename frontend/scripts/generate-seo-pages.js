import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

const pages = [
  {
    path: "/",
    title: "DueSpace - Structured Product Teams & Execution Engine for Startups",
    description:
      "Connect with high-performing African tech & creative talent. DueSpace builds structured product teams in Labs & Studios to turn startup ideas into production-ready digital products.",
    keywords:
      "DueSpace, African Tech Talent, Startup Execution Engine, Product Teams, Web Development, UI UX Design, Software Engineering, MVP Building",
    url: "https://duespace.com/",
    image: "https://duespace.com/Logo.jpg",
    type: "website",
  },
  {
    path: "/our-story",
    title: "Our Story | DueSpace - Bridging Talent and Startup Execution",
    description:
      "Discover how DueSpace was born to bridge the gap between African tech professionals and founders needing execution partners. Learn about our origin, mission, core beliefs, Labs, and Studios.",
    keywords:
      "DueSpace Story, Desire Levi, African Tech Ecosystem, Startup Founders, Tech Talent Africa, DueSpace Labs, DueSpace Studios",
    url: "https://duespace.com/our-story",
    image: "https://duespace.com/Logo.jpg",
    type: "article",
  },
  {
    path: "/get-in-touch",
    title: "Get In Touch | DueSpace - Connect with Our Ecosystem",
    description:
      "Ready to start a new project brief or join the DueSpace talent network? Connect with our team for technical execution, creative design, or ecosystem opportunities.",
    keywords:
      "Contact DueSpace, Start a Project, Join DueSpace Network, Creative Talent, Tech Consulting, Africa Tech Partner",
    url: "https://duespace.com/get-in-touch",
    image: "https://duespace.com/Logo.jpg",
    type: "website",
  },
  {
    path: "/services",
    title: "Our Services | DueSpace Labs & DueSpace Studios Capabilities",
    description:
      "Discover what DueSpace Labs and DueSpace Studios ship: web applications, product MVPs, UI/UX design, brand identity, motion graphics, and video production in structured sprints.",
    keywords:
      "DueSpace Services, DueSpace Labs, DueSpace Studios, Web Applications, Product MVPs, UI UX Design, Brand Identity",
    url: "https://duespace.com/services",
    image: "https://duespace.com/Logo.jpg",
    type: "website",
  },
  {
    path: "/community",
    title: "Meet Our Builders | DueSpace Community",
    description:
      "Meet the developers, UI/UX designers, product managers, and growth strategists building real-world digital products inside the DueSpace community.",
    keywords:
      "DueSpace Builders, DueSpace Community, Tech Talent Directory, African Developers, UI UX Designers, Product Managers",
    url: "https://duespace.com/community",
    image: "https://duespace.com/Logo.jpg",
    type: "website",
  },
];

function generateSeoPages() {
  if (!fs.existsSync(templatePath)) {
    console.error("Error: dist/index.html not found. Run vite build first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");

  pages.forEach((page) => {
    let html = template;

    // Replace Title
    html = html.replace(
      /<title>.*?<\/title>/gi,
      `<title>${page.title}</title>`
    );

    // Replace Standard Meta Tags
    html = html.replace(
      /<meta name="description" content=".*?" \/>/gi,
      `<meta name="description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta name="keywords" content=".*?" \/>/gi,
      `<meta name="keywords" content="${page.keywords}" />`
    );

    // Replace Open Graph Tags
    html = html.replace(
      /<meta property="og:title" content=".*?" \/>/gi,
      `<meta property="og:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/gi,
      `<meta property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta property="og:image" content=".*?" \/>/gi,
      `<meta property="og:image" content="${page.image}" />`
    );
    html = html.replace(
      /<meta property="og:url" content=".*?" \/>/gi,
      `<meta property="og:url" content="${page.url}" />`
    );
    html = html.replace(
      /<meta property="og:type" content=".*?" \/>/gi,
      `<meta property="og:type" content="${page.type}" />`
    );

    // Replace Twitter Tags
    html = html.replace(
      /<meta name="twitter:title" content=".*?" \/>/gi,
      `<meta name="twitter:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?" \/>/gi,
      `<meta name="twitter:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta name="twitter:image" content=".*?" \/>/gi,
      `<meta name="twitter:image" content="${page.image}" />`
    );

    if (page.path === "/") {
      // Overwrite dist/index.html with homepage tags
      fs.writeFileSync(templatePath, html, "utf-8");
      console.log("Generated SEO HTML for: / (dist/index.html)");
    } else {
      // Create subfolder e.g. dist/our-story/index.html
      const pageDir = path.join(distDir, page.path.replace(/^\//, ""));
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      const pageFilePath = path.join(pageDir, "index.html");
      fs.writeFileSync(pageFilePath, html, "utf-8");
      console.log(`Generated SEO HTML for: ${page.path} (${pageFilePath})`);
    }
  });

  console.log("SEO HTML generation completed successfully!");
}

generateSeoPages();
