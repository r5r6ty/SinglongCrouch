function arcadeobject(id, cx, cy, acx, acy, alpha, s) {
    this.counter = 0;
    this.identity = id;
    this.pic;
    this.state = s;
    this.status = "interface";
    this.centerX = cx;
    this.centerY = cy;
    this.myX = 0;
    this.myY = 0;
    this.dvx = acx;
    this.dvy = acy;
    this.Alpha = alpha;
    this.scaleX = 1;
    this.scaleY = 1;
    this.exist = true;

    this.direction = 1;

    this.selectcards = {
        first: undefined,
        second: undefined
    };

    this.getcards = new Array();

    this.change = 0;
}

arcadeobject.prototype.update = function () {

    switch (this.state) {
        case "normal":
            this.normal();
            break;
        case "controller":
            this.controller();
            break;
    }

    this.counter += 1;
    return this.exist;
}

arcadeobject.prototype.render = function () {
    drawpic(this);
}

arcadeobject.prototype.normal = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, 0, 0);
            if (this.centerY > ctx.canvas.width / 2) {
                drawtext(ctx, this.identity.name + "获得了" + this.getcards.length + "分", this.centerX, this.centerY, "20px Verdana", "red", "left", "middle", 1);
            } else {
                drawtext(ctx, this.identity.name + "(Lv." + level +")获得了" + this.getcards.length + "分", this.centerX, this.centerY, "20px Verdana", "red", "left", "middle", 1);
            }
            var www = (ctx.canvas.width - this.getcards.length * 20) / 2;
            for (var i = 0; i < this.getcards.length; i++) {
                this.getcards[i].centerX = www + i * 20;
                this.getcards[i].centerY = this.centerY;
            }
            break;
    }
    nextstate(this, "normal", 0, 0);
}

arcadeobject.prototype.controller = function () {
    var wait = 0;
    var p = undefined;
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, 0, 0);

            for (var i = 0; i < objectif.length; i++) {
                if (objectif[i] != undefined && objectif[i].identity == player1) {
                    p = objectif[i];
                }
            }
            for (var i = 0; i < object.length; i++) {
                if (object[i] != undefined) {
                    if (object[i].state == "open") {
                        if (p.selectcards.first == undefined) {
                            p.selectcards.first = object[i];
                            break;
                        }
                        if (p.selectcards.first != undefined && p.selectcards.second == undefined && object[i] != p.selectcards.first) {
                            p.selectcards.second = object[i];
                            lockinput(false);
                            break;
                        }
                    }
                }
            }

            var jd = judge2card(p);
            if (jd == -1) {
                this.change = 1;
                lockinput(false);
            } else if (jd == 1) {
                lockinput(true);
            }
            break;
        case cased(this, 1, 100):
            frameplay(this, "", 0, 0, 0, 0);

            for (var i = 0; i < objectif.length; i++) {
                if (objectif[i] != undefined && objectif[i].identity == player2) {
                    p = objectif[i];
                }
            }

            if (this.counter == (10 + 1 - level) * 2 || this.counter == (10 + 1 - level) * 4) {
                var arr = new Array();
                for (var i = 0; i < object.length; i++) {
                    if (object[i] != undefined && object[i].state == "back") {
                        arr.push(object[i]);
                    }
                }
                if (arr.length > 0) {
                    if (p.selectcards.first != undefined) {

                        var f = Number(p.selectcards.first.name.split("_", 2)[1]);

                        var c = arr[random(0, arr.length - 1)];
                        var s = Number(c.name.split("_", 2)[1]);
                        while (!(f + 13 == s || f + 13 * 2 == s || f + 13 * 3 == s || f - 13 == s || f - 13 * 2 == s || f - 13 * 3 == s)) {
                            c = arr[random(0, arr.length - 1)];
                            s = Number(c.name.split("_", 2)[1]);
                            if (!getRandom(level / 10)) {
                                break;
                            }
                        }
                        c.state = "open";
                        c.counter = 0 - 1;
                    } else {
                        var c = arr[random(0, arr.length - 1)];
                        c.state = "open";
                        c.counter = 0 - 1;
                    }
                }
            }



            for (var i = 0; i < object.length; i++) {
                if (object[i] != undefined) {
                    if (object[i].state == "open") {
                        if (p.selectcards.first == undefined) {
                            p.selectcards.first = object[i];
                            break;
                        }
                        if (p.selectcards.first != undefined && p.selectcards.second == undefined && object[i] != p.selectcards.first) {
                            p.selectcards.second = object[i];
                            lockinput(false);
                            break;
                        }
                    }
                }
            }

            var jd = judge2card(p);
            if (jd == -1) {
                wait = 0;
                this.change = 0;
                lockinput(true);
            } else if (jd == 1) {
                wait = 100;
                this.counter = 1 - 1;
            } else {
                wait = 100;
            }
            break;
    }
    nextstate(this, "controller", wait, this.change);
}

function judge2card(o) {
    if (o != undefined && o.selectcards.first != undefined && o.selectcards.second != undefined && o.selectcards.first.angleY == 180 && o.selectcards.second.angleY == 180) {
        var f = Number(o.selectcards.first.name.split("_", 2)[1]);
        var s = Number(o.selectcards.second.name.split("_", 2)[1]);

        if (f + 13 == s || f + 13 * 2 == s || f + 13 * 3 == s || f - 13 == s || f - 13 * 2 == s || f - 13 * 3 == s) {
            o.selectcards.first.state = "normal";
            o.selectcards.first.counter = 0 - 1;
            o.selectcards.second.state = "normal";
            o.selectcards.second.counter = 0 - 1;
            o.getcards.push(o.selectcards.first);
            o.getcards.push(o.selectcards.second);
            delete o.selectcards.first;
            delete o.selectcards.second;
            if (o.identity == player1) {
                object.sort(sortNumberB);
            } else {
                object.sort(sortNumberA);
                console.log("wawa");
            }
            return 1;
        } else {
            o.selectcards.first.state = "back";
            o.selectcards.first.counter = 0 - 1;
            o.selectcards.second.state = "back";
            o.selectcards.second.counter = 0 - 1;
            delete o.selectcards.first;
            delete o.selectcards.second;
            return -1;
        }
    } else {
        return 0;
    }

    function sortNumberA(a, b) {
        return o.getcards.indexOf(b) - o.getcards.indexOf(a);
    }

    function sortNumberB(a, b) {
        return o.getcards.indexOf(a) - o.getcards.indexOf(b);
    }
}

function getRandom(probability) {
    var probability = probability * 100 || 1;
    var odds = Math.floor(Math.random() * 100);

    if (probability === 1) {
        return true
    };
    if (odds < probability) {
        return true;
    } else {
        return false;
    }
};  