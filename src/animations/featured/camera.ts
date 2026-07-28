export class CameraController {
  play(sceneId: string) {
    console.log(
      `Camera playing: ${sceneId}`
    );
  }

  reset() {
    console.log("Camera reset.");
  }
}