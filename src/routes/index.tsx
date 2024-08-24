import { createFileRoute } from "@tanstack/react-router";
import { waitFor } from "../util";

export const Route = createFileRoute("/")({
  component: IndexComponent,
  loader: () => {
    return waitFor(1000);
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
