function cnvs_getCoordinates(x, y) {

    //Math.pow(mouse.x - g_player1,2)
    //if ()
    var x1 = ctx.canvas.offsetParent.offsetLeft;
    var y1 = ctx.canvas.offsetParent.offsetTop;
    var x2 = ctx.canvas.offsetLeft;
    var y2 = ctx.canvas.offsetTop;
    var sl = document.documentElement.scrollLeft;
    var st = document.documentElement.scrollTop;
    mouse.centerX = Math.round(x - x1 - x2 + sl);
    mouse.centerY = Math.round(y - y1 - y2 + st);

    //if (ctestswitch == 1) {
    //    ctxtest.clearRect(0, 0, ctest.width, ctest.height);

    //    ctxtest.drawImage(g_player1.pic, 0, 0);

    //    ctxtest.beginPath();
    //    ctxtest.font = "20px Verdana";
    //    ctxtest.fillStyle = "white";
    //    ctxtest.textAlign = "left";
    //    ctxtest.textBaseline = "top";
    //    ctxtest.fillText("(" + c1x + "," + c1y + ")", c1x, c1y);

    //    ctxtest.beginPath();
    //    ctxtest.strokeStyle = "red";
    //    ctxtest.rect(c1x, c1y, mouse.centerX - c1x, mouse.centerY - c1y);
    //    ctxtest.stroke()
    //}
    //if (ctestswitch == 2) {
    //    ctxtest.clearRect(0, 0, ctest.width, ctest.height);

    //    ctxtest.drawImage(g_player1.pic, 0, 0);

    //    ctxtest.beginPath();
    //    ctxtest.font = "20px Verdana";
    //    ctxtest.fillStyle = "white";
    //    ctxtest.textAlign = "left";
    //    ctxtest.textBaseline = "top";
    //    ctxtest.fillText("(" + c1x + "," + c1y + ")", c1x, c1y);

    //    ctxtest.beginPath();
    //    ctxtest.font = "20px Verdana";
    //    ctxtest.fillStyle = "white";
    //    ctxtest.textAlign = "right";
    //    ctxtest.textBaseline = "bottom";
    //    ctxtest.fillText("(" + c2x + "," + c2y + ")", c2x, c2y);

    //    ctxtest.beginPath();
    //    ctxtest.strokeStyle = "red";
    //    ctxtest.rect(c1x, c1y, c2x - c1x, c2y - c1y);
    //    ctxtest.stroke()

    //    ctestswitch = 0;
    //    document.getElementById("xywh").innerHTML = c1x + " " + c1y + " " + (c2x - c1x) + " " + (c2y - c1y);
    //}

    //document.getElementById("demo5").innerHTML = "Coordinates:(" + mouse.centerX + "," + mouse.centerY + ")";
}


function ssstoponstop(s) {
    gameplay = s;
}




function mainphase(g, s) {
    if (nowgp == g) {
        this.status = "";
        this.gamephase = "";
        this.state = "";
        this.counter = 0;
        this.exist = false;
    } else {
        pregp = nowgp;
        nowgp = g;
        this.status = "main";
        this.gamephase = g;
        this.state = s;
        this.counter = 0;
        this.exist = true;
    }
}

mainphase.prototype.update = function () {
    switch (this.state) {
        case "gamephasecontroller":
            this.gamephasecontroller();//游戏进程控制
            break;
        default:
            break;
    }
    this.counter += 1;
    return this.exist;
}

mainphase.prototype.render = function () {
    //drawpic(this);
}

