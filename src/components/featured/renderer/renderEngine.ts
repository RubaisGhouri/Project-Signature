import { SceneController } from "@/animations/featured/sceneController";
import { TransitionManager } from "@/animations/featured/transitionManager";

export class RenderEngine {
  /*
    ============================================================
    SCENE STATE
    ============================================================
  */

  private currentScene = 0;

  private totalScenes = 0;

  /*
    Manual lock controlled by the experience.
    TransitionManager separately controls the
    actual GSAP transition state.
  */

  private isLocked = false;

  /*
    Scene controller owns the registered
    scene definitions.
  */

  private sceneController: SceneController;

  /*
    TransitionManager owns SceneTransition,
    which owns the actual GSAP animations.
  */

  private transitionManager =
    new TransitionManager();

  /*
    ============================================================
    CONSTRUCTOR
    ============================================================
  */

  constructor(
    sceneController: SceneController
  ) {
    this.sceneController =
      sceneController;

    this.totalScenes =
      sceneController.getTotalScenes();
  }

  /*
    ============================================================
    MOVE TO NEXT SCENE
    ============================================================
  */

  nextScene() {
    /*
      Never start another transition while:

      1. RenderEngine is locked
      2. SceneTransition is currently animating
    */

    if (
      this.isLocked ||
      this.transitionManager.isAnimating()
    ) {
      return this.getCurrentSceneObject();
    }

    /*
      Do not move beyond the final scene.
    */

    if (
      this.currentScene >=
      this.totalScenes - 1
    ) {
      return this.getCurrentSceneObject();
    }

    /*
      Current scene.
    */

    const currentSceneObject =
      this.getCurrentSceneObject();

    /*
      Safety check.
    */

    if (!currentSceneObject) {
      return undefined;
    }

    /*
      Calculate next scene index.
    */

    const nextSceneIndex =
      this.currentScene + 1;

    /*
      Get next scene.
    */

    const nextSceneObject =
      this.sceneController.getScene(
        nextSceneIndex
      );

    /*
      Safety check.
    */

    if (!nextSceneObject) {
      return currentSceneObject;
    }

    /*
      Start transition.

      SceneTransition handles:

      - incoming scene preparation
      - outgoing scene animation
      - incoming scene animation
      - DOM cleanup
      - transition lock
      - transition unlock
    */

    const timeline =
      this.transitionManager.next(
        currentSceneObject.id,
        nextSceneObject.id
      );

    /*
      If no timeline was created,
      the transition did not start.

      Keep the current scene unchanged.
    */

    if (!timeline) {
      return currentSceneObject;
    }

    /*
      The transition has successfully started.

      Update the logical scene index now.
      The visual DOM transition is handled
      independently by SceneTransition.
    */

    this.currentScene =
      nextSceneIndex;

    return nextSceneObject;
  }

  /*
    ============================================================
    MOVE TO PREVIOUS SCENE
    ============================================================
  */

  previousScene() {
    /*
      Never start another transition while:

      1. RenderEngine is locked
      2. SceneTransition is currently animating
    */

    if (
      this.isLocked ||
      this.transitionManager.isAnimating()
    ) {
      return this.getCurrentSceneObject();
    }

    /*
      Do not move before the first scene.
    */

    if (
      this.currentScene <= 0
    ) {
      return this.getCurrentSceneObject();
    }

    /*
      Current scene.
    */

    const currentSceneObject =
      this.getCurrentSceneObject();

    /*
      Safety check.
    */

    if (!currentSceneObject) {
      return undefined;
    }

    /*
      Calculate previous scene index.
    */

    const previousSceneIndex =
      this.currentScene - 1;

    /*
      Get previous scene.
    */

    const previousSceneObject =
      this.sceneController.getScene(
        previousSceneIndex
      );

    /*
      Safety check.
    */

    if (!previousSceneObject) {
      return currentSceneObject;
    }

    /*
      Start transition.
    */

    const timeline =
      this.transitionManager.previous(
        currentSceneObject.id,
        previousSceneObject.id
      );

    /*
      If no timeline was created,
      the transition did not start.

      Keep the current scene unchanged.
    */

    if (!timeline) {
      return currentSceneObject;
    }

    /*
      Transition successfully started.

      Update logical scene index.
    */

    this.currentScene =
      previousSceneIndex;

    return previousSceneObject;
  }

  /*
    ============================================================
    GET CURRENT SCENE INDEX
    ============================================================
  */

  getCurrentScene() {
    return this.currentScene;
  }

  /*
    ============================================================
    GET TOTAL SCENES
    ============================================================
  */

  getTotalScenes() {
    return this.totalScenes;
  }

  /*
    ============================================================
    GET CURRENT SCENE OBJECT
    ============================================================
  */

  getCurrentSceneObject() {
    return this.sceneController.getScene(
      this.currentScene
    );
  }

  /*
    ============================================================
    GET SCENE BY INDEX
    ============================================================
  */

  getScene(index: number) {
    return this.sceneController.getScene(
      index
    );
  }

  /*
    ============================================================
    ANIMATION STATE
    ============================================================
  */

  isTransitioning() {
    return (
      this.transitionManager.isAnimating()
    );
  }

  /*
    ============================================================
    MANUAL LOCK
    ============================================================
  */

  lock() {
    this.isLocked = true;
  }

  unlock() {
    this.isLocked = false;
  }

  isLockedState() {
    return this.isLocked;
  }

  /*
    ============================================================
    RESET EXPERIENCE
    ============================================================
  */

  reset() {
    /*
      Reset logical scene index.
    */

    this.currentScene = 0;

    /*
      Release manual lock.
    */

    this.isLocked = false;

    /*
      Reset transition manager.

      This will reset SceneTransition's
      internal transition lock.
    */

    this.transitionManager.reset();
  }
}