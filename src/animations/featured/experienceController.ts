import { ExperienceState } from "@/types/featured";

export class ExperienceController {
  private state: ExperienceState;

  constructor(totalScenes: number) {
    this.state = {
      currentScene: 0,
      totalScenes,
      isLocked: false,
      isAnimating: false,
    };
  }

  getCurrentScene() {
    return this.state.currentScene;
  }

  getTotalScenes() {
    return this.state.totalScenes;
  }

  nextScene() {
    if (
      this.state.currentScene <
      this.state.totalScenes - 1
    ) {
      this.state.currentScene++;
    }
  }

  previousScene() {
    if (this.state.currentScene > 0) {
      this.state.currentScene--;
    }
  }

  lock() {
    this.state.isLocked = true;
  }

  unlock() {
    this.state.isLocked = false;
  }

  startAnimation() {
    this.state.isAnimating = true;
  }

  stopAnimation() {
    this.state.isAnimating = false;
  }

  isLocked() {
    return this.state.isLocked;
  }

  isAnimating() {
    return this.state.isAnimating;
  }

  reset() {
    this.state.currentScene = 0;
  }

  getState() {
    return this.state;
  }
}