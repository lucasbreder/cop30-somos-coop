import { interfaceData } from "@/data/interface"
import { Params } from "@/types/Params";
import { useParams } from "next/navigation";
import QRCode from "react-qr-code"

export const CaseQRCode = ({showSite = true, reverse = false, showBorder = true}:{showSite?:boolean, reverse?: boolean, showBorder?:boolean}) => {

      const params = useParams<Params>();
      const locale = params.lang || 'pt';

    return (
         <div className={`flex flex-col items-center lg:flex-row flex-wrap gap-5 justify-center md:justify-start ${reverse ? 'flex-row-reverse' : ''}`}>
              <div className={`${showBorder ? 'border-r pr-6' : ''}`}>
                <QRCode size={70} bgColor="transparent" fgColor="currentColor" value="https://somoscooperativismo.coop.br/cop30/cases" />
              </div>
              <div>
                <div className={`${!showSite ? 'text-center' : ''} font-light leading-5 flex-1 basis-2/3`}>
                  {interfaceData[locale]['more'].value}
                {showSite && <span className="font-bold break-all block">somoscooperativismo.coop.br/cop30/cases</span>}
                </div>
              </div>
          </div>
    )
}