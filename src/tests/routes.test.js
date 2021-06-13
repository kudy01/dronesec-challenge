import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/extend-expect";

import { Dashboard, Home, Quit } from "../pages";

jest.mock("../pages/Dashboard/dashboard");
jest.mock("../pages/Home/home");
jest.mock("../pages/Quit/quit");

describe("Tests for App Routing", () => {
  test("should render Home page on default route", () => {
    Home.mockImplementation(() => <div>HomeMock</div>);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("HomeMock")).toBeInTheDocument();
  });

  test("should render Dashboard Page for dashboard route", () => {
    Dashboard.mockImplementation(() => <div>DashboardMock</div>);

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Dashboard />
      </MemoryRouter>
    );

    expect(screen.getByText("DashboardMock")).toBeInTheDocument();
  });

  test("should render Quit Page for quit route", () => {
    Quit.mockImplementation(() => <div>QuitMock</div>);

    render(
      <MemoryRouter initialEntries={["/quit"]}>
        <Quit />
      </MemoryRouter>
    );

    expect(screen.getByText("QuitMock")).toBeInTheDocument();
  });
});
