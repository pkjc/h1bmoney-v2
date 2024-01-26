import React from "react";
import type { Frontmatter } from "src/types";

export interface Props {
  href?: string;
  post: Frontmatter;
  secHeading?: boolean;
}

const styles = {
  cardContainer: "flex group justify-between items-normal",
  featImage: "h-32 w-32 rounded",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-solid focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading: "font-medium text-xl decoration-solid hover:underline p-4 grow",
};

export default function Card({ href, post, secHeading = true }: Props) {
  return (
    <div className="flex flex-col group justify-start items-normal rounded border border-skin-fill border-opacity-20 bg-skin-card p-0">
      <img
        alt="Home"
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover"
      />
      <div className="p-0 flex flex-col justify-between h-full">
        <div className="flex items-center font-bold text-xl decoration-solid hover:underline py-4 px-4 grow">
          <span>
            {post.title}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-external-link mt-0.5 ml-1 w-0.5"
              width="16"
              height="16"
              viewBox="0 0 30 30"
              stroke-width="1.75"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
              <line x1="10" y1="14" x2="20" y2="4"></line>
              <polyline points="15 4 20 4 20 9"></polyline>
            </svg>
          </span>
        </div>
        <div className="flex flex-none flex-row border-t border-skin-fill border-opacity-20 px-2">
          <div className="basis-3/4 flex flex-row flex-nowrap py-2">
            {post.tags.slice(0, 2).map((tag) => {
              return (
                <div className="flex justify-center items-center m-1 px-2 py-1.5 rounded bg-skin-fill text-skin-base font-medium justify-center">
                  <div className="leading-none text-sm font-normal">{tag}</div>
                </div>
              );
            })}
          </div>

          <div className="basis-1/4 border-l border-skin-fill border-opacity-20 py-2 pl-2">
            <a
              href={href}
              className="flex m-1 px-2 py-2 rounded bg-skin-accent text-skin-inverted font-medium justify-center items-center"
            >
              <div className="leading-none text-sm font-normal">Save</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    // <li className={styles.cardContainer}>
    //   <div className="flex-none w-32 mr-4">
    //     <img src={post.ogImage} className={styles.featImage} />
    //   </div>
    //   <div className="grow">
    //     <a href={href} className={styles.titleLink}>
    //       {secHeading ? (
    //         <h2 className={styles.titleHeading}>{post.title}</h2>
    //       ) : (
    //         <h3 className={styles.titleHeading}>{post.title}</h3>
    //       )}
    //     </a>
    //     <div className="container mt-1 mb-2 bg-gray-100 flex flex-row">
    //       {post.tags.map((tag) => {
    //         return (
    //           <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded bg-gray-200 text-base text-gray-700 font-medium">
    //             <div className="leading-none text-xs font-normal">{tag}</div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <p>{post.description}</p>
    //   </div>
    // </li>
  );
}
