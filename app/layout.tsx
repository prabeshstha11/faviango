import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "faviango",
    description:
        "Faviango is a user-friendly online tool designed to help you easily convert any image into a favicon. Favicons are the small icons displayed in browser tabs, bookmarks, and website addresses, helping to enhance your site's branding and recognition.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
