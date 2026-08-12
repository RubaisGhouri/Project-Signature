import { Scene } from "@/types/featured";

export class SceneController {
  private scenes: Scene[] = [];

  /*
    ============================================================
    REGISTER SCENE
    ============================================================
  */

  register(scene: Scene) {
    if (!scene) {
      return;
    }

    /*
      Prevent duplicate scene IDs.
    */

    const alreadyExists =
      this.scenes.some(
        (existingScene) =>
          existingScene.id === scene.id
      );

    if (alreadyExists) {
      console.warn(
        `Scene "${scene.id}" is already registered.`
      );

      return;
    }

    this.scenes.push(scene);
  }

  /*
    ============================================================
    GET SCENE
    ============================================================
  */

  getScene(index: number) {
    if (
      index < 0 ||
      index >= this.scenes.length
    ) {
      return undefined;
    }

    return this.scenes[index];
  }

  /*
    ============================================================
    GET SCENE BY ID
    ============================================================
  */

  getSceneById(id: string) {
    return this.scenes.find(
      (scene) =>
        scene.id === id
    );
  }

  /*
    ============================================================
    GET CURRENT / SAFE SCENE
    ============================================================
  */

  getSafeScene(index: number) {
    if (
      this.scenes.length === 0
    ) {
      return undefined;
    }

    const safeIndex =
      Math.max(
        0,
        Math.min(
          index,
          this.scenes.length - 1
        )
      );

    return this.scenes[
      safeIndex
    ];
  }

  /*
    ============================================================
    TOTAL SCENES
    ============================================================
  */

  getTotalScenes() {
    return this.scenes.length;
  }

  /*
    ============================================================
    ALL SCENES
    ============================================================
  */

  getAllScenes() {
    return [...this.scenes];
  }

  /*
    ============================================================
    HAS SCENES
    ============================================================
  */

  hasScenes() {
    return this.scenes.length > 0;
  }

  /*
    ============================================================
    CLEAR
    ============================================================
  */

  clear() {
    this.scenes = [];
  }
}