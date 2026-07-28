type Listener = (scene: number) => void;

class SceneStore {
  private currentScene = 0;

  private listeners: Listener[] = [];

  getCurrentScene() {
    return this.currentScene;
  }

  setCurrentScene(scene: number) {
    this.currentScene = scene;

    this.listeners.forEach((listener) =>
      listener(scene)
    );
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);

    return () => {
      this.listeners =
        this.listeners.filter(
          (item) => item !== listener
        );
    };
  }
}

export const sceneStore =
  new SceneStore();