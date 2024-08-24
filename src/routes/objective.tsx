import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/objective')({
  component: () => <div>Hello /objective!</div>,
});
