import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initGA, trackPageView } from "@/lib/analytics";
import { PageSkeleton } from "@/components/skeletons/PageSkeleton";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ReportsIndex = lazy(() => import("./pages/ReportsIndex"));
const ReportDetail = lazy(() => import("./pages/ReportDetail"));
const EventsIndex = lazy(() => import("./pages/EventsIndex"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const ProgrammesIndex = lazy(() => import("./pages/ProgrammesIndex"));
const ProgrammeDetail = lazy(() => import("./pages/ProgrammeDetail"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Welcome = lazy(() => import("./pages/auth/Welcome"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const Cookies = lazy(() => import("./pages/Cookies"));
const ReadinessAssessment = lazy(() => import("./pages/ReadinessAssessment"));
const AssessmentDetail = lazy(() => import("./pages/AssessmentDetail"));
const CaseStudiesIndex = lazy(() => import("./pages/CaseStudiesIndex"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const SolutionsIndex = lazy(() => import("./pages/SolutionsIndex"));
const SolutionDetail = lazy(() => import("./pages/SolutionDetail"));

const queryClient = new QueryClient();

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
            <Route path="/login" element={withSuspense(<Login />, "form")} />
            <Route path="/register" element={withSuspense(<Register />, "form")} />
            <Route path="/welcome" element={withSuspense(<Welcome />, "form")} />
            <Route path="/forgot-password" element={withSuspense(<ForgotPassword />, "form")} />
            <Route path="/reset-password" element={withSuspense(<ResetPassword />, "form")} />
            <Route path="/terms" element={withSuspense(<Terms />, "detail")} />
            <Route path="/privacy" element={withSuspense(<Privacy />, "detail")} />
            <Route path="/readiness-assessment" element={withSuspense(<ReadinessAssessment />, "detail")} />
            <Route path="/readiness-assessment/:slug" element={withSuspense(<AssessmentDetail />, "detail")} />
            <Route path="/case-studies" element={withSuspense(<CaseStudiesIndex />, "list")} />
            <Route path="/case-studies/:slug" element={withSuspense(<CaseStudyDetail />, "detail")} />
            <Route path="/solutions" element={withSuspense(<SolutionsIndex />, "list")} />
            <Route path="/solutions/:slug" element={withSuspense(<SolutionDetail />, "detail")} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={withSuspense(<NotFound />)} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
