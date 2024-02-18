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
    className: "text-lg font-semibold",
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

      <article className="">
        <div className="flex items-start gap-4 py-3 sm:py-5 lg:py-7">
          <img
            alt=""
            src={
              // post.ogImage ? `/${post.ogImage}` :
              `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${canonicalURL}&size=128`
            }
            className="size-20 rounded-lg object-cover rounded-xl border-2 border-gray-100 p-1"
          />
          <div>
            <h3 className="font-medium sm:text-lg">
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
            </h3>

            <p className="line-clamp-4 text-md text-gray-700">{description}</p>
          </div>
        </div>
      </article>
    </>
  );
}
