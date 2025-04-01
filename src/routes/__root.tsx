import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Nav from "@/Components/nav";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center">
        <Nav />
        <main className="flex flex-col max-w-[1000px]">
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
}
