import Image from "next/image"

export default function ImageProject({href, src}) {
    return (
        <>
            <a href={href}>
                <Image src={src} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </a>
        </>
    )
}