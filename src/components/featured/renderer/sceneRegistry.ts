import Welcome from "../scenes/Welcome";
import ProjectSignature from "../scenes/ProjectSignature";
import QuantNova from "../scenes/QuantNova";
import SelectedWorks from "../scenes/SelectedWorks";
import Philosophy from "../scenes/Philosophy";
import CTA from "../scenes/CTA";

export const sceneRegistry = [
  {
    id: "welcome",
    component: Welcome,
  },

  {
    id: "project-signature",
    component: ProjectSignature,
  },

  {
    id: "quantnova",
    component: QuantNova,
  },

  {
    id: "selected-works",
    component: SelectedWorks,
  },

  {
    id: "philosophy",
    component: Philosophy,
  },

  {
    id: "cta",
    component: CTA,
  },
];