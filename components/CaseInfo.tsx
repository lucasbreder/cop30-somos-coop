export const CaseInfo = ({title, text}: {title:string, text:string}) => {
    return (
        <div className="text-white mb-3">
            <h3 className="border-b border-white pb-1 w-1/2 font-bold">{title}</h3>
            <p className="mt-3">{text}</p>
        </div>
    )
}