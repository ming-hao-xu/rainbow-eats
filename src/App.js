import React, { Suspense } from "react";

// mui
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// components
import InfoCard from "./components/app.info-card";
import NavBar from "./components/app.nav-bar";
import Footer from "./components/app.footer";

// pages
import Loading from "./pages/page.loading";

// theme
import ThemeBuilder from "./themes/theme-builder";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={ThemeBuilder()}>
        <CssBaseline />
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        <main>
          <InfoCard />
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </Suspense>
  );
}
