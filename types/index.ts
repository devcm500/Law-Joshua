import type { Document } from "@contentful/rich-text-types";

export interface BlogThumbnail {
  url?: string;
  width?: number;
  height?: number;
}

export interface BlogCategory {
  title?: string;
  url?: string;
  width?: number;
  height?: number;
}

export interface BlogAuthor {
  name?: string;
  url?: string;
  width?: number;
  height?: number;
}

export interface Blog {
  title: string;
  slug: string;
  thumbnail: BlogThumbnail;
  category: BlogCategory;
  description: Document | string;
  featured: boolean;
  tags: string[];
  shortDescription: string;
  author: BlogAuthor;
  createdAt: string;
  viewCount: number;
  id?: string;
}

export interface BlogResponse {
  blogs: Blog[];
  total: number;
}

export interface ServiceListItem {
  text: string;
}

export interface ServiceCardData {
  title: string;
  list: ServiceListItem[];
  img?: string;
  desc?: string;
}

export interface ServiceProfileData {
  img: string;
  desc: string;
  name: string;
  type: string;
}

export interface ServiceFeatureData {
  title: string;
  list: ServiceListItem[];
}

export interface ServiceData {
  id: number;
  serial: number;
  heading: string;
  subheading: string;
  desc: string;
  descTwo?: string;
  descThree?: string;
  homeLink?: string;
  cardImg: string;
  bannerImg: string;
  card: ServiceCardData[];
  feature: ServiceFeatureData[];
  profile: ServiceProfileData[];
}

export interface TeamInformation {
  occupation: string;
  experience: string;
  practiceArea: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  call: string;
}

export interface TeamAbout {
  desc: string;
  highlightedText?: string;
  descTwo?: string;
  descThree?: string;
  descFour?: string;
  descFive?: string;
  descSix?: string;
  descSeven?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  text: string;
  occupation: string;
  img: string;
  hasInfo: boolean;
  isGap?: boolean;
  subtext?: string;
  title?: string;
  desc?: string;
  descTwo?: string;
  descThree?: string;
  descFour?: string;
  brandImg?: string;
  signature?: string;
  information?: TeamInformation[];
  about: TeamAbout[];
}

export interface TestimonialItem {
  desc: string;
  img: string;
  name: string;
}

export interface CaseStudyListItem {
  text: string;
}

export interface CaseStudyCardItem {
  img: string;
  title: string;
  desc: string;
  list: CaseStudyListItem[];
}

export interface CaseStudyDetail {
  serial: number;
  title: string;
  thumbImg: string;
  desc: string;
  descTwo?: string;
  outcome: string;
  outcome_list: CaseStudyListItem[];
  card: CaseStudyCardItem[];
}

export interface CaseStudy {
  id: number;
  title: string;
  desc: string;
  img: string;
  list: CaseStudyListItem[];
  details: CaseStudyDetail[];
}

export interface FooterContact {
  text: string;
  mail?: string;
  call?: string;
  number?: string;
}

export interface FooterAddress {
  iClass: string;
  text: string;
  desc: string;
}

export interface ContactItem {
  title: string;
  phone: string;
  call: string;
  email: string;
  address: string;
  mapSrc: string;
}

export interface BrandItem {
  img: string;
  wdt: number;
  ht: number;
}

export interface AboutTwoListItem {
  text: string;
}

export interface AboutTwoData {
  tab: string;
  tabTitle: string;
  isActive: boolean;
  desc: string;
  list: AboutTwoListItem[];
}

export interface AboutCardData {
  num: number;
  iClass: string;
  title: string;
  desc: string;
  isSpace?: boolean;
  counterIcon: string;
  counterIconWidth: number;
  counterIconHeight: number;
}

export interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  casetype: string;
  phoneNumber: string;
  description: string;
  tgusername?: string;
}

export interface FormErrors {
  firstname: string;
  lastname: string;
  email: string;
  casetype: string;
  phoneNumber: string;
  description: string;
}

export type FormStatus = "idle" | "sending" | "success" | "error";
