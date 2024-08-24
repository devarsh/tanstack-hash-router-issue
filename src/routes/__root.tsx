import {
  Outlet,
  createRootRouteWithContext,
  useNavigate,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

type RootContext = {
  hasReports: boolean;
};

async function rootBeforeLoadFunction() {
  await new Promise<any>((resolve) => {
    setTimeout(resolve, 5000);
  });
}

export const Route = createRootRouteWithContext<RootContext>()({
  beforeLoad: rootBeforeLoadFunction,
  component: RootComponent,
  pendingComponent: () => <div>loading........</div>,
});

function RootComponent() {
  const navigate = useNavigate();

  return (
    <>
      <div className='p-2 flex gap-2 text-lg'>
        <button onClick={() => navigate({ to: '/' })}>Home</button>
        <button
          onClick={() =>
            navigate({
              to: '/about/$id',
              params: { id: '222' },
              search: { execute: false },
            })
          }
        >
          About
        </button>
        <button
          onClick={() =>
            navigate({
              to: '/about/$id',
              params: { id: '222' },
              search: { execute: true },
            })
          }
        >
          About2
        </button>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  );
}
