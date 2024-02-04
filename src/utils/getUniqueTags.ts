import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Tag {
  tag: string;
  tagName: string;
  tagRank: number;
}

function getTagRank(tag: string): number {
  const tagRanking = {
    "getting started": 1,
    budgeting: 2,
    "high-yield savings accounts": 3,
    banking: 4,
    "credit building": 5,
    "credit cards": 6,
    "retirement accounts": 7,
    investing: 8,
    taxes: 9,
    housing: 10,
    "emergency funds": 11,
    "side hustles": 12,
    travel: 13,
    "student loan": 14,
  };
  return tagRanking[tag] || 999;
}

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const tags: Tag[] = posts
    .filter(postFilter)
    .flatMap(post => post.data.tags)
    .map(tag => ({
      tag: slugifyStr(tag),
      tagName: tag,
      tagRank: getTagRank(tag),
    }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((a, b) => a.tagRank - b.tagRank);
  // .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

export default getUniqueTags;
