"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="font-bold uppercase text-tiny text-white/60">What to watch</p>
        <h4 className="font-medium text-white text-large">Stream the Acme event</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 object-cover w-full h-full"
        src="/images/card-example-4.jpeg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="font-bold uppercase text-tiny text-white/60">Plant a tree</p>
        <h4 className="font-medium text-white text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 object-cover w-full h-full"
        src="/images/card-example-3.jpeg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="font-bold uppercase text-tiny text-white/60">Supercharged</p>
        <h4 className="font-medium text-white text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 object-cover w-full h-full"
        src="/images/card-example-2.jpeg"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 flex-col items-start top-1">
        <p className="font-bold uppercase text-tiny text-white/60">New</p>
        <h4 className="text-2xl font-medium text-black">Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 object-cover w-full h-full scale-125 -translate-y-6"
        src="/images/card-example-6.jpeg"
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between bg-white/30 border-t-1 border-zinc-100/50">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 flex-col items-start top-1">
        <p className="font-bold uppercase text-tiny text-white/60">Your day your way</p>
        <h4 className="text-xl font-medium text-white/90">Your checklist for better sleep</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 object-cover w-full h-full"
        src="/images/card-example-5.jpeg"
      />
      <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex items-center flex-grow gap-2">
          <Image
            alt="Breathing app icon"
            className="w-10 bg-black rounded-full h-11"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-black/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good nights sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
  </div>
  );
}
