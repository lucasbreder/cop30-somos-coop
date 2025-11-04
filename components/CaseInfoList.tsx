export const CaseInfoList = ({
  title,
  text,
}: {
  title: string;
  text: string[];
}) => {
  return (
    <div className="mb-3">
      <h3 className="border-b border-inherit pb-1 w-1/2 font-bold">{title}</h3>
      <div className="mt-3">
        {text.map((item, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="w-3 h-3 border border-inherit rounded-full"></div>
            <div key={index} className="list-disc list-outside">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
