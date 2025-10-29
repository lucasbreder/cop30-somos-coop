import { Selector } from "@/components/Selector";
import { languages } from "@/data/languages";

export async function generateStaticParams() {

  return languages.map((lang) => ({
    lang: lang.code,
    id: 1
  }));
}

export default function Home() {
  return (
    <div className="basis-full p-20">
        <Selector/>
      </div>
  ) 
  ;
}
