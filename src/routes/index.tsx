import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexComponent,
  loader: async () => {
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 3000);
    });
  },
  pendingComponent: () => (
    <div className="p-2">
      <h3>Loading Index...</h3>
    </div>
  ),
});

function IndexComponent() {
  return (
    <div className="p-2">
      <h3>Hello /!</h3>
    </div>
  );
}
