import Link from "next/link";

const Header = () => {
  return (
    <div className="h-24 bg-gray-700">
      <div className="flex flex-row justify-around content-around">
        <Link href="/">
          <p className="text text-2xl mt-7 text-gray-100 delay-75 hover:text-yellow-300 transition-all underline font-body">
            All Issues
          </p>
        </Link>
        <Link href="/add">
          <p className="text text-2xl mt-7 text-gray-100 delay-75 hover:text-yellow-300 transition-all underline font-body">
            Add New Issue
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
