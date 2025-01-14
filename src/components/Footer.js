import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { motion } from "framer-motion";

import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>Copyright &copy; {new Date().getFullYear()} AbuBakar</span>

        <div className="flex items-center">
          <motion.a
            href="https://github.com/abubakrsaddique"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammad-abubakar-saddique-7a0688223"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="mailto:abubakarsaddique786.tsk@gmail.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <MailIcon />
          </motion.a>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
