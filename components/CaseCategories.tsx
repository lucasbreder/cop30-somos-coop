export const CaseInfo = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="mb-5">
      <h3 className="border-b border-inherit pb-2 w-1/2">{title}</h3>
      <p className="mt-3">{text}</p>
    </div>
  );
};
