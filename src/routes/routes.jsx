import {
  LandingPage,
  HomePage,
  DashboardPage,
  InvoicesPage,
  CryptoWalletPage,
  ProjectsPage,
  OrdersPage
} from "../pages";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
  {
    path: "/invoices",
    element: <InvoicesPage />,
  },
  {
    path: "/cryptowallet",
    element: <CryptoWalletPage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
];
