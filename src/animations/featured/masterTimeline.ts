import { gsap } from "@/lib/gsap";

import { SceneController } from "./sceneController";
import { WheelController } from "./wheelController";

import { RenderEngine } from "../engine/renderEngine";

import { WelcomeScene } from "./scenes/welcome";
import { ProjectSignatureScene } from "./scenes/projectSignature";
import { QuantNovaScene } from "./scenes/quantnova";
import { SelectedWorksScene } from "./scenes/selectedWorks";
import { PhilosophyScene } from "./scenes/philosophy";
import { CTAScene } from "./scenes/cta";

export function animateFeaturedProjects(
  section: HTMLElement
) {
  return gsap.context(() => {
    /*
      Register all scenes.
    */

    const sceneController =
      new SceneController();

    sceneController.register(
      WelcomeScene
    );

    sceneController.register(
      ProjectSignatureScene
    );

    sceneController.register(
      QuantNovaScene
    );

    sceneController.register(
      SelectedWorksScene
    );

    sceneController.register(
      PhilosophyScene
    );

    sceneController.register(
      CTAScene
    );

    /*
      Render Engine.
    */

    const renderEngine =
      new RenderEngine();

    /*
      Wheel Controller.
    */

    const wheelController =
      new WheelController();

    wheelController.setCallback(
      (direction) => {
        console.log("------------");

        if (direction === "down") {
          const activeScene =
            renderEngine.nextScene();

          console.log(
            "ACTIVE SCENE:",
            activeScene.id
          );
        }

        if (direction === "up") {
          const activeScene =
            renderEngine.previousScene();

          console.log(
            "ACTIVE SCENE:",
            activeScene.id
          );
        }
      }
    );

    wheelController.init();

    /*
      Console Logs.
    */

    console.log(
      "FEATURED EXPERIENCE INITIALIZED"
    );

    console.log(
      "TOTAL SCENES:",
      sceneController.getTotalScenes()
    );

    console.log(
      sceneController.getAllScenes()
    );

  }, section);
}