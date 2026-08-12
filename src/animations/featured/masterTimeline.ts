import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { SceneController } from "./sceneController";
import {
  WheelController,
  WheelDirection,
} from "./wheelController";

import { RenderEngine } from "@/components/featured/renderer/renderEngine";

import { WelcomeScene } from "./scenes/welcome";
import { ProjectSignatureScene } from "./scenes/projectSignature";
import { QuantNovaScene } from "./scenes/quantnova";
import { SelectedWorksScene } from "./scenes/selectedWorks";
import { PhilosophyScene } from "./scenes/philosophy";
import { CTAScene } from "./scenes/cta";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin
);

export function animateFeaturedProjects(
  section: HTMLElement
) {
  return gsap.context(() => {
    /*
      ============================================================
      SCENE CONTROLLER
      ============================================================
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
      ============================================================
      RENDER ENGINE
      ============================================================
    */

    const renderEngine =
      new RenderEngine(
        sceneController
      );

    const totalScenes =
      renderEngine.getTotalScenes();

    /*
      ============================================================
      SCROLL DISTANCE
      ============================================================
    */

    const getScrollDistance = () => {
      return Math.max(
        0,
        (totalScenes - 1) *
          window.innerHeight
      );
    };

    /*
      ============================================================
      SCROLLTRIGGER
      ============================================================

      ScrollTrigger owns ONLY the page pinning.

      It does NOT control scene animation.

      The scene system remains completely independent.
    */

    const pinTrigger =
      ScrollTrigger.create({
        trigger: section,

        start: "top top",

        end: () =>
          `+=${getScrollDistance()}`,

        pin: true,

        pinSpacing: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        scrub: false,

        markers: false,
      });

    /*
      ============================================================
      WHEEL CONTROLLER
      ============================================================
    */

    const wheelController =
      new WheelController();

    /*
      ============================================================
      SCROLL POSITION HELPERS
      ============================================================
    */

    const getSceneScrollPosition = (
      sceneIndex: number
    ) => {
      const sceneHeight =
        window.innerHeight;

      const start =
        pinTrigger.start;

      const target =
        start +
        sceneIndex *
          sceneHeight;

      return Math.min(
        target,
        pinTrigger.end
      );
    };

    /*
      ============================================================
      MOVE BROWSER TO SCENE
      ============================================================
    */

    const moveToScenePosition = (
      sceneIndex: number
    ) => {
      const target =
        getSceneScrollPosition(
          sceneIndex
        );

      return gsap.to(window, {
        duration: 0.8,

        scrollTo: {
          y: target,
          autoKill: false,
        },

        ease: "power3.inOut",

        overwrite: "auto",
      });
    };

    /*
      ============================================================
      WAIT FOR TRANSITION
      ============================================================
    */

    let transitionFrame = 0;

    const waitForTransition =
      () => {
        cancelAnimationFrame(
          transitionFrame
        );

        const check = () => {
          if (
            !renderEngine.isTransitioning()
          ) {
            wheelController.unlock();

            return;
          }

          transitionFrame =
            requestAnimationFrame(
              check
            );
        };

        transitionFrame =
          requestAnimationFrame(
            check
          );
      };

    /*
      ============================================================
      WHEEL CALLBACK
      ============================================================
    */

    wheelController.setCallback(
      (
        direction: WheelDirection
      ) => {
        /*
          ScrollTrigger must currently
          own the viewport.
        */

        if (!pinTrigger.isActive) {
          return false;
        }

        /*
          Current scene.
        */

        const currentIndex =
          renderEngine.getCurrentScene();

        const lastIndex =
          totalScenes - 1;

        /*
          ========================================================
          DOWN
          ========================================================
        */

        if (
          direction === "down"
        ) {
          /*
            Final scene reached.

            Do NOT consume this wheel event.
            Browser is allowed to continue
            scrolling to the next page section.
          */

          if (
            currentIndex >=
            lastIndex
          ) {
            return false;
          }

          /*
            Calculate next scene.
          */

          const nextIndex =
            currentIndex + 1;

          /*
            Start scene transition.
          */

          const nextScene =
            renderEngine.nextScene();

          /*
            If transition did not start,
            do not consume the event.
          */

          if (
            nextScene.id ===
              renderEngine
                .getCurrentSceneObject()
                .id &&
            currentIndex ===
              renderEngine.getCurrentScene()
          ) {
            return false;
          }

          /*
            Move browser scroll position
            to the corresponding scene.
          */

          moveToScenePosition(
            nextIndex
          );

          /*
            Lock wheel until both scene
            animation and scroll movement
            have settled.
          */

          wheelController.lock();

          waitForTransition();

          return true;
        }

        /*
          ========================================================
          UP
          ========================================================
        */

        if (
          direction === "up"
        ) {
          /*
            First scene.

            Do NOT consume this event.
            Browser can naturally move back
            to the previous page section.
          */

          if (
            currentIndex <= 0
          ) {
            return false;
          }

          /*
            Calculate previous scene.
          */

          const previousIndex =
            currentIndex - 1;

          /*
            Start scene transition.
          */

          const previousScene =
            renderEngine.previousScene();

          /*
            Safety check.
          */

          if (
            previousScene.id ===
              renderEngine
                .getCurrentSceneObject()
                .id &&
            currentIndex ===
              renderEngine.getCurrentScene()
          ) {
            return false;
          }

          /*
            Move browser scroll position
            to the corresponding scene.
          */

          moveToScenePosition(
            previousIndex
          );

          /*
            Lock until transition completes.
          */

          wheelController.lock();

          waitForTransition();

          return true;
        }

        return false;
      }
    );

    /*
      ============================================================
      INITIAL SCENE
      ============================================================
    */

    const initialScene =
      renderEngine.getCurrentSceneObject();

    const initialElement =
      section.querySelector(
        `[data-scene-id="${initialScene.id}"]`
      );

    if (initialElement) {
      gsap.set(
        initialElement,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          zIndex: 10,
          pointerEvents: "auto",
        }
      );
    }

    /*
      ============================================================
      RESET OTHER SCENES
      ============================================================
    */

    const allSceneElements =
      Array.from(
        section.querySelectorAll(
          "[data-scene-id]"
        )
      ) as HTMLElement[];

    allSceneElements.forEach(
      (element) => {
        if (
          element ===
          initialElement
        ) {
          return;
        }

        gsap.set(
          element,
          {
            opacity: 0,
            x: 0,
            scale: 0.96,
            zIndex: 0,
            pointerEvents: "none",
          }
        );
      }
    );

    /*
      ============================================================
      INITIAL SCROLL POSITION
      ============================================================
    */

    const currentScroll =
      window.scrollY;

    const featuredStart =
      pinTrigger.start;

    /*
      Only normalize the position when
      the section is already being entered.

      This prevents the page from jumping
      to FeaturedStage during initial load.
    */

    if (
      currentScroll >=
      featuredStart
    ) {
      window.scrollTo({
        top: featuredStart,
        behavior: "auto",
      });
    }

    /*
      ============================================================
      REFRESH HANDLING
      ============================================================
    */

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    /*
      ============================================================
      INITIALIZE WHEEL
      ============================================================
    */

    wheelController.init(
      section
    );

    /*
      ============================================================
      DEBUG
      ============================================================
    */

    console.log(
      "========================================"
    );

    console.log(
      "FEATURED EXPERIENCE INITIALIZED"
    );

    console.log(
      "TOTAL SCENES:",
      totalScenes
    );

    console.log(
      "PIN START:",
      pinTrigger.start
    );

    console.log(
      "PIN END:",
      pinTrigger.end
    );

    console.log(
      "SCENE HEIGHT:",
      window.innerHeight
    );

    console.log(
      "========================================"
    );

    /*
      ============================================================
      CLEANUP
      ============================================================
    */

    return () => {
      /*
        Cancel transition polling.
      */

      cancelAnimationFrame(
        transitionFrame
      );

      /*
        Remove resize listener.
      */

      window.removeEventListener(
        "resize",
        handleResize
      );

      /*
        Destroy wheel controller.
      */

      wheelController.destroy();

      /*
        Kill active window scroll
        animations.
      */

      gsap.killTweensOf(
        window
      );

      /*
        Kill ScrollTrigger.
      */

      pinTrigger.kill();
    };
  }, section);
}