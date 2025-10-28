import { BaseLayout } from "@/components/BaseLayout";
import { Selector } from "@/components/Selector";


export default function Home() {
  return (
    <BaseLayout>
        <div className="basis-full p-20">
          <Selector/>
        </div>
    </BaseLayout>
  ) 
  ;
}
