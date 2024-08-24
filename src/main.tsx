import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createHashHistory,
  createRouter,
} from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const hashHistory = createHashHistory();

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: undefined!,
  history: hashHistory,
  defaultPreload: 'intent',
  defaultGcTime: 0,
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <RouterProvider
      context={{
        hasReports: false,
      }}
      router={router}
    />
  );
}
