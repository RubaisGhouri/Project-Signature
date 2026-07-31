import { gsap } from "@/lib/gsap";

export class SceneTransition {
  private isLocked = false;

  /*
    Lock transition.
  */

  lock() {
    this.isLocked = true;
  }

  /*
    Unlock transition.
  */

  unlock() {
    this.isLocked = false;
  }

  /*
    Check transition state.
  */

  isTransitioning() {
    return this.isLocked;
  }

  /*
    Get scene element.
  */

  getSceneElement(
    sceneId: string
  ): HTMLElement | null {
    return document.querySelector(
      `[data-scene-id="${sceneId}"]`
    );
  }

  /*
    Placeholder GSAP Timeline.
  */

  playTimeline() {
    return gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    });
  }

  /*
    Transition to next scene.
  */

  transitionToNext() {
    console.log(
      "Transition -> Next Scene"
    );
  }

  /*
    Transition to previous scene.
  */

  transitionToPrevious() {
    console.log(
      "Transition -> Previous Scene"
    );
  }
}