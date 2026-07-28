import { SceneController } from "../sceneController";

export class RenderEngine {
  private currentScene = 0;

  private totalScenes = 0;

  private isAnimating = false;

  private isLocked = false;

  private sceneController: SceneController;

  constructor(
    sceneController: SceneController
  ) {
    this.sceneController =
      sceneController;

    this.totalScenes =
      sceneController.getTotalScenes();
  }

  /*
    Move to next scene.
  */

  nextScene() {
    if (
      this.isAnimating ||
      this.isLocked
    ) {
      return this.getCurrentSceneObject();
    }

    if (
      this.currentScene <
      this.totalScenes - 1
    ) {
      this.currentScene++;
    }

    return this.getCurrentSceneObject();
  }

  /*
    Move to previous scene.
  */

  previousScene() {
    if (
      this.isAnimating ||
      this.isLocked
    ) {
      return this.getCurrentSceneObject();
    }

    if (this.currentScene > 0) {
      this.currentScene--;
    }

    return this.getCurrentSceneObject();
  }

  /*
    Get current scene index.
  */

  getCurrentScene() {
    return this.currentScene;
  }

  /*
    Total scenes.
  */

  getTotalScenes() {
    return this.totalScenes;
  }

  /*
    Get current scene object.
  */

  getCurrentSceneObject() {
    return this.sceneController.getScene(
      this.currentScene
    );
  }

  /*
    Animation Controls.
  */

  startAnimation() {
    this.isAnimating = true;
  }

  stopAnimation() {
    this.isAnimating = false;
  }

  isTransitioning() {
    return this.isAnimating;
  }

  /*
    Lock Controls.
  */

  lock() {
    this.isLocked = true;
  }

  unlock() {
    this.isLocked = false;
  }

  /*
    Reset Experience.
  */

  reset() {
    this.currentScene = 0;
  }
}