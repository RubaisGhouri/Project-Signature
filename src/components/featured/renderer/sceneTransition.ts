import { gsap } from "@/lib/gsap";

type Direction = "next" | "previous";

export class SceneTransition {
  private isLocked = false;

  private readonly duration = 0.8;

  /*
    ----------------------------------------
    LOCK
    ----------------------------------------
  */

  lock() {
    this.isLocked = true;
  }

  /*
    ----------------------------------------
    UNLOCK
    ----------------------------------------
  */

  unlock() {
    this.isLocked = false;
  }

  /*
    ----------------------------------------
    TRANSITION STATE
    ----------------------------------------
  */

  isTransitioning() {
    return this.isLocked;
  }

  /*
    ----------------------------------------
    GET SCENE ELEMENT
    ----------------------------------------
  */

  getSceneElement(
    sceneId: string
  ): HTMLElement | null {
    if (
      typeof document === "undefined"
    ) {
      return null;
    }

    return document.querySelector(
      `[data-scene-id="${sceneId}"]`
    );
  }

  /*
    ----------------------------------------
    GET ALL SCENE ELEMENTS
    ----------------------------------------
  */

  getSceneElements(): HTMLElement[] {
    if (
      typeof document === "undefined"
    ) {
      return [];
    }

    return Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-scene-id]"
      )
    );
  }

  /*
    ----------------------------------------
    BASE TIMELINE
    ----------------------------------------
  */

  playTimeline() {
    return gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
    });
  }

  /*
    ----------------------------------------
    PREPARE ENTERING SCENE
    ----------------------------------------
  */

  private prepareEnteringScene(
    element: HTMLElement,
    direction: Direction
  ) {
    gsap.set(element, {
      opacity: 0,
      x:
        direction === "next"
          ? 50
          : -50,
      y: 0,
      scale: 0.97,
      zIndex: 20,
      pointerEvents: "none",
      force3D: true,
    });
  }

  /*
    ----------------------------------------
    PREPARE LEAVING SCENE
    ----------------------------------------
  */

  private prepareLeavingScene(
    element: HTMLElement,
    direction: Direction
  ) {
    gsap.set(element, {
      zIndex: 10,
      pointerEvents: "none",
      force3D: true,
    });

    return {
      x:
        direction === "next"
          ? -50
          : 50,
      y: 0,
      scale: 0.97,
      opacity: 0,
      force3D: true,
    };
  }

  /*
    ----------------------------------------
    ACTIVATE SCENE
    ----------------------------------------
  */

  private activateScene(
    element: HTMLElement
  ) {
    gsap.set(element, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      zIndex: 10,
      pointerEvents: "auto",
      force3D: true,
    });
  }

  /*
    ----------------------------------------
    DEACTIVATE SCENE
    ----------------------------------------
  */

  private deactivateScene(
    element: HTMLElement
  ) {
    gsap.set(element, {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0.97,
      zIndex: 0,
      pointerEvents: "none",
      force3D: true,
    });
  }

  /*
    ----------------------------------------
    TRANSITION
    ----------------------------------------
  */

  transition(
    currentSceneId: string,
    nextSceneId: string,
    direction: Direction
  ) {
    /*
      Prevent duplicate transitions.
    */

    if (this.isLocked) {
      return null;
    }

    /*
      Find DOM elements.
    */

    const currentScene =
      this.getSceneElement(
        currentSceneId
      );

    const nextScene =
      this.getSceneElement(
        nextSceneId
      );

    /*
      Invalid scene protection.
    */

    if (
      !currentScene ||
      !nextScene ||
      currentScene === nextScene
    ) {
      return null;
    }

    /*
      Lock immediately.
    */

    this.lock();

    /*
      Kill any previous GSAP
      animation affecting these scenes.
    */

    gsap.killTweensOf([
      currentScene,
      nextScene,
    ]);

    /*
      Make sure incoming scene
      starts from a deterministic state.
    */

    this.prepareEnteringScene(
      nextScene,
      direction
    );

    /*
      Make sure current scene
      is the active layer.
    */

    gsap.set(currentScene, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      zIndex: 10,
      pointerEvents: "none",
      force3D: true,
    });

    /*
      Create timeline.
    */

    const timeline =
      this.playTimeline();

    /*
      ----------------------------------------
      CURRENT SCENE
      ----------------------------------------
    */

    timeline.to(
      currentScene,
      {
        ...this.prepareLeavingScene(
          currentScene,
          direction
        ),
        duration: this.duration,
      },
      0
    );

    /*
      ----------------------------------------
      NEXT SCENE
      ----------------------------------------
    */

    timeline.to(
      nextScene,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: this.duration,
        force3D: true,
      },
      0
    );

    /*
      ----------------------------------------
      COMPLETE
      ----------------------------------------
    */

    timeline.eventCallback(
      "onComplete",
      () => {
        /*
          Completely reset old scene.
        */

        this.deactivateScene(
          currentScene
        );

        /*
          Activate new scene.
        */

        this.activateScene(
          nextScene
        );

        /*
          Unlock wheel interaction.
        */

        this.unlock();
      }
    );

    /*
      ----------------------------------------
      INTERRUPTED
      ----------------------------------------
    */

    timeline.eventCallback(
      "onInterrupt",
      () => {
        /*
          If animation is interrupted,
          restore a predictable state.
        */

        this.unlock();
      }
    );

    /*
      ----------------------------------------
      RETURN TIMELINE
      ----------------------------------------
    */

    return timeline;
  }

  /*
    ----------------------------------------
    NEXT
    ----------------------------------------
  */

  transitionToNext(
    currentSceneId: string,
    nextSceneId: string
  ) {
    return this.transition(
      currentSceneId,
      nextSceneId,
      "next"
    );
  }

  /*
    ----------------------------------------
    PREVIOUS
    ----------------------------------------
  */

  transitionToPrevious(
    currentSceneId: string,
    previousSceneId: string
  ) {
    return this.transition(
      currentSceneId,
      previousSceneId,
      "previous"
    );
  }

  /*
    ----------------------------------------
    RESET
    ----------------------------------------
  */

  reset() {
    this.isLocked = false;

    const scenes =
      this.getSceneElements();

    scenes.forEach(
      (scene, index) => {
        if (index === 0) {
          this.activateScene(scene);
        } else {
          this.deactivateScene(scene);
        }
      }
    );
  }
}