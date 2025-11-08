import Markdown from "react-markdown";

export const CaseInfo = ({
  title,
  text,
}: {
  title: string;
  text: string;
  hasBakground?: boolean;
}) => {
  return (
    <div className={"mb-3"}>
      <h3 className="border-b border-inherit pb-1 w-1/2 max-w-[300px] font-bold  fhdv:portrait:text-2xl">
        {title}
      </h3>
      <div className="mt-3 case-content fhdv:portrait:text-xl  fhdv:portrait:leading-8">
        <Markdown>{text}</Markdown>
      </div>
    </div>
  );
};
