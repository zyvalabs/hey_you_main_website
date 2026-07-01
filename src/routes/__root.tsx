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

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Heyou",
  description:
    "Heyou is a drinks-led bar and restaurant on MG Road, near Trinity Metro. Come for one round, stay for dinner.",
  url: "https://www.heyouletsgo.com/",
  telephone: "+918047250000",
  servesCuisine: "Bar",
  priceRange: "₹400–600",
  image:
    "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7dcc6ad8-095d-416b-a254-8119d8a5d3af/id-preview-0bc88aa6--e05f475d-2e34-4b31-8ef4-a8a40d255a73.lovable.app-1780262258883.png",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Ground Floor, No. 18, Ramanashree Arcade, Mahatma Gandhi Rd, Craig Park Layout, Ashok Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.972404275579388,
    longitude: 77.61832329814547,
  },
  hasMap: "https://maps.app.goo.gl/jy6RyiFYTaArSK1g8",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "01:00",
    },
  ],
  acceptsReservations: "https://www.heyouletsgo.com/reservation",
  sameAs: ["https://www.instagram.com/heyou.letsgo"],
};

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
{ rel: "icon", href: "/favicon.ico", sizes: "any" },
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

        {/* Google tag (gtag.js) — Google Ads + GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18253214019"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18253214019');
gtag('config', 'G-W31PBN965C');`,
          }}
        />
        {/* End Google tag */}

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '4162095620759474');
fbq('track', 'PageView');`,
          }}
        />
        {/* End Meta Pixel Code */}

        {/* LocalBusiness / Restaurant schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {/* End schema */}

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