//function gamephasecontroller(g)
mainphase.prototype.gamephasecontroller = function () {


    switch (this.counter) {
        case cased(this, 0, 0):
            var f_o = new interfaceobject(this, 0, 0, 0, 0, 1, "fade_out");
            objectif.push(f_o);//载入fade_out
            break;
        case cased(this, 1, 10):
            break;

        case cased(this, 11, 11):

            for (var iif = 0; iif < objectif.length; iif++) {
                if (objectif[iif] != undefined) {// && objectif[iif].status != "sound"
                    objectif[iif].exist = false;
                }
            }
            for (var i1 = 0; i1 < object.length; i1++) {
                if (object[i1] != undefined) {
                    object[i1].exist = false;
                }
            }
            for (var ibg = 0; ibg < objectbg.length; ibg++) {
                if (objectbg[ibg] != undefined) {
                    objectbg[ibg].exist = false;
                }
            }
            //清空所有数组

            switch (this.gamephase) {
                case "g_nowloading":
                    var nld = new interfaceobject(this, 640, 310, 0, 0, 1, "nowloading");
                    objectif.push(nld);//载入进度条
                    break;
                case "g_title":
                    var d = new deck(0, 0, "Z_rolling");
                    d.shuffle();
                    for (var i = 0; i < d.cards.length; i++) {
                        d.cards[i].centerX = Math.random() * ctx.canvas.width;
                        d.cards[i].centerY = Math.random() * ctx.canvas.height;
                        d.cards[i].Alpha = Math.random();
                        d.cards[i].speed = 5 * Math.random();
                    }
                    d.show();
                    delete d;
                    var gt = new interfaceobject(this, 640, 310, 0, 0, 1, "gametitle");
                    objectif.push(gt);//载入游戏标题
                    var psb = new interfaceobject(this, 640, ctx.canvas.height / 2, 0, 0, 1, "pressstartbutton");
                    objectif.push(psb);//载入press start button
                    break;
                case "g_menu":
                    var mm = new interfaceobject(this, 0, 0, 0, 0, 1, "mainmenu");
                    objectif.push(mm);//载入vs模式按钮
                    break;
                case "g_arcade":
                    var sc = new interfaceobject(this, 0, 0, 0, 0, 1, "selectcharacter");
                    objectif.push(sc);//载入选人界面
                    break;
                case "g_story":
                    break;
                case "g_vs_cpu":
                    break;
                case "g_vs_player":
                    break;
                case "g_battle":
                    var bi = new interfaceobject(this, 0, 0, 0, 0, 1, "battleinterface");
                    objectif.push(bi);//载入对战画面
                    break;
                case "g_gameover":
                    var go = new interfaceobject(this, ctx.canvas.width / 2, ctx.canvas.height / 2, 0, 0, 1, "gameover");
                    objectif.push(go);//gameover
                    break;
                default:
                    break;
            }
            var f_i = new interfaceobject(this, 0, 0, 0, 0, 1, "fade_in");
            objectif.push(f_i);//载入fade_in
            break;
    }
    nextstate(this, "", 11, 1000);
}


function computeFPS() {

    if (previous.length > 60) {
        delete previous[0];
        previous.splice(0, 1);
    }
    var start = new Date().getTime();
    previous.push(start);
    var sum = 0;

    for (var id = 0; id < previous.length - 1; id++) {
        sum += previous[id + 1] - previous[id];
    }

    var diff = 1000.0 / (sum / previous.length);
    GameFPS = diff.toFixed();
    drawtext(ctx, "FPS: " + GameFPS + " " + pregp + " -> " + nowgp, 0, ctx.canvas.height, "15px Verdana", "white", "left", "bottom", 1);
}


function QueueNewFrame() {
    if (window.requestAnimationFrame)
        requestId = window.requestAnimationFrame(renderingLoop);
    else if (window.msRequestAnimationFrame)
        requestId = window.msRequestAnimationFrame(renderingLoop);
    else if (window.webkitRequestAnimationFrame)
        requestId = window.webkitRequestAnimationFrame(renderingLoop);
    else if (window.mozRequestAnimationFrame)
        requestId = window.mozRequestAnimationFrame(renderingLoop);
    else if (window.oRequestAnimationFrame)
        requestId = window.oRequestAnimationFrame(renderingLoop);
    else {
        function QueueNewFrame() {
        };
        intervalID = window.setInterval(renderingLoop, 1000 / 60);
    }
};





function playsound(p) {
    this.status = "sound";
    this.counterA = 0;
    this.audio = document.createElement("audio");
    this.audio.src = p.src;
    this.counterB = p.duration;
    this.audio.autoplay = true;
    this.exist = true;
    ctx.canvas.appendChild(this.audio);

}
playsound.prototype.update = function () {
    if (this.audio.ended || this.counterA >= this.counterB + 10) {
        ctx.canvas.removeChild(this.audio);
        return false;
    } else {
        this.counterA += 1 / GameFPS;
        return true;
    }
}

playsound.prototype.render = function () {

}

