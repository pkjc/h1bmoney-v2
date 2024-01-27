import filterObjectsByProperty from "@utils/filterObjectsByProperty";
import React from "react";
import { slugifyStr } from "@utils/slugify";

export default function TagPostList({ sortedPosts, tag }) {
   
    return (
        sortedPosts.filter((obj ) => obj.tags === tag).map(
            ({ frontmatter }, index) =>
                index < 6 && (
                    // <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    //    {frontmatter.title}
                    // </p>
                     <a
                     href={frontmatter.href}
                     className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
                   >
                     {frontmatter.secHeading ? (
                       <h2 className="text-lg font-medium decoration-dashed hover:underline">{frontmatter.title}</h2>
                     ) : (
                       <h3 className="text-lg font-medium decoration-dashed hover:underline">{frontmatter.title}</h3>
                     )}
                   </a>
                )
            )
    )
}

