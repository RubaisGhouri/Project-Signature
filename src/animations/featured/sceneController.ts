import { Scene } from "@/types/featured";

export class SceneController {
  private scenes: Scene[] = [];

  register(scene: Scene) {
    this.scenes.push(scene);
  }

  getScene(index: number) {
    return this.scenes[index];
  }

  getTotalScenes() {
    return this.scenes.length;
  }

  getAllScenes() {
    return this.scenes;
  }

  clear() {
    this.scenes = [];
  }
}