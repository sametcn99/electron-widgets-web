const isProduction: boolean = process.env.NODE_ENV === "production";
export const siteUrl: string = isProduction
  ? "https://electron-widgets.sametcc.me"
  : "http://localhost:3000";