function drawtext(canvas, text, x, y, sizefont, color, align, baseline, alpha, shadowColor, shadowBlur) {
    canvas.save();
    if (canvas != ctx) {
        canvas.translate(Math.round(-visualX), Math.round(-visualY));
    }
    canvas.beginPath();
    canvas.shadowBlur = shadowBlur;
    canvas.shadowColor = shadowColor;
    canvas.font = sizefont;
    canvas.textAlign = align;
    canvas.textBaseline = baseline;
    canvas.fillStyle = color;
    canvas.globalAlpha = alpha;
    canvas.fillText(text, Math.round(x), Math.round(y));
    canvas.restore();
}

function drawfillrect(canvas, x, y, width, height, color, alpha, shadowColor, shadowBlur) {
    canvas.save();
    if (canvas != ctx) {
        canvas.translate(Math.round(-visualX), Math.round(-visualY));
    }
    canvas.beginPath();
    canvas.shadowBlur = shadowBlur;
    canvas.shadowColor = shadowColor;
    canvas.fillStyle = color;
    canvas.globalAlpha = alpha;
    canvas.fillRect(x, y, width, height);
    canvas.restore();
}

function drawpic(o) {
    var canvas = ctx;
    if (o.pic != undefined) {
        var canvas = canvas;
        canvas.save();
        //if (canvas != ctx) {
        //    canvas.translate(Math.round(-visualX), Math.round(-visualY));
        //}
        canvas.globalAlpha = o.Alpha;
        if (o.hasOwnProperty("shadowBlur") && o.hasOwnProperty("shadowColor") && o.hasOwnProperty("angleZ")) {
            canvas.shadowBlur = o.shadowBlur;
            canvas.shadowColor = o.shadowColor;
            canvas.translate(o.centerX, o.centerY);
            canvas.rotate(o.angleZ * Math.PI / 180);
            canvas.drawImage(o.pic, Math.round(-o.myX) + (o.pic.width - o.pic.width * o.scaleX) / 2, Math.round(-o.myY), o.pic.width * o.scaleX, o.pic.height * o.scaleY);
        } else {
            if (o.direction == 1) {
                canvas.drawImage(o.pic, Math.round(o.centerX - o.myX) + (o.pic.width - o.pic.width * o.scaleX) / 2, Math.round(o.centerY - o.myY), o.pic.width * o.scaleX, o.pic.height * o.scaleY);
            }
            else {
                canvas.translate(c.width, 0);
                canvas.scale(-1, 1);
                //画图

                canvas.drawImage(o.pic, Math.round(-1 * o.centerX - o.myX + c.width), Math.round(o.centerY - o.myY));
                //翻转回来

                canvas.translate(c.width, 0);
                canvas.scale(-1, 1);
            }
        }
    }

    if (debug && !o.hasOwnProperty("angleZ")) {
        canvas.globalAlpha = 1;
        canvas.beginPath();
        canvas.fillStyle = "yellow";
        canvas.arc(o.centerX, o.centerY, 2, 0, 2 * Math.PI, true);
        canvas.fill();

        //canvas.beginPath();
        //canvas.strokeStyle = "blue";
        //canvas.moveTo(o.cx, o.cy);
        //canvas.lineTo(o.cx + o.cw, o.cy);
        //canvas.lineTo(o.cx + o.cw, o.cy + o.ch);
        //canvas.lineTo(o.cx, o.cy + o.ch);
        //canvas.closePath();
        //canvas.stroke();
        if (o.bdy != undefined) {
            for (var i = 0; i < o.bdy.length; i++) {
                if (o.bdy[i] != undefined) {
                    canvas.beginPath();
                    canvas.strokeStyle = "green";
                    canvas.moveTo(o.bdy[i].bx, o.bdy[i].by);
                    canvas.lineTo(o.bdy[i].bx + o.bdy[i].bw, o.bdy[i].by);
                    canvas.lineTo(o.bdy[i].bx + o.bdy[i].bw, o.bdy[i].by + o.bdy[i].bh);
                    canvas.lineTo(o.bdy[i].bx, o.bdy[i].by + o.bdy[i].bh);
                    canvas.closePath();
                    canvas.stroke();
                }
            }

            //if (o.bdy.length != 0) {
            //    o.bdy = [];
            //}
        }

        if (o.itr != undefined) {
            for (var j = 0; j < o.itr.length; j++) {
                if (o.itr[j] != undefined) {
                    canvas.beginPath();
                    canvas.strokeStyle = "red";
                    canvas.moveTo(o.itr[j].ix, o.itr[j].iy);
                    canvas.lineTo(o.itr[j].ix + o.itr[j].iw, o.itr[j].iy);
                    canvas.lineTo(o.itr[j].ix + o.itr[j].iw, o.itr[j].iy + o.itr[j].ih);
                    canvas.lineTo(o.itr[j].ix, o.itr[j].iy + o.itr[j].ih);
                    canvas.closePath();
                    canvas.stroke();
                }
            }
            //if (o.itr.length != 0) {
            //    o.itr = [];
            //}
        }
    }


    canvas.restore();
}

