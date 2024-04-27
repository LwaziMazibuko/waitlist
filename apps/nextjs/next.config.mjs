// @ts-check
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

// Only import and validate environment variables in development
if (process.env.NODE_ENV !== "production") {
  !process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
}

/** @type {import("next").NextConfig} */
const config = {
  basePath: '/waitlist', // Set the base path to '/waitlist'
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@saasfly/common", "@saasfly/ui"],
  pageExtensions: ["ts", "tsx"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: "export",
};

export default config;

