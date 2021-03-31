import Link from "next/link";

const Header = () => {
  return (
    <div className="h-24 bg-gray-700">
      <div className="flex flex-row justify-around content-around">
        <Link href="/">
          <p className="text text-3xl mt-6 text-gray-100 delay-75 hover:text-yellow-300 transition-all underline">
            Add new issue
          </p>
        </Link>
        <Link href="/allissues">
          <p className="text text-3xl mt-6 text-gray-100 delay-75 hover:text-yellow-300 transition-all underline">
            All Issues
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
