/*
  ============================================================
  FEATURED EXPERIENCE TYPES
  ============================================================
*/

export interface Scene {
  /*
    Unique identifier used by the DOM:

    data-scene-id="welcome"
  */

  id: string;

  /*
    Called when a scene becomes active.
  */

  enter: () => void;

  /*
    Called while the scene is active.
  */

  play: () => void;

  /*
    Called when the scene is leaving.
  */

  exit: () => void;

  /*
    Optional cleanup hook.

    Useful for removing:
    - event listeners
    - GSAP timelines
    - observers
    - scene-specific resources
  */

  destroy?: () => void;
}

/*
  ============================================================
  EXPERIENCE STATE
  ============================================================
*/

export interface ExperienceState {
  /*
    Currently active scene index.
  */

  currentScene: number;

  /*
    Total number of registered scenes.
  */

  totalScenes: number;

  /*
    Whether user interaction is currently locked.
  */

  isLocked: boolean;

  /*
    Whether a scene transition is currently running.
  */

  isAnimating: boolean;
}

/*
  ============================================================
  SCENE CONFIG
  ============================================================
*/

export interface SceneConfig {
  /*
    Scene identifier.
  */

  id: string;

  /*
    Whether wheel interaction should remain
    locked while this scene is active.
  */

  wheelLocked?: boolean;

  /*
    Whether reverse navigation is allowed.
  */

  allowReverse?: boolean;
}

/*
  ============================================================
  TRANSITION DIRECTION
  ============================================================
*/

export type TransitionDirection =
  | "next"
  | "previous";