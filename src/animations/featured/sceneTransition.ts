import { gsap } from "@/lib/gsap";

export class SceneTransition {
  private isLocked = false;

  lock() {
    this.isLocked = true;
  }

  unlock() {
    this.isLocked = false;
  }

  isTransitioning() {
    return this.isLocked;
  }

  getSceneElement(
    sceneId: string
  ): HTMLElement | null {
    return document.querySelector(
      `[data-scene-id="${sceneId}"]`
    );
  }

  transition(
    currentSceneId: string,
    nextSceneId: string
  ) {
    const currentScene =
      this.getSceneElement(currentSceneId);

    const nextScene =
      this.getSceneElement(nextSceneId);

    if (!currentScene || !nextScene) {
      return;
    }

    this.lock();

    nextScene.style.pointerEvents =
      "auto";

    gsap.set(nextScene, {
      opacity: 0,
      scale: 0.95,
      zIndex: 20,
    });

    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power3.inOut",
      },

      onComplete: () => {
        currentScene.style.pointerEvents =
          "none";

        nextScene.style.pointerEvents =
          "auto";

        this.unlock();
      },
    });

    tl.to(currentScene, {
      opacity: 0,
      scale: 0.95,
      zIndex: 0,
    });

    tl.to(
      nextScene,
      {
        opacity: 1,
        scale: 1,
      },
      "<"
    );
  }
}