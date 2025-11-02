export const CaseInfoList = ({title, text}: {title:string, text:string[]}) => {
    return (
        <div className="text-white mb-3">
            <h3 className="border-b border-white pb-1 w-1/2 font-bold">{title}</h3>
            <div className="flex items-center gap-2 mt-3">
            {
                text.map((item, index) => (
                    <>
                    <div className="w-3 h-3 border border-white rounded-full"></div>
                    <div key={index} className="list-disc list-outside">{item}</div>
                    </>
                ))
            }
            </div>
        </div>
    )
}