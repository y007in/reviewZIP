import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    if (process.env.NEXT_PUBLIC_APP_ENV !== "production") {
        return { rules: { userAgent: "*", disallow: "/" } };
    }
    return { rules: { userAgent: "*", allow: "/" } };
}