import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initGA, trackPageView } from "@/lib/analytics";
import { PageSkeleton } from "@/components/skeletons/PageSkeleton";
import { CookieConsent } from "@/components/common/CookieConsent";
import { ChunkErrorBoundary } from "@/components/common/ChunkErrorBoundary";
import { routeLoaders, prefetchOnIdle } from "@/lib/routePrefetch";

const Index = lazy(routeLoaders["/"]);
const About = lazy(routeLoaders["/about"]);
const Contact = lazy(routeLoaders["/contact"]);
const ReportsIndex = lazy(routeLoaders["/reports"]);
const ReportDetail = lazy(routeLoaders["/reports/:slug"]);
const EventsIndex = lazy(routeLoaders["/events"]);
const EventDetail = lazy(routeLoaders["/events/:slug"]);
const ProgrammesIndex = lazy(routeLoaders["/programmes"]);
const ProgrammeDetail = lazy(routeLoaders["/programmes/:slug"]);
const NotFound = lazy(routeLoaders["*"]);
const Terms = lazy(routeLoaders["/terms"]);
const Privacy = lazy(routeLoaders["/privacy"]);
const Accessibility = lazy(routeLoaders["/accessibility"]);
const Cookies = lazy(routeLoaders["/cookies"]);
const ReadinessAssessment = lazy(routeLoaders["/readiness-assessment"]);
const AssessmentDetail = lazy(routeLoaders["/readiness-assessment/:slug"]);
const CaseStudiesIndex = lazy(routeLoaders["/case-studies"]);
const CaseStudyDetail = lazy(routeLoaders["/case-studies/:slug"]);
const SolutionsIndex = lazy(routeLoaders["/solutions"]);
const SolutionDetail = lazy(routeLoaders["/solutions/:slug"]);
const OutcomeDetail = lazy(routeLoaders["/knowledge-hub/:outcomeId"]);
const Directories = lazy(routeLoaders["/directories"]);

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    initGA();
  }, []);
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);
  return null;
};

const IdlePrefetch = () => {
  useEffect(() => {
    // Warm the most commonly visited routes once the app is interactive.
    prefetchOnIdle([
      "/solutions",
      "/programmes",
      "/reports",
      "/events",
      "/about",
      "/contact",
    ]);
  }, []);
  return null;
};

const withSuspense = (node: React.ReactNode, variant: "list" | "detail" | "form" | "default" = "default") => (
  <Suspense fallback={<PageSkeleton variant={variant} />}>{node}</Suspense>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteTracker />
          <IdlePrefetch />
          <ChunkErrorBoundary>
            <Routes>
              <Route path="/" element={withSuspense(<Index />)} />
              <Route path="/about" element={withSuspense(<About />, "detail")} />
              <Route path="/contact" element={withSuspense(<Contact />, "form")} />
              <Route path="/reports" element={withSuspense(<ReportsIndex />, "list")} />
              <Route path="/reports/:slug" element={withSuspense(<ReportDetail />, "detail")} />
              <Route path="/events" element={withSuspense(<EventsIndex />, "list")} />
              <Route path="/events/:slug" element={withSuspense(<EventDetail />, "detail")} />
              <Route path="/programmes" element={withSuspense(<ProgrammesIndex />, "list")} />
              <Route path="/programmes/:slug" element={withSuspense(<ProgrammeDetail />, "detail")} />
              <Route path="/terms" element={withSuspense(<Terms />, "detail")} />
              <Route path="/privacy" element={withSuspense(<Privacy />, "detail")} />
              <Route path="/accessibility" element={withSuspense(<Accessibility />, "detail")} />
              <Route path="/cookies" element={withSuspense(<Cookies />, "detail")} />
              <Route path="/readiness-assessment" element={withSuspense(<ReadinessAssessment />, "detail")} />
              <Route path="/readiness-assessment/:slug" element={withSuspense(<AssessmentDetail />, "detail")} />
              <Route path="/case-studies" element={withSuspense(<CaseStudiesIndex />, "list")} />
              <Route path="/case-studies/:slug" element={withSuspense(<CaseStudyDetail />, "detail")} />
              <Route path="/solutions" element={withSuspense(<SolutionsIndex />, "list")} />
              <Route path="/solutions/:slug" element={withSuspense(<SolutionDetail />, "detail")} />
              <Route path="/knowledge-hub/:outcomeId" element={withSuspense(<OutcomeDetail />, "detail")} />
              <Route path="/directories" element={withSuspense(<Directories />, "detail")} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={withSuspense(<NotFound />)} />
            </Routes>
          </ChunkErrorBoundary>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
