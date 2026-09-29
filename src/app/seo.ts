import type { Metadata } from "next";

export const siteUrl = "https://mamadentalclinic.com";
export const defaultOgImage = "/images/logo.webp";

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "MAMA Dental Clinic & Orthodontic Centre", locale: "en_IN", type: "website", images: [{ url: defaultOgImage, width: 500, height: 500, alt: "MAMA Dental Clinic & Orthodontic Centre" }] },
    twitter: { card: "summary_large_image", title, description, images: [defaultOgImage] },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, position) => ({ "@type": "ListItem", position: position + 1, name: item.name, item: `${siteUrl}${item.path}` })) };
}
