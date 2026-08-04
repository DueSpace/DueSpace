import { useEffect } from "react";

export const SEO = ({
  title,
  description,
  keywords,
  url = "https://duespace.com",
  image = "/Logo.jpg",
  type = "website",
  author = "DueSpace",
  jsonLd,
}) => {
  const siteTitle = title ? `${title}` : "DueSpace - Structured Product Teams";
  const fullImageUrl = image.startsWith("http")
    ? image
    : `https://duespace.com${image.startsWith("/") ? "" : "/"}${image}`;
  const fullUrl = url.startsWith("http")
    ? url
    : `https://duespace.com${url.startsWith("/") ? "" : "/"}${url}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = siteTitle;

    // Helper to set or update meta tag by selector attribute
    const setMetaTag = (attribute, name, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set or update link tag
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard Meta Tags
    setMetaTag("name", "description", description);
    if (keywords) setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "author", author);
    setMetaTag("name", "robots", "index, follow");

    // Open Graph Tags
    setMetaTag("property", "og:title", siteTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", fullImageUrl);
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:site_name", "DueSpace");

    // Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", siteTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", fullImageUrl);

    // Canonical Link
    setLinkTag("canonical", fullUrl);

    // Structured Data (JSON-LD)
    let scriptTag = document.querySelector("#seo-json-ld");
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("id", "seo-json-ld");
        scriptTag.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [siteTitle, description, keywords, fullUrl, fullImageUrl, type, author, jsonLd]);

  return null;
};

export default SEO;
