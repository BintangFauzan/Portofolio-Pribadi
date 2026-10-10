import {AiFillChrome} from "react-icons/ai";

export default function IconChrome({href}) {
    return(
        <>
            <a href={href} className="mt-4 inline-block bg-blue-500 dark:bg-blue-700 text-white font-bold py-2 px-4 ml-3 mr-3 rounded">
                <AiFillChrome/>
            </a>
        </>
    )
}