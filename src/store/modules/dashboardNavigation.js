export default {
  state: {
    drawerState: true,
    currentRoute: "/dashboard/menu",
    transactionTabs: null,
    dashboardRoutes: [
      {
        icon: "mdi-home-outline",
        title: "Dashboard",
        route: "/dashboard/dash",
        location: window.location.pathname,
      },
      {
        icon: "mdi-swap-vertical",
        title: "Transactions",
        route: "/dashboard/transaction",
        location: window.location.pathname,
      },
      {
        icon: "mdi-briefcase-variant-outline",
        title: "Store",
        route: "/dashboard/store",
        location: window.location.pathname,
      },
      {
        icon: "mdi-arrow-down",
        title: "Withdraws",
        route: "/dashboard/withdraws",
        location: window.location.pathname,
      },
      {
        icon: "mdi-link-variant-plus",
        title: "Create paddi link",
        route: "/dashboard/paddiLink",
        location: window.location.pathname,
      },
      {
        icon: "mdi-sync",
        title: "Refunds",
        route: "/dashboard/refunds",
        location: window.location.pathname,
      },
      {
        icon: "mdi-account-tie-voice-outline",
        title: "Customer support",
        route: "/dashboard/customerSupport",
        location: window.location.pathname,
      },
      {
        icon: "mdi-account-outline",
        title: "Account",
        route: "/dashboard/account",
        location: window.location.pathname,
      },
    ],
  },
  getters: {
    dashboardRoutes: (state) => state.dashboardRoutes,
  },
}
