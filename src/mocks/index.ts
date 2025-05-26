const IS_BROWSER = typeof window !== "undefined";
export const setupMocks = async () => {
  if (IS_BROWSER) {
    const { worker } = await import("./browser");
    await worker.start({
      onUnhandledRequest: "bypass", // Don't warn about unhandled requests
    });
    console.log("🔶 Mock Service Worker activated");
  } else {
    const { server } = await import("./server");
    server.listen();
  }
  console.log("🔶 Mock Service Worker Server activated");
};
