import "../src/app/globals.css";
import { Poppins } from "next/font/google";
import { initialize, mswLoader } from "msw-storybook-addon";
import type { Preview } from "@storybook/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Initialize MSW
initialize({ onUnhandledRequest: "bypass" }); // Bypass unhandled requests to avoid errors in the console

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
  decorators: [
    Story => (
      <div className={`${poppins.className} antialiased`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
