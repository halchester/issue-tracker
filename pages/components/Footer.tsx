import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex py-5 m-auto text-md text-gray-800 flex-col items-center border-t max-w-screen-xl">
      <p className="text-gray-700">
        Check me out on{" "}
        <span className="underline">
          <Link href="https://github.com/halchester/issue-tracker">Github</Link>
        </span>
        !
      </p>
    </div>
  );
};

export default Footer;
