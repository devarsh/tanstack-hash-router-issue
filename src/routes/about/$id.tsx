import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about/$id')({
  component: AboutComponent,
  loader: async ({ params }) => {
    console.log({ hello: params.id });
    console.log('about done');
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 3000);
    });
  },
  pendingComponent: () => (
    <div className='p-2'>
      <h3>loading......</h3>
    </div>
  ),
});

function AboutComponent() {
  return (
    <div className='p-2'>
      <h3>About</h3>
    </div>
  );
}
