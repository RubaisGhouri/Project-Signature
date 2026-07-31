export type ScrollDirection =
  | "up"
  | "down"
  | null;

export class SceneState {
  private currentScene = 0;

  private previousScene = 0;

  private direction: ScrollDirection =
    null;

  private isTransitioning = false;

  /*
    Current Scene.
  */

  getCurrentScene() {
    return this.currentScene;
  }

  setCurrentScene(
    scene: number
  ) {
    this.currentScene = scene;
  }

  /*
    Previous Scene.
  */

  getPreviousScene() {
    return this.previousScene;
  }

  setPreviousScene(
    scene: number
  ) {
    this.previousScene = scene;
  }

  /*
    Scroll Direction.
  */

  getDirection() {
    return this.direction;
  }

  setDirection(
    direction: ScrollDirection
  ) {
    this.direction = direction;
  }

  /*
    Transition State.
  */

  startTransition() {
    this.isTransitioning = true;
  }

  stopTransition() {
    this.isTransitioning = false;
  }

  isAnimating() {
    return this.isTransitioning;
  }

  /*
    Reset.
  */

  reset() {
    this.currentScene = 0;
    this.previousScene = 0;
    this.direction = null;
    this.isTransitioning = false;
  }
}