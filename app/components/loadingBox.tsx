import Spinner from "./icons/spinner"


interface Props {
    className? : string
}

export default function LoadingBox({className}:Props) {
    return (
        <div className={` justify-center color-header text-sm  rounded-md flex items-center font-bold ${className ?? ''}`}>
            <Spinner className="w-4 h-4 color-html  ml-2" />
        </div>
    )
}