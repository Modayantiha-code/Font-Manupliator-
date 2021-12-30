function setup() {
    canvas = createCanvas(465, 350);
    canvas.position(650, 200);
    webcamvideo = createCapture(VIDEO);
    webcamvideo.size(600, 350);
    webcamvideo.position(100, 200);
}