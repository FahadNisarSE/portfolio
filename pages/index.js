import Head from "next/head";
import Styles from "../styles/Home.module.css";
import { useState } from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Works,
} from "../containers";

import { Navbar } from "../components";
import { client } from "../client";

export default function Home({abouts, experiences, skills, works}) {
  return (
    <>
      <Head>
        <title>Fahad Nisar</title>
        <meta name="description" content="My name is Fahad Nisar. I am a Front End Devloper. I am excited and eager to find new opportunities." />
        <link rel="icon" href="../public/favicon.png" />
      </Head>
      <header className={Styles.header}>
        <Navbar />
        <Header />
      </header>
      <main className={Styles.main}>
        <About data={abouts} />
        <Works data={works} />
        <Skills expdata={experiences} skilldata={skills} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export async function getStaticProps() {

  const abouts = await client.fetch('*[_type == "abouts"]');
  const experiences = await client.fetch('*[_type == "experiences"]');
  const skills = await client.fetch('*[_type == "skills"]');
  const works = await client.fetch('*[_type == "works"]');

  return {
    props: {
      abouts,
      experiences,
      skills,
      works
    },
    revalidate: 10
  }
}