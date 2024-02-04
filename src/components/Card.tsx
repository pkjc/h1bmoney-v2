import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, canonicalURL } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-semibold",
  };

  return (
    <li className="py-3">
      <a
        href={canonicalURL}
        className="inline-block text-skin-accent underline mb-2 hover:no-underline underline-offset-4 capitalize"
        target="_blank"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      {/* <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} /> */}
      <p>{description}</p>
    </li>
  );
}
