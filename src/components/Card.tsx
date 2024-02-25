import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const {
    title,
    pubDatetime,
    modDatetime,
    description,
    canonicalURL,
    resourceType,
  } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-semibold leading-7",
  };

  return (
    <>
      {/* <li className="py-3">
        <a
          href={canonicalURL}
          className="inline-block text-skin-accent underline mb-2 hover:no-underline underline-offset-4 capitalize mr-2"
          target="_blank"
        >
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </a>

        <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2 py-0.25 text-amber-800">
          <span className="whitespace-nowrap text-sm capitalize">
            {resourceType}
          </span>
        </span>

       
        <p>{description}</p>
      </li> */}

      <article className="flex items-start gap-4 py-2 sm:py-3 lg:py-4">
        <img
          alt=""
          src={
            // post.ogImage ? `/${post.ogImage}` :
            `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${canonicalURL}&size=128`
          }
          className="size-20 rounded-lg object-cover rounded-xl border-2 border-gray-100 p-1"
        />
        <div>
          <span className="flex items-baseline">
            <a
              href={canonicalURL}
              className="text-skin-accent underline mb-1 hover:no-underline underline-offset-4 capitalize mr-2"
              target="_blank"
            >
              {secHeading ? (
                <h2 {...headerProps}>{title}</h2>
              ) : (
                <h3 {...headerProps}>{title}</h3>
              )}
            </a>
            <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2 py-0 text-amber-800">
              <span className="whitespace-nowrap text-sm capitalize">
                {resourceType}
              </span>
            </span>
          </span>
          <p className="line-clamp-4 text-md text-gray-700">{description}</p>
        </div>
      </article>
    </>
  );
}
