import { gsap } from "@/lib/gsap";

export class SceneTransition {
  private isLocked = false;

  /*
    Prevent multiple transitions.
  */

  lock() {
    this.isLocked = true;
  }

  unlock() {
    this.isLocked = false;
  }

  isTransitioning() {
    return this.isLocked;
  }

  /*
    Get scene element from DOM.
  */

  getSceneElement(
    sceneId: string
  ): HTMLElement | null {
    return document.querySelector(
      `[data-scene-id="${sceneId}"]`
    );
  }

  /*
    Placeholder timeline.
  */

  playTimeline() {
    return gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    });
  }

  /*
    Next scene transition.
  */

  transitionToNext() {
    console.log(
      "Transition -> Next Scene"
    );
  }

  /*
    Previous scene transition.
  */

  transitionToPrevious() {
    console.log(
      "Transition -> Previous Scene"
    );
  }
}