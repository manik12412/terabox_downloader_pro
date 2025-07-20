import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import DownloadHub from "pages/download-hub";
import HowItWorks from "pages/how-it-works";
import SecurityPrivacyCenter from "pages/security-privacy-center";
import SupportCenter from "pages/support-center";
import ApiDocumentation from "pages/api-documentation";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/download-hub" element={<DownloadHub />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/security-privacy-center" element={<SecurityPrivacyCenter />} />
        <Route path="/support-center" element={<SupportCenter />} />
        <Route path="/api-documentation" element={<ApiDocumentation />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;