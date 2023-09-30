import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id , 
        _createAt,
        name,
        "slug" : slug.current,
        "image" : image.asset->url,
        alt,
        url,
        content
    }`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id , 
        _createAt,
        name,
        "slug" : slug.current,
        "image" : image.asset->url,
        alt,
        url,
        content
    }`,
    {
      slug,
      next: {
        revalidate: 10,
      },
    }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id , 
      _createAt,
      title,
      "slug" : slug.current,
    }`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id , 
      _createAt,
      title,
      "slug" : slug.current,
      content
    }`,
    {
      slug,
      next: {
        revalidate: 10,
      },
    }
  );
}
