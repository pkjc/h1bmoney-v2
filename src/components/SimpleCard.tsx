import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import React from "react";

export default function SimpleCard({ href, post, secHeading = true } : any) {

  const headerProps = {
    style: { viewTransitionName: slugifyStr(post.title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">{post.title}</h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">{post.title}</h3>
        )}
      </a>
      
    </li>
  );
}