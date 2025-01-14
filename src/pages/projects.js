import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import GroundApp from "../../public/images/projects/groundapp.png";
import AdminPanel from "../../public/images/projects/adminpanel.png";
import ResetApp from "../../public/images/projects/resetapp.png";
import OriginSupps from "../../public/images/projects/originsupps.png";
import Inventory from "../../public/images/projects/inventorymanagement.png";
import ShoppingStore from "../../public/images/projects/shoppingstore.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>ABUBAKAR | Projects </title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Grounds App "
                img={GroundApp}
                summary="I have cloned this Web-App Dashboard. I have created this project Using Next.js with App-Router and Tailwind CSS for efficient UI development , React-Query for fetching , Updating and managing User State development , Firebase for hosting, Database Authentication and File Storage"
                link="https://grounds-app-next-js-app-router.vercel.app/"
                github="https://github.com/abubakrsaddique/Grounds-App_Next.js-App-Router-.git"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Admin Panel "
                img={AdminPanel}
                link="https://github.com/abubakrsaddique/Admin-Panel.git"
                github="https://github.com/abubakrsaddique/Admin-Panel.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Reset App "
                img={ResetApp}
                link="https://github.com/abubakrsaddique/Reset-App-with-Tailwind.git"
                github="https://github.com/abubakrsaddique/Reset-App-with-Tailwind.git"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Origin Supps "
                img={OriginSupps}
                summary="I have cloned this App.  have created this project Using Next.js with App-Router and Tailwind CSS for efficient UI development , TanStack-Query for fetching and Updating Jotai for StateMangement and Firebase for database and File Storage"
                link="https://originsupps-xv81.vercel.app/"
                github="https://github.com/abubakrsaddique/Originsupps.git"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Inventory Management "
                img={Inventory}
                link="https://github.com/abubakrsaddique/Inventory-Management.git"
                github="https://github.com/abubakrsaddique/Inventory-Management.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Shopping Store "
                img={ShoppingStore}
                link="https://github.com/abubakrsaddique/Shopping-Store-using-React.git"
                github="https://github.com/abubakrsaddique/Shopping-Store-using-React.git"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