function frameplay(o, p, acx, acy, myX, myY) {

    o.pic = document.getElementById(p);
    o.myX = myX;
    o.myY = myY;

    o.dvy += acy;

    if (o.airland == "air") {
        o.dvx += o.direction * acx;
    }
    else {

        if (o.dvx > o.direction * acx) {
            if (o.dvx - o.vx <= o.direction * acx) {
                o.vx = 0;
                o.dvx = o.direction * acx;
            }
            else {
                o.dvx -= o.vx;
                o.vx += vf;
            }
        }
        else if (o.dvx < o.direction * acx) {
            if (o.dvx + o.vx >= o.direction * acx) {
                o.vx = 0;
                o.dvx = o.direction * acx;
            }
            else {
                o.dvx += o.vx;
                o.vx += vf;
            }
        }
        else {
            o.vx = 0;
        }
    }

    o.centerX += o.dvx;
    o.centerY += o.dvy;
}

function clnrange(o, x, y, w, h) {
    if (o.direction == "1") {
        var tx = o.centerX - o.myX + x;
    }
    else {
        var tx = o.centerX + o.myX - x;
    }
    var ty = o.centerY - o.myY + y;
    o.cx = tx - w;
    o.cy = ty - h;
    o.cw = w * 2;
    o.ch = h * 2;

    var left = o.centerX - o.cx;
    var right = o.cx + o.cw - o.centerX;

    if (o.centerX < 0 + (o.centerX - o.cx)) {
        o.centerX = 0 + (o.centerX - o.cx);
    }
    else if (o.centerX > gamebg.bgwidth - (o.cx + o.cw - o.centerX)) {
        o.centerX = gamebg.bgwidth - (o.cx + o.cw - o.centerX);
    }

    if (o.centerX < 0 + (left + Math.round(visualX))) {
        o.centerX = 0 + (left + Math.round(visualX));
    }
    else if (o.centerX > gamesize.width - (right - Math.round(visualX))) {
        o.centerX = gamesize.width - (right - Math.round(visualX));
    }

    if (o.direction == "1") {
        var tx = o.centerX - o.myX + x;
    }
    else {
        var tx = o.centerX + o.myX - x;
    }
    var ty = o.centerY - o.myY + y;
    o.cx = tx - w;
    o.cy = ty - h;
    o.cw = w * 2;
    o.ch = h * 2;

    for (var i = 0; i < object.length; i++) {
        if (object[i] != undefined && object[i].cx != undefined && object[i].cy != undefined && object[i].cw != undefined && object[i].ch != undefined && object[i].identity != o.identity) {
            if (detection(o.cx, o.cy, o.cx + o.cw, o.cy + o.ch, object[i].cx, object[i].cy, object[i].cx + object[i].cw, object[i].cy + object[i].ch)) {
                if (o.direction == "1") {
                    if (o.centerX > object[i].centerX) {
                        o.centerX = object[i].centerX + (o.centerX - o.cx) + (object[i].cx + object[i].cw - object[i].centerX);
                    }
                    else {
                        o.centerX = object[i].centerX - (o.cx + o.cw - o.centerX) - (object[i].centerX - object[i].cx);
                    }
                    if (o.centerX >= o.centerX - o.cx || o.centerX >= left + Math.round(visualX)) {
                        object[i].centerX += o.dvx / 2;
                    }
                }
                else {
                    if (o.centerX < object[i].centerX) {
                        o.centerX = object[i].centerX - (o.cx + o.cw - o.centerX) - (object[i].centerX - object[i].cx);
                    }
                    else {
                        o.centerX = object[i].centerX + (o.centerX - o.cx) + (object[i].cx + object[i].cw - object[i].centerX);
                    }
                    if (o.centerX <= gamebg.bgwidth - (o.cx + o.cw - o.centerX) || o.centerX <= gamesize.width - (right - Math.round(visualX))) {
                        object[i].centerX += o.dvx / 2;
                    }
                }
            }
        }
    }

    if (o.centerX < 0 + (o.centerX - o.cx)) {
        o.centerX = 0 + (o.centerX - o.cx);
    }
    else if (o.centerX > gamebg.bgwidth - (o.cx + o.cw - o.centerX)) {
        o.centerX = gamebg.bgwidth - (o.cx + o.cw - o.centerX);
    }

    if (o.centerX < 0 + (left + Math.round(visualX))) {
        o.centerX = 0 + (left + Math.round(visualX));
    }
    else if (o.centerX > gamesize.width - (right - Math.round(visualX))) {
        o.centerX = gamesize.width - (right - Math.round(visualX));
    }

    if (o.direction == "1") {
        var tx = o.centerX - o.myX + x;
    }
    else {
        var tx = o.centerX + o.myX - x;
    }
    var ty = o.centerY - o.myY + y;
    o.cx = tx - w;
    o.cy = ty - h;
    o.cw = w * 2;
    o.ch = h * 2;

}

