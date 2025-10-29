import { Case } from "./Case";

export type MapCaseProps = {
    activeCase?:Case;
    currentCases?:Case[];
    setActiveCase: (arg:Case) => void
}