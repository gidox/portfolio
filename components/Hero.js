import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section class="mx-auto max-w-6xl py-12">

      <div className="flex flex-col  mx-9 m-auto">
        <div className="flex flex-row justify-center lg:hidden">
          <Image
            className="rounded-full"
            src="/arquimedes.jpeg"
            alt="arquimedes profile"
            height="80"
            width="80"
          />
        </div>



        <h2 className="text-yellow-300 text-2xl tracking-wide uppercase font-semibold my-3">
          Hello, I&apos;m Arquimedes
        </h2>

        <h1 className=" text-7xl text-gray-800 leading-extra-loose font-black">
          I&apos;m a Senior Software Enginneer from Venezuela.
        </h1>
        <p className="text-3xl text-gray-800 leading-extra-loose font-medium my-6">
          I create well tested and <strong>high-quality software</strong>. Currently in an
          intimate relationship with <strong>React</strong> on the frontend.
        </p>

        <div className="flex flex-col lg:flex-row ">
          <Button
            type="button"
            className="bg-yellow-300 select-none hover:bg-yellow-100 w-full lg:w-1/3"
          >
            View my work
          </Button>
          <Button className="flex-6 w-full lg:w-9/12 ">Book a free discovery call</Button>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 flex-row justify-center">
        <Image
          className="rounded-full"
          src="/arquimedes.jpeg"
          alt="arquimedes profile"
          height="300"
          width="300"

        />
      </div>
    </section>
  );
}
