import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Blank Page Syndrome",
  EMAIL: "curran.john.m@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "John Curran is your cure for Blank Page Syndrome.",
};

export const BLOG: Metadata = {
  TITLE: "Articles",
  DESCRIPTION: "Some of my recent B2B work",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "I've worked with these companies",
};

export const CASESTUDIES: Metadata = {
  TITLE: "Case Studies",
  DESCRIPTION: "Some case studies from John Curran.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/john-m-curran",
  }
];
