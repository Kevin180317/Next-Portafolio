"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {Card, CardHeader, CardBody} from "@nextui-org/react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-4">
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Firebase</h4>
      </CardHeader>
      <CardBody className="">
        <Image
      src="/firebase-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Next</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/next.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">React</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/react.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">PHP</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/php.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">TailwindCSS</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/tailwindcss-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Vuejs</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/vuejs-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Angular</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/angular-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">MySQL</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/mysql-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Ruby</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/ruby-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Hosting</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/hostgator-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Laravel</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/laravel-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Boostrap</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/getbootstrap-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">NodeJs</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/nodejs-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">ExpressJS</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/expressjs-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Ionic</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/ionic-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Android Java</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/android-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card>
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Python</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/python-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card >
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">SQLITE</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/sqlite-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card >
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Java</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/java-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    <Card >
    <CardHeader className="flex justify-center pb-0">
        <h4 className="font-bold text-large">Kotlin</h4>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
      src="/kotlin-icon.svg"
      width={100}
      height={300}
      alt="Picture of the author"
      />
      </CardBody>
    </Card>
    
    
    
        {/* Repite este patrón para cada habilidad */}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-wrap">
        <li>
          Universidad de las californias internaciones, Tijuana, Baja california
        </li>
        {/* Repite este patrón para cada entrada de educación */}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.webp" width={500} height={500} />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a full stack web developer with a passion for creating
            interactive and responsive web applications. Here are some of the technologies I work with:
            HTML5, CSS, JS, Firebase, Next.js, React, PHP, TailwindCSS, Vuejs, Angular, MySQL,SQLITE, Ruby, Hosting, Laravel, Boostrap,
            Node.js, ExpressJS, Ionic, Android Java, Python, Java Android, Kotlin, and more. I am a quick learner and always
            eager to expand my knowledge and skill set. I thrive in collaborative environments and
            Im excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
