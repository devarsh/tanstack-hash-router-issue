import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { waitFor } from "../util";

async function beforeLoad() {
  return waitFor(2000);
}

function pendingComponent() {
  return <div>Initializing app...</div>;
}

export const Route = createRootRoute({
  component: RootComponent,

  // Upon uncommenting the beforeLoad and pendingComponent the infinite loop stops
  beforeLoad: beforeLoad,
  pendingComponent: pendingComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
