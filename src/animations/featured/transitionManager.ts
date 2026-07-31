import { SceneTransition } from "./sceneTransition";

export class TransitionManager {
  private transition = new SceneTransition();

  next(
    currentSceneId: string,
    nextSceneId: string
  ) {
    this.transition.transition(
      currentSceneId,
      nextSceneId
    );
  }

  previous(
    currentSceneId: string,
    previousSceneId: string
  ) {
    this.transition.transition(
      currentSceneId,
      previousSceneId
    );
  }

  isAnimating() {
    return this.transition.isTransitioning();
  }
}