import filterObjectsByProperty from "@utils/filterObjectsByProperty";
import React from "react";

export default function TagPostList({ sortedPosts, tag }) {
    return (
        sortedPosts.filter((obj ) => obj.tags === tag).map(
            ({ frontmatter }, index) =>
                index < 6 && (
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                       {frontmatter.title}
                    </p>
                )
            )
    )
}

