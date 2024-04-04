const isProduction: boolean = process.env.NODE_ENV === "production";
export const siteUrl: string = isProduction
  ? "https://electron-widgets.vercel.app"
  : "http://localhost:3000";