function bdyrange(o, x, y, w, h) {

    if (o.direction == "1") {
        this.bx = o.centerX - o.myX + x;
        this.bx += (w - w * o.scaleX) / 2;
    }
    else {
        this.bx = o.centerX + o.myX - x - w;
        this.bx -= (w - w * o.scaleX) / 2;
    }

    this.bw = w * o.scaleX;
    this.by = o.centerY - o.myY + y;
    this.by += (h - h * o.scaleY) / 2;
    this.bh = h * o.scaleY;
}

function itrrange(o, x, y, w, h) {

    if (o.direction == "1") {
        this.ix = o.centerX - o.myX + x;
    }
    else {
        this.ix = o.centerX + o.myX - x - w;
    }
    this.iw = w;
    this.iy = o.centerY - o.myY + y;
    this.ih = h;
}

function cased(o, a, b) {
    if (o.counter >= a && o.counter <= b) {
        return o.counter;
    }
    else {
        return -1;
    }
}

function nextstate(o, s, f1, f2) {
    if (o.counter >= f1 && f2 >= 1000) {
        o.exist = false;
    }
    else if (o.counter >= f1 && f2 < 999) {
        o.state = s;
        o.counter = f2 - 1;
    }
    //o.groundstate = "normal";
}

//function gravitation(o,k)
//{
//	if(o.centerY < groundvalue)
//	{
//	o.centerY += o.vy;
//	o.vy += vg * k;
//	}
//	else if(o.centerY > groundvalue)
//	{
//	o.centerY = groundvalue;
//	}
//}

function detection(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    if (ax1 < bx1) {
        if (ax2 < bx1)
            return false;
        else {
            if (ay1 < by1) {
                if (ay2 < by1)
                    return false;
                else
                    return true;
            }
            else {
                if (ay1 > by2)
                    return false;
                else
                    return true;
            }
        }
    }
    else {
        if (ax1 > bx2)
            return false;
        else {
            if (ay1 < by1) {
                if (ay2 < by1)
                    return false;
                else
                    return true;
            }
            else {
                if (ay1 > by2)
                    return false;
                else
                    return true;

            }
        }
    }
}

function mousejudge(o) {
    for (var i = 0; i < o.bdy.length; i++) {
        if (o.bdy[i] != undefined) {
            if (mouse.centerX >= o.bdy[i].bx && mouse.centerX <= o.bdy[i].bx + o.bdy[i].bw && mouse.centerY >= o.bdy[i].by && mouse.centerY <= o.bdy[i].by + o.bdy[i].bh) {
                return true;
            }
        }
    }
}

function skillkeydown(o, s, c, key) {
    if (key in keysDown) {
        o.counter = c - 1;
        o.state = s;
    }
}

function skillkeyup(o, s, c, key) {
    if (!(key in keysDown)) {
        o.counter = c - 1;
        o.state = s;
    }
}

