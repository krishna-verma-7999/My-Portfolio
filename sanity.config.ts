import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: "73egesxz",

  dataset: "production",

  title: "My Personal Website",

  apiVersion: "2023-09-29",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },
});
