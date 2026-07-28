import { TransitionDirection } from "@/types/featured";

export class TransitionController {
  play(
    direction: TransitionDirection
  ) {
    console.log(
      `Transition: ${direction}`
    );
  }
}