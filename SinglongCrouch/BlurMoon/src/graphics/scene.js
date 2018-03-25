function Scene(cvstxt) {
    this.osobjects = new Array;
}

Scene.prototype.add = function (obj) {
    this.osobjects.push(obj);
    for (var i = 0; i < obj.components.length; i++) {
        obj.components[i].start();
    }
}

Scene.prototype.remove = function (obj) {
    this.osobjects = this.osobjects.filter(function (o) {
        return o !== obj
    });
}

Scene.prototype.update = function () {

}

Scene.prototype.render = function () {

}