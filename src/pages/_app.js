import "@/styles/globals.css";
import Footer from "@/components/Footer"; // Import Footer
import { Analytics } from '@vercel/analytics/react'; // Import Vercel Analytics
import { TrackProvider } from "@/context/TrackContext"; // Import TrackProvider

export default function App({ Component, pageProps }) {
  return (
    <TrackProvider>
      <div className="app-container">
        <Component {...pageProps} />
        <Footer />
        <Analytics /> {/* ✅ Add Analytics at the bottom */}
      </div>
    </TrackProvider>
  );
}
