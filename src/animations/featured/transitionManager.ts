import { SceneTransition } from "./sceneTransition";

export class TransitionManager {
  /*
    ============================================================
    SCENE TRANSITION
    ============================================================
  */

  private readonly transition =
    new SceneTransition();

  /*
    ============================================================
    TRANSITION TO NEXT SCENE
    ============================================================
  */

  next(
    currentSceneId: string,
    nextSceneId: string
  ) {
    return this.transition.transitionToNext(
      currentSceneId,
      nextSceneId
    );
  }

  /*
    ============================================================
    TRANSITION TO PREVIOUS SCENE
    ============================================================
  */

  previous(
    currentSceneId: string,
    previousSceneId: string
  ) {
    return this.transition.transitionToPrevious(
      currentSceneId,
      previousSceneId
    );
  }

  /*
    ============================================================
    TRANSITION STATE
    ============================================================
  */

  isAnimating() {
    return this.transition.isTransitioning();
  }

  /*
    ============================================================
    LOCK
    ============================================================
  */

  lock() {
    this.transition.lock();
  }

  /*
    ============================================================
    UNLOCK
    ============================================================
  */

  unlock() {
    this.transition.unlock();
  }

  /*
    ============================================================
    RESET
    ============================================================
  */

  reset() {
    this.transition.reset();
  }
}