export interface Scene {
  id: string;

  enter: () => void;

  play: () => void;

  exit: () => void;

  destroy?: () => void;
}

export interface ExperienceState {
  currentScene: number;
  totalScenes: number;

  isLocked: boolean;
  isAnimating: boolean;
}

export interface SceneConfig {
  id: string;
  wheelLocked?: boolean;
  allowReverse?: boolean;
}

export type TransitionDirection =
  | "next"
  | "previous";