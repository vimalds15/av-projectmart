import { LandingPage,HomePage, DashboardPage, InvoicesPage, CryptoWalletPage } from "../pages";

export const routes = [
    {
        path:"/",
        element: <HomePage />
    },
    // {
    //     path:"/dashboard",
    //     element: <DashboardPage />
    // },
    // {
    //     path:"/invoices",
    //     element: <InvoicesPage />
    // },
    // {
    //     path:"/cryptowallet",
    //     element: <CryptoWalletPage />
    // },
    {
        path:"/landing",
        element: <LandingPage />
    },
]