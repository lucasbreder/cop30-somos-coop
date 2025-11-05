import { Case } from "./Case";
import { Objective } from "./Objective";

export type MapCaseProps = {
  activeCase?: Case;
  currentCases?: Case[];
  setActiveCase: (arg: Case) => void;
  className?: string;
  dataOds?: Objective;
};
