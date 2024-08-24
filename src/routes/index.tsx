import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: async () => {
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 3000);
      console.log('done child');
    });
  },
  pendingComponent: () => (
    <div className='p-2'>
      <h3>loading......</h3>
    </div>
  ),
});

function HomeComponent() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
    </div>
  );
}
