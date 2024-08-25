import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { layoutPropTypes } from "@/types";
import { cn } from "@/lib/utils/shadcn";
import Topbar from "@/components/shared/Topbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Code template",
  description: "This is code template website",
};

const RootLayout: React.FC<Readonly<layoutPropTypes>> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "dark min-h-screen w-full overflow-x-hidden bg-background p-4",
          fontSans.variable,
        )}
      >
        <div className="container rounded-lg border bg-card p-4 font-sans shadow-lg">
          <Topbar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
