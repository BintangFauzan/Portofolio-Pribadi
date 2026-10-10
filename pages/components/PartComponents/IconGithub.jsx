import { AiFillGithub } from "react-icons/ai";

export default function IconGithub({ href, margin }) {
  return (
    <>
      <a
        href={href}
        className={`mt-4 inline-block bg-blue-500 dark:bg-blue-700 text-white font-bold py-2 px-4 rounded ${margin || "ml-3 mr-3"}`}
      >
        <AiFillGithub />
      </a>
    </>
  );
}
