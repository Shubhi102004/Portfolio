import { Outfit, Ovo} from "next/font/google";
import "./globals.css";
import GradientBackground from "../components/GradientBackground";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Shubhi Shrivastava",
  description: "Full Stack Developer From Bhopal, India specializing in Frontend, Backend, and Full Stack Development with expertise in Modern Web Technologies and Open Source Contributions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
        suppressHydrationWarning
      >
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}
