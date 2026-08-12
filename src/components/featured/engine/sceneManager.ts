export class SceneManager {
  private currentScene = 0;

  private readonly totalScenes: number;

  constructor(totalScenes: number) {
    this.totalScenes = Math.max(
      0,
      totalScenes
    );
  }

  /*
    ============================================================
    CURRENT SCENE
    ============================================================
  */

  getCurrentScene() {
    return this.currentScene;
  }

  /*
    ============================================================
    NEXT SCENE
    ============================================================
  */

  getNextScene() {
    if (
      this.totalScenes <= 0 ||
      this.isLastScene()
    ) {
      return this.currentScene;
    }

    return this.currentScene + 1;
  }

  /*
    ============================================================
    PREVIOUS SCENE
    ============================================================
  */

  getPreviousScene() {
    if (
      this.totalScenes <= 0 ||
      this.isFirstScene()
    ) {
      return this.currentScene;
    }

    return this.currentScene - 1;
  }

  /*
    ============================================================
    MOVE NEXT
    ============================================================
  */

  nextScene() {
    if (
      this.totalScenes <= 0 ||
      this.isLastScene()
    ) {
      return this.currentScene;
    }

    this.currentScene += 1;

    return this.currentScene;
  }

  /*
    ============================================================
    MOVE PREVIOUS
    ============================================================
  */

  previousScene() {
    if (
      this.totalScenes <= 0 ||
      this.isFirstScene()
    ) {
      return this.currentScene;
    }

    this.currentScene -= 1;

    return this.currentScene;
  }

  /*
    ============================================================
    FIRST SCENE CHECK
    ============================================================
  */

  isFirstScene() {
    return (
      this.currentScene === 0
    );
  }

  /*
    ============================================================
    LAST SCENE CHECK
    ============================================================
  */

  isLastScene() {
    return (
      this.totalScenes > 0 &&
      this.currentScene ===
        this.totalScenes - 1
    );
  }

  /*
    ============================================================
    TOTAL SCENES
    ============================================================
  */

  getTotalScenes() {
    return this.totalScenes;
  }

  /*
    ============================================================
    SET SCENE
    ============================================================
  */

  setScene(index: number) {
    if (
      this.totalScenes <= 0
    ) {
      this.currentScene = 0;

      return this.currentScene;
    }

    this.currentScene =
      Math.max(
        0,
        Math.min(
          index,
          this.totalScenes - 1
        )
      );

    return this.currentScene;
  }

  /*
    ============================================================
    RESET
    ============================================================
  */

  reset() {
    this.currentScene = 0;

    return this.currentScene;
  }
}