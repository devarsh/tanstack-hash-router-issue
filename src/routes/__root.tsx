import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

async function beforeLoad() {
  await new Promise<any>((resolve) => {
    setTimeout(resolve, 5000);
  });
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
