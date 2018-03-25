function Osobject(name) {
    this.parent = null;                                 //父物体
    this.children = [];                                 //子物体合集
    this.name = name || "Osobject";                     //名字
    this.position = new Vector3;                        //位置
    this.scale = new Vector3(1, 1, 1);                  //缩放
    this.rotation = new Euler;                          //欧拉角
    this.components = [];                               //组件合集
    this.renderQueue = 2500;                            //描画顺序
}

Osobject.prototype.addComponent = function (component) {//添加组件
    this.components.push(component);
}

Osobject.prototype.update = function () {               //更新

}

Osobject.prototype.render = function () {               //描画

}

function Componet(obj) {
    this.obj = obj;                                    //被挂组件物体
    this.startFunc = function () { };
    this.updateFunc = function () { };
    this.renderFunc = function () { };
}

Componet.prototype.start = function () {                //开始
    this.startFunc();
}

Componet.prototype.update = function () {               //更新
    this.updateFunc();
}

Componet.prototype.render = function () {               //描画
    this.renderFunc();
}