import "@/styles/globals.css";
import Footer from "@/components/Footer"; // Import Footer
import Header from "@/components/Header"; // Import Header
import { Analytics } from '@vercel/analytics/react'; // Import Vercel Analytics
import { TrackProvider } from "@/context/TrackContext"; // Import TrackProvider

export default function App({ Component, pageProps }) {
  return (
    <TrackProvider>
      <div className="app-container">
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Analytics /> {/* ✅ Add Analytics at the bottom */}
      </div>
    </TrackProvider>
  );
}