function sound(o, f, s) {
    if (o.counter == f) {
        objectif.push(new playsound(document.getElementById(s)));
    }
}

//判断是否支持触摸事件
function isTouchDevice() {
    document.getElementById("version").innerHTML = navigator.appVersion;
    try {
        document.createEvent("TouchEvent");
        document.getElementById("demo16").innerHTML = "TouchEvent ok!";

        return true;
    } catch (e) {
        document.getElementById("demo16").innerHTML = "TouchEvent ng!";
        return false;
    }
}

function ismouseup(button) {
    if (button in mouseDown && (mouseDown[button] == undefined || mouseDown[button] == 5)) {
        return true;
    } else {
        return false;
    }
}

function ismouseondown(button) {
    if (button in mouseDown && (mouseDown[button] == 2)) {
        return true;
    } else {
        return false;
    }
}

function ismousedown(button) {
    if (button in mouseDown && (mouseDown[button] == 3)) {
        return true;
    } else {
        return false;
    }
}

function ismouseclick(button) {
    if (button in mouseDown && (mouseDown[button] == 5)) {
        return true;
    } else {
        return false;
    }
}

function lockinput(l) {
    caninput = l;

}

function mainLoop() {

}

function renderingLoop() {

    //if (87 in keysDown) {
    //    gameplay = 2;
    //}

    if (gameplay == 0 || gameplay == 1) {

        while (ren < UpdateSimulationTime) {
            ren += 1 / UpdateFPS;
            if (ren < UpdateSimulationTime) {
                updategame(false);
            } else {
                updategame(true);
            }
        }

        if (gameplay == 1) {
            gameplay = 2;
        }
    }

    //document.getElementById("demo").innerHTML = "object: " + object.length;
    //document.getElementById("demo11").innerHTML = "objectbg: " + objectbg.length;
    //document.getElementById("demo14").innerHTML = "objectif: " + objectif.length;


    //mainloop

    //holdkey();
    computeFPS();

    UpdateSimulationTime += 1 / GameFPS;

    //document.getElementById("demo18").innerHTML = UpdateSimulationTime;

    QueueNewFrame();
}

function updategame(todraw) {
    if (caninput) {
        var loop = mouseDown.length;
        for (var m = 0; m < loop; m++) {
            if (mouseDown[m] > 4) {
                delete mouseDown[m];
                mouseDown.splice(m, 1);
                m--;    //改变循环变量  
                loop--;   //改变循环次数  
            } else if (mouseDown[m] == 1 || mouseDown[m] == 2 || mouseDown[m] == 4) {
                mouseDown[m] += 1;
            }
        }
        ctx.canvas.style.cursor = "auto";
    } else {
        mouseDown.splice(0, mouseDown.length);
        ctx.canvas.style.cursor = "wait";
    }

    if (todraw) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    var bglen = objectbg.length;
    for (var ibg = 0; ibg < bglen; ibg++) {
        //判断object[ibg]是否存在，是就更新，否就删除
        if (objectbg[ibg] != undefined) {
            if (!objectbg[ibg].update()) {
                if (todraw) {
                    objectbg[ibg].render();
                }
                delete objectbg[ibg];
                objectbg.splice(ibg, 1);
                ibg--;
                bglen--;
            } else {
                if (todraw) {
                    objectbg[ibg].render();
                }
            }
        }
    }

    var len1 = object.length
    for (var i1 = 0; i1 < len1; i1++) {
        //判断object[i1]是否存在，是就更新，否就删除
        if (object[i1] != undefined) {
            if (!object[i1].update()) {
                if (todraw) {
                    object[i1].render();
                }
                delete object[i1];
                object.splice(i1, 1);
                i1--;
                len1--;
            } else {
                if (todraw) {
                    object[i1].render();
                }
            }
        }
    }

    var iflen = objectif.length;
    for (var iif = 0; iif < iflen; iif++) {
        //判断objectif[iif]是否存在，是就更新，否就删除
        if (objectif[iif] != undefined) {
            if (!objectif[iif].update()) {
                if (todraw) {
                    objectif[iif].render();
                }
                delete objectif[iif];
                objectif.splice(iif, 1);
                iif--;
                iflen--;
            } else {
                if (todraw) {
                    objectif[iif].render();
                }
            }
        }
    }
}