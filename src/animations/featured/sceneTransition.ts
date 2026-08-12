import { gsap } from "@/lib/gsap";

export type SceneTransitionDirection =
  | "next"
  | "previous";

export class SceneTransition {
  /*
    ============================================================
    TRANSITION STATE
    ============================================================
  */

  private isLocked = false;

  /*
    ============================================================
    TRANSITION CONFIGURATION
    ============================================================
  */

  private readonly duration = 0.75;

  private readonly enteringScale = 0.965;

  private readonly offset = 45;

  /*
    ============================================================
    LOCK
    ============================================================
  */

  lock() {
    this.isLocked = true;
  }

  /*
    ============================================================
    UNLOCK
    ============================================================
  */

  unlock() {
    this.isLocked = false;
  }

  /*
    ============================================================
    STATE
    ============================================================
  */

  isTransitioning() {
    return this.isLocked;
  }

  /*
    ============================================================
    GET SCENE ELEMENT
    ============================================================
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
    ============================================================
    GET ALL SCENE ELEMENTS
    ============================================================
  */

  getSceneElements(): HTMLElement[] {
    if (
      typeof document === "undefined"
    ) {
      return [];
    }

    return Array.from(
      document.querySelectorAll(
        "[data-scene-id]"
      )
    ) as HTMLElement[];
  }

  /*
    ============================================================
    BASE TIMELINE
    ============================================================
  */

  private createTimeline() {
    return gsap.timeline({
      defaults: {
        overwrite: "auto",
      },
    });
  }

  /*
    ============================================================
    PREPARE ENTERING SCENE
    ============================================================
  */

  private prepareEnteringScene(
    element: HTMLElement,
    direction: SceneTransitionDirection
  ) {
    const enteringX =
      direction === "next"
        ? this.offset
        : -this.offset;

    gsap.killTweensOf(element);

    gsap.set(element, {
      opacity: 0,
      x: enteringX,
      scale: this.enteringScale,
      zIndex: 20,
      pointerEvents: "none",
      willChange:
        "transform, opacity",
    });
  }

  /*
    ============================================================
    PREPARE CURRENT SCENE
    ============================================================
  */

  private prepareCurrentScene(
    element: HTMLElement
  ) {
    gsap.killTweensOf(element);

    gsap.set(element, {
      opacity: 1,
      x: 0,
      scale: 1,
      zIndex: 10,
      pointerEvents: "none",
      willChange:
        "transform, opacity",
    });
  }

  /*
    ============================================================
    ACTIVATE SCENE
    ============================================================
  */

  private activateScene(
    element: HTMLElement
  ) {
    gsap.set(element, {
      opacity: 1,
      x: 0,
      scale: 1,
      zIndex: 10,
      pointerEvents: "auto",
      willChange: "auto",
    });
  }

  /*
    ============================================================
    DEACTIVATE SCENE
    ============================================================
  */

  private deactivateScene(
    element: HTMLElement
  ) {
    gsap.killTweensOf(element);

    gsap.set(element, {
      opacity: 0,
      x: 0,
      scale: 1,
      zIndex: 0,
      pointerEvents: "none",
      willChange: "auto",
    });
  }

  /*
    ============================================================
    FORCE DETERMINISTIC STATE
    ============================================================
  */

  private forceSceneState(
    activeScene: HTMLElement
  ) {
    const elements =
      this.getSceneElements();

    elements.forEach(
      (element) => {
        if (
          element === activeScene
        ) {
          this.activateScene(
            element
          );
        } else {
          this.deactivateScene(
            element
          );
        }
      }
    );
  }

  /*
    ============================================================
    TRANSITION
    ============================================================
  */

  transition(
    currentSceneId: string,
    nextSceneId: string,
    direction: SceneTransitionDirection
  ) {
    /*
      ----------------------------------------------------------
      PREVENT OVERLAPPING TRANSITIONS
      ----------------------------------------------------------
    */

    if (this.isLocked) {
      return null;
    }

    /*
      ----------------------------------------------------------
      GET DOM ELEMENTS
      ----------------------------------------------------------
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
      ----------------------------------------------------------
      VALIDATION
      ----------------------------------------------------------
    */

    if (
      !currentScene ||
      !nextScene
    ) {
      console.warn(
        "Scene transition elements not found:",
        {
          currentSceneId,
          nextSceneId,
        }
      );

      return null;
    }

    /*
      Same element protection.
    */

    if (
      currentScene ===
      nextScene
    ) {
      return null;
    }

    /*
      ----------------------------------------------------------
      LOCK IMMEDIATELY
      ----------------------------------------------------------
    */

    this.lock();

    /*
      ----------------------------------------------------------
      PREPARE SCENES
      ----------------------------------------------------------
    */

    this.prepareEnteringScene(
      nextScene,
      direction
    );

    this.prepareCurrentScene(
      currentScene
    );

    /*
      ----------------------------------------------------------
      CREATE TIMELINE
      ----------------------------------------------------------
    */

    const timeline =
      this.createTimeline();

    /*
      ----------------------------------------------------------
      CURRENT SCENE → EXIT
      ----------------------------------------------------------
    */

    timeline.to(
      currentScene,
      {
        x:
          direction === "next"
            ? -this.offset
            : this.offset,

        opacity: 0,

        scale:
          this.enteringScale,

        duration:
          this.duration,

        ease: "power3.inOut",
      },
      0
    );

    /*
      ----------------------------------------------------------
      NEXT SCENE → ENTER
      ----------------------------------------------------------
    */

    timeline.to(
      nextScene,
      {
        x: 0,

        opacity: 1,

        scale: 1,

        duration:
          this.duration,

        ease: "power3.out",
      },
      0
    );

    /*
      ----------------------------------------------------------
      COMPLETE
      ----------------------------------------------------------
    */

    timeline.call(() => {
      /*
        Force ALL scenes into a deterministic
        final state.

        Only nextScene remains visible.
      */

      this.forceSceneState(
        nextScene
      );

      /*
        Transition finished.
      */

      this.unlock();
    });

    /*
      ----------------------------------------------------------
      INTERRUPT SAFETY
      ----------------------------------------------------------
    */

    timeline.eventCallback(
      "onInterrupt",
      () => {
        /*
          If GSAP interrupts the animation,
          don't leave multiple scenes visible.

          The intended destination scene
          becomes the active scene.
        */

        this.forceSceneState(
          nextScene
        );

        this.unlock();
      }
    );

    /*
      ----------------------------------------------------------
      RETURN TIMELINE
      ----------------------------------------------------------
    */

    return timeline;
  }

  /*
    ============================================================
    NEXT SCENE
    ============================================================
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
    ============================================================
    PREVIOUS SCENE
    ============================================================
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
    ============================================================
    RESET
    ============================================================
  */

  reset() {
    const elements =
      this.getSceneElements();

    /*
      Kill every active scene tween.
    */

    elements.forEach(
      (element) => {
        gsap.killTweensOf(
          element
        );
      }
    );

    /*
      No scenes available.
    */

    if (
      elements.length === 0
    ) {
      this.unlock();

      return;
    }

    /*
      Scene 0 becomes the only
      active scene.
    */

    this.forceSceneState(
      elements[0]
    );

    /*
      Reset transition lock.
    */

    this.unlock();
  }
}