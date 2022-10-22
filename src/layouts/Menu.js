import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/ace-home">Home</Link>
    </li>
  </Fragment>

);

export const About = () => (
  <li>
    <Link href="/ace-about">About</Link>
  </li>
);
export const Services = () => (
  <Fragment>
    <li>
      <Link href="/ace-doctors">Find Doctor</Link>
    </li>
    <li>
      <Link href="/services-details">Service Details</Link>
    </li>
  </Fragment>
);
export const Team = () => (
  <Fragment>
    <li>
      <Link href="/ace-doctors">Find Doctor</Link>
    </li>
    <li>
      <Link href="/team-details">Doctor Details</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/company-history">Company History</Link>
    </li>
    <li>
      <Link href="/portfolio-1">Portfolio Grid</Link>
    </li>
    <li>
      <Link href="/portfolio-2">Portfolio Masonry</Link>
    </li>
    <li>
      <Link href="/portfolio-details">Portfolio Details</Link>
    </li>
    <li>
      <Link href="/faq">FAQ Page</Link>
    </li>
    <li>
      <Link href="/testimonial">Testimonials</Link>
    </li>
    <li>
      <Link href="/pricing">Pricing</Link>
    </li>
    <li>
      <Link href="/career">Career</Link>
    </li>
    <li>
      <Link href="/404">Error Page</Link>
    </li>
  </Fragment>
);
export const News = () => (
  <Fragment>
    <li>
      <Link href="/news">News Grid</Link>
    </li>
    <li>
      <Link href="/news-2">News Standard</Link>
    </li>
    <li>
      <Link href="/news-details">News Details</Link>
    </li>
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </Fragment>
);
