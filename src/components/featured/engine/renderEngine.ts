import { SceneManager } from "./sceneManager";

export class RenderEngine {
  private sceneManager: SceneManager;

  constructor(totalScenes: number) {
    this.sceneManager =
      new SceneManager(totalScenes);
  }

  next() {
    this.sceneManager.nextScene();

    this.logCurrentScene();
  }

  previous() {
    this.sceneManager.previousScene();

    this.logCurrentScene();
  }

  getCurrentScene() {
    return this.sceneManager.getCurrentScene();
  }

  getNextScene() {
    return this.sceneManager.getNextScene();
  }

  getPreviousScene() {
    return this.sceneManager.getPreviousScene();
  }

  isFirstScene() {
    return this.sceneManager.isFirstScene();
  }

  isLastScene() {
    return this.sceneManager.isLastScene();
  }

  private logCurrentScene() {
    console.log(
      "ACTIVE SCENE:",
      this.sceneManager.getCurrentScene()
    );
  }
}