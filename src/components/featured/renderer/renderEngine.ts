import { SceneController } from "@/animations/featured/sceneController";
import { TransitionManager } from "@/animations/featured/transitionManager";

export class RenderEngine {
  private currentScene = 0;

  private totalScenes = 0;

  private isAnimating = false;

  private isLocked = false;

  private sceneController: SceneController;

  private transitionManager =
    new TransitionManager();

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
      this.currentScene >=
      this.totalScenes - 1
    ) {
      return this.getCurrentSceneObject();
    }

    const currentSceneObject =
      this.getCurrentSceneObject();

    this.currentScene++;

    const nextSceneObject =
      this.getCurrentSceneObject();

    this.transitionManager.next(
      currentSceneObject.id,
      nextSceneObject.id
    );

    return nextSceneObject;
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
        if (this.currentScene <= 0) {
      return this.getCurrentSceneObject();
    }

    const currentSceneObject =
      this.getCurrentSceneObject();

    this.currentScene--;

    const previousSceneObject =
      this.getCurrentSceneObject();

    this.transitionManager.previous(
      currentSceneObject.id,
      previousSceneObject.id
    );

    return previousSceneObject;
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