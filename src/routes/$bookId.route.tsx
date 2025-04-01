import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/$bookId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
