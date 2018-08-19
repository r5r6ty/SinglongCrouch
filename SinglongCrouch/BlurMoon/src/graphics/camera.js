//function Camera(name) {
//    Osobject.call(this);
//    this.name = name || 'Camera';
//}
//Camera.prototype = new Osobject();
//Camera.prototype.constructor = Camera;

function renderScript(componet) {
    componet.startFunc = function () {
        this.color = "#FFFFFF";
    }
    componet.updateFunc = function () {
        this.obj.position.x += Math.random() * 2 - 1;
        this.obj.position.y += Math.random() * 2 - 1;
    }
    componet.renderFunc = function () {

    }
}

function mainCameraScript(componet) {
    componet.startFunc = function () {
        this.context = CONTEXTLIST[0];
        this.projection = 0;
        this.viewprot = new Rect(0, 0, 1, 1);
        this.fafa = 0;
        this.obj.renderQueue = 0;
    }
    componet.updateFunc = function () {
        this.fafa += 1;
    }
    componet.renderFunc = function () {
        this.context.clearRect(this.viewprot.x, this.viewprot.y, this.context.canvas.width * this.viewprot.w, this.context.canvas.height * this.viewprot.h);
    }
}

function createCamera() {
    var camera = new Osobject("Camera");
    var comp = new Componet(camera);
    mainCameraScript(comp);
    camera.addComponent(comp);

    var comp2 = new Componet(camera);
    camera.addComponent(comp2);
    return camera;
}

function createSprite() {
    var sprite = new Osobject("Sprite");
    var comp = new Componet(sprite);
    renderScript(comp);
    sprite.addComponent(comp);
    return sprite;
}