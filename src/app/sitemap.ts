import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

const paths = ["/", "/about", "/services", "/services/smile-design", "/services/clear-aligners", "/services/veneers", "/services/dental-implants", "/services/dental-jewellery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : path === "/services" ? 0.9 : 0.8 }));
}
