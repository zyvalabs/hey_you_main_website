import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AnimToggle } from "../components/AnimToggle";
import { PageLoader } from "@/components/PageLoader";
import faviconImg from "../assets/heyou/red logo.svg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Heyou MG Road | Drinks, Dinner & Tables Near Trinity Metro" },
      {
        name: "description",
        content:
          "Heyou is a drinks-led bar and restaurant on MG Road, near Trinity Metro. Come for one round, stay for dinner. Reserve a table online.",
      },
      { name: "author", content: "Heyou" },
      { property: "og:title", content: "Heyou MG Road | Drinks, Dinner & Tables Near Trinity Metro" },
      {
        property: "og:description",
        content:
          "Heyou is a drinks-led bar and restaurant on MG Road, near Trinity Metro. Come for one round, stay for dinner. Reserve a table online.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.heyouletsgo.com/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@heyou" },
      { name: "twitter:title", content: "Heyou MG Road | Drinks, Dinner & Tables Near Trinity Metro" },
      {
        name: "twitter:description",
        content:
          "Heyou is a drinks-led bar and restaurant on MG Road, near Trinity Metro. Come for one round, stay for dinner. Reserve a table online.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7dcc6ad8-095d-416b-a254-8119d8a5d3af/id-preview-0bc88aa6--e05f475d-2e34-4b31-8ef4-a8a40d255a73.lovable.app-1780262258883.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7dcc6ad8-095d-416b-a254-8119d8a5d3af/id-preview-0bc88aa6--e05f475d-2e34-4b31-8ef4-a8a40d255a73.lovable.app-1780262258883.png",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.heyouletsgo.com/" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Londrina+Solid&family=Bagel+Fat+One&family=Space+Grotesk:wght@400;500;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: faviconImg,
        type: "image/png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T933MCM2');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Ads (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17796465899"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17796465899');`,
          }}
        />
        {/* End Google Ads */}

        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T933MCM2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <PageLoader>
        <Outlet />
      </PageLoader>
      <AnimToggle />
    </QueryClientProvider>
  );
}