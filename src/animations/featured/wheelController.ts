export type WheelDirection = "up" | "down";

type WheelCallback = (
  direction: WheelDirection
) => void;

export class WheelController {
  private locked = false;

  private callback: WheelCallback | null = null;

  setCallback(callback: WheelCallback) {
    this.callback = callback;
  }

  lock() {
    this.locked = true;
  }

  unlock() {
    this.locked = false;
  }

  isLocked() {
    return this.locked;
  }

  handleWheel = (event: WheelEvent) => {
    if (this.locked) return;

    const direction =
      event.deltaY > 0 ? "down" : "up";

    this.callback?.(direction);
  };

  init() {
    window.addEventListener(
      "wheel",
      this.handleWheel
    );
  }

  destroy() {
    window.removeEventListener(
      "wheel",
      this.handleWheel
    );

    this.callback = null;
  }
}