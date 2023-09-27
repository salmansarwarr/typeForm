import Link from "next/link";

const Page = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <Link
                className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded"
                href={"/form"}
            >
                Go to Form {"->"}
            </Link>
        </div>
    );
};

export default Page;
