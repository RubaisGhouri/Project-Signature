export class SceneManager {
  private currentScene = 0;
  private totalScenes: number;

  constructor(totalScenes: number) {
    this.totalScenes = totalScenes;
  }

  getCurrentScene() {
    return this.currentScene;
  }

  getNextScene() {
    if (this.isLastScene()) {
      return this.currentScene;
    }

    return this.currentScene + 1;
  }

  getPreviousScene() {
    if (this.isFirstScene()) {
      return this.currentScene;
    }

    return this.currentScene - 1;
  }

  nextScene() {
    if (!this.isLastScene()) {
      this.currentScene++;
    }
  }

  previousScene() {
    if (!this.isFirstScene()) {
      this.currentScene--;
    }
  }

  isFirstScene() {
    return this.currentScene === 0;
  }

  isLastScene() {
    return (
      this.currentScene ===
      this.totalScenes - 1
    );
  }

  reset() {
    this.currentScene = 0;
  }

  getTotalScenes() {
    return this.totalScenes;
  }
}