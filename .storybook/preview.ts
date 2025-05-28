import { initialize, mswLoader } from "msw-storybook-addon";
import type { Preview } from "@storybook/react";

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
};

export default preview;
