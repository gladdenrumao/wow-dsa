import "@/styles/globals.css";
import Footer from "@/components/Footer"; // Import Footer
import { Analytics } from '@vercel/analytics/react'; // Import Vercel Analytics

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Component {...pageProps} />
      <Footer />
      <Analytics /> {/* ✅ Add Analytics at the bottom */}
    </div>
  );
}
