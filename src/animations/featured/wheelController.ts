export type WheelDirection = "up" | "down";

type WheelCallback = (
  direction: WheelDirection
) => boolean;

export class WheelController {
  private locked = false;

  private callback: WheelCallback | null = null;

  private section: HTMLElement | null = null;

  /*
    Set callback.
  */

  setCallback(callback: WheelCallback) {
    this.callback = callback;
  }

  /*
    Lock wheel input.
  */

  lock() {
    this.locked = true;
  }

  /*
    Unlock wheel input.
  */

  unlock() {
    this.locked = false;
  }

  /*
    Check wheel state.
  */

  isLocked() {
    return this.locked;
  }

  /*
    Check whether the Featured section
    currently occupies the viewport.
  */

  private isSectionActive() {
    if (!this.section) {
      return false;
    }

    const rect =
      this.section.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight;

    /*
      Section must cover the viewport.

      Small tolerance is intentional because
      browser scroll position can produce tiny
      sub-pixel differences.
    */

    const tolerance = 2;

    return (
      rect.top <= tolerance &&
      rect.bottom >=
        viewportHeight - tolerance
    );
  }

  /*
    Handle wheel input.
  */

  handleWheel = (event: WheelEvent) => {
    /*
      Ignore wheel events when controller
      itself is locked.
    */

    if (this.locked) {
      event.preventDefault();
      return;
    }

    /*
      Only control scrolling while the
      Featured section is occupying the viewport.
    */

    if (!this.isSectionActive()) {
      return;
    }

    /*
      Ignore horizontal-only / zero wheel input.
    */

    if (event.deltaY === 0) {
      return;
    }

    const direction: WheelDirection =
      event.deltaY > 0 ? "down" : "up";

    /*
      Ask RenderEngine whether this wheel
      event should be consumed.
    */

    const consumed =
      this.callback?.(direction) ?? false;

    /*
      Prevent native page scrolling only when
      the Featured experience consumes the event.
    */

    if (consumed) {
      event.preventDefault();
    }
  };

  /*
    Initialize wheel controller.
  */

  init(section: HTMLElement) {
    this.section = section;

    window.addEventListener(
      "wheel",
      this.handleWheel,
      {
        passive: false,
      }
    );
  }

  /*
    Destroy controller.
  */

  destroy() {
    window.removeEventListener(
      "wheel",
      this.handleWheel
    );

    this.section = null;

    this.callback = null;

    this.locked = false;
  }
}