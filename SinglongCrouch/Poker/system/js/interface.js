function buttonnextstate(o, button, up, on, down) {
    var state = up;
    if (mousejudge(o)) {
        if (ismouseondown(button) || o.button) {
            state = down;
            o.button = true;
        } else {
            state = on;
        }
    } else {
        state = up;
        if (ismouseup(button)) {
            o.button = false;
        }
    }
    return state;
}

function interfaceobject(id, cx, cy, acx, acy, alpha, s) {
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

    this.bdy = new Array();
    this.itr = new Array();

    this.direction = 1;

    this.button = false;
}

interfaceobject.prototype.update = function () {
    this.bdy.splice(0, this.bdy.length);//清空bdy
    this.itr.splice(0, this.itr.length);//清空itr

    var ste = this.state.split(",");
    switch (ste[0]) {
        case "nowloading":
            this.nowloading();//游戏载入
            break;
        case "gametitle":
            this.gametitle();//标题
            break;
        case "mainmenu":
            this.mainmenu();//vs模式
            break;
        case "pressstartbutton":
            this.pressstartbutton();//按键进入游戏
            break;
        case "selectcharacter":
            this.selectcharacter();//选择角色
            break;
        case "battleinterface":
            this.battleinterface();//按键进入游戏
            break;
        case "gameover":
            this.gameover();//标题
            break;

        case "fade_in":
            this.fade_in();//淡入
            break;
        case "fade_out":
            this.fade_out();//淡出
            break;

        case "CVSButton":
            this.CVSButton(Number(ste[1]), Number(ste[2]), ste[3], Number(ste[4]), ste[5]);//CVSButton(left,top,text,size,event)
            break;
        case "CVSLabel":
            this.CVSLabel(Number(ste[1]), Number(ste[2]), ste[3], Number(ste[4]));//CVSButton(left,top,text,size)
            break;


        case "choosecounter":
            this.choosecounter();//选项控制延时器
            break;
        case "windowvision":
            this.windowvision();//windowvision
            break;

        case "s_davis":
            this.s_davis();//选davis
            break;

        case "p1_hp":
            this.p1_hp();
            break;
        case "p2_hp":
            this.p2_hp();
            break;
        case "battletimer":
            this.battletimer();
            break;
    }

    this.counter += 1;
    return this.exist;
}

interfaceobject.prototype.render = function () {
    drawpic(this);
}


interfaceobject.prototype.choosecounter = function () {
    switch (this.counter) {
        case cased(this, 0, 5):
            break;
        case cased(this, 6, 6):
            this.identity.a = true;
            break;
    }
    nextstate(this, "choosecounter", 6, 1000);
}



interfaceobject.prototype.nowloading = function () {
    switch (this.counter) {
        case cased(this, 0, 360):

            var width = 1000;
            var height = 50;

            frameplay(this, "", 0, 0, width / 2, height / 2);

            var per = loadeddata / totaldata;

            var dot = "";
            for (var i = 0; i < Math.round(this.counter % 36 / 6); i++) {
                dot += ".";
            }
            drawtext(ctx, "Now loading" + dot + (per * 100).toFixed(0) + "%" + "(" + loadeddata + "/" + totaldata + ")", this.centerX - this.myX, this.centerY - 50 / 2, "50 px Verdana", "red", "left", "bottom", 1);

            ctx.rect(this.centerX - this.myX, this.centerY - this.myY, width, height);
            ctx.strokeStyle = "red";
            ctx.stroke();
            ctx.stroke();
            ctx.fillStyle = "red";
            ctx.fillRect(this.centerX - this.myX, this.centerY - this.myY, width * per, height);

            if (loadeddata >= totaldata) {//当loading完
                objectif.push(new mainphase("g_title", "gamephasecontroller"));
            }

            break;
    }
    nextstate(this, "nowloading", 360, 0);
}

interfaceobject.prototype.mainmenu = function () {
    switch (this.counter) {
        case cased(this, 0, 0):

            var _sinkeisuijyaku = new interfaceobject(this, ctx.canvas.width / 2, 300, 0, 0, 1, "CVSButton,1,1,神経衰弱,50,g_sksj");
            objectif.push(_sinkeisuijyaku);//载入CVSButton
            var _story = new interfaceobject(this, ctx.canvas.width / 2, 360, 0, 0, 1, "CVSButton,1,1,24連装ロシアルレット,50,i_story");
            objectif.push(_story);//载入CVSButton
            var _vs_cpu = new interfaceobject(this, ctx.canvas.width / 2, 420, 0, 0, 1, "CVSButton,1,1,少数決,50,i_story");
            objectif.push(_vs_cpu);//载入CVSButton
            var _vs_player = new interfaceobject(this, ctx.canvas.width / 2, 480, 0, 0, 1, "CVSButton,1,1,E-Card,50,i_story");
            objectif.push(_vs_player);//载入CVSButton
            var test = new interfaceobject(this, ctx.canvas.width / 2, 540, 0, 0, 1, "CVSButton,1,1,小朋友齐打交,50,i_story");
            objectif.push(test);//载入CVSButton
            break;

        case cased(this, 1, 10):
            break;

        case cased(this, 11, 11):
            //if(this.a)//延迟锁
            //{
            // if (87 in keysDown)//按上
            // {
            //  if(this.centerY != 300)
            //  {
            //  this.centerY -= 30;
            //  }
            //  this.a = false;
            //  var _cc = new interfaceobject(this,0,0,0,0,1,"choosecounter");
            //  pushtocanvas(objectif,ctx,_cc);//载入延迟锁计时器
            // }
            // if (83 in keysDown)//按下
            // {
            //  if(this.centerY != 390)
            //  {
            //  this.centerY += 30;
            //  }
            //  this.a = false;
            //  var _cc = new interfaceobject(this,0,0,0,0,1,"choosecounter");
            //  pushtocanvas(objectif,ctx,_cc);//载入延迟锁计时器
            // }
            //}
            //if (0 in keysDown)//确定
            //{
            //	sound(this,11,"ok");
            //	this.p = true;
            //	this.exist = false;
            //}
            //if (2 in keysDown)//取消
            //{
            //	sound(this,11,"cancel");
            //	objectif.push(new mainphase("g_title","gamephasecontroller"));
            //	this.exist = false;
            //}
            break;

        //		drawtext(ctx,"TRAINING",this.centerX,this.centerY+120,"20px Verdana","crimson","center","middle",1);
        //		drawtext(ctx,"OPTION",this.centerX,this.centerY+150,"20px Verdana","crimson","center","middle",1);
        //		drawtext(ctx,"QUIT",this.centerX,this.centerY+180,"20px Verdana","crimson","center","middle",1);


    }
    nextstate(this, "mainmenu", 11, 11);
}

interfaceobject.prototype.CVSButton = function (left, top, t, s, g) {
    var text = t;
    var size = s;
    ctx.font = size + "px Verdana";
    var txtwidth = ctx.measureText(text).width;

    var bdyX = (txtwidth / 2) * -(left - 1);
    var bdyY = (size / 2) * -(top - 1);
    var offsetX = (txtwidth / 2) * left;
    var offsetY = (size / 2) * top;
    var cX = this.centerX - offsetX;
    var cY = this.centerY - offsetY;
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, txtwidth / 2, size / 2);
            this.bdy.push(new bdyrange(this, bdyX, bdyY, txtwidth, size));
            drawtext(ctx, text, this.centerX + bdyX, this.centerY + bdyY, size + "px Verdana", "red", "center", "middle", 1);
            break;
        case cased(this, 1, 1):
            frameplay(this, "", 0, 0, txtwidth / 2, size / 2);
            this.bdy.push(new bdyrange(this, bdyX, bdyY, txtwidth, size));
            drawtext(ctx, text, this.centerX + bdyX, this.centerY + bdyY, size + "px Verdana", "red", "center", "middle", 1);
            drawfillrect(ctx, cX, cY, txtwidth, size, "red", 0.5);
            break;
        case cased(this, 2, 2):
            frameplay(this, "", 0, 0, txtwidth / 2, size / 2);
            this.bdy.push(new bdyrange(this, bdyX, bdyY, txtwidth, size));
            drawtext(ctx, text, this.centerX + bdyX, this.centerY, size + "px Verdana", "crimson", "center", "middle", 1);
            drawfillrect(ctx, cX, cY, txtwidth, size, "crimson", 0.5);

            if (ismouseclick(0)) {
                var para = g.split("_");
                switch (para[0]) {
                    case "g":
                        sound(this, 2, "ok");
                        objectif.push(new mainphase(g, "gamephasecontroller"));
                        this.button = false;
                        break;
                    case "i":
                        var interdiv = document.getElementById("inter");
                        if (interdiv.children.length <= 0) {
                            var bbb = document.createElement("input");
                            bbb.type = "text";
                            bbb.style.width = window.innerWidth + "px";
                            bbb.style.height = "50px";
                            bbb.style.position = "absolute";
                            bbb.style.left = "0px";
                            bbb.style.top = "0px";
                            interdiv.appendChild(bbb);

                            bbb.focus();
                            bbb.value = text;

                            this.button = false;

                            var self = this;

                            window.onresize = function () {
                                bbb.style.width = window.innerWidth + "px";
                            }

                            bbb.oninput = function (e) {
                                var ss = self.state.split(",");
                                if (this.value.length <= 0) {
                                    ss[3] = " ";
                                } else {
                                    ss[3] = this.value;
                                }
                                self.state = ss.join(",");

                                eval(para[1] + "=ss[3]");
                            }

                            bbb.onchange = function (e) {
                                bbb.parentNode.removeChild(bbb);
                            }

                            bbb.onblur = function (e) {
                                if (!mousejudge(self)) {
                                    bbb.parentNode.removeChild(bbb);
                                } else {
                                    bbb.focus();
                                }
                            }
                        }
                        break;
                    case "c":
                        var ss = this.state.split(",");

                        if (text.substr(0, 1) == "☒") {
                            eval(para[1] + "=true");
                            ss[3] = "☑" + text.substr(1, text.length - 1);
                        } else if (text.substr(0, 1) == "☑") {
                            eval(para[1] + "=false");
                            ss[3] = "☒" + text.substr(1, text.length - 1);
                        }
                        this.state = ss.join(",");

                        this.button = false;
                        break;
                    case "r":
                        var interdiv = document.getElementById("inter");
                        if (interdiv.children.length <= 0) {
                            var bbb = document.createElement("input");
                            bbb.type = "range";
                            bbb.value = Number(text);
                            var minmax = para[2].split("~", 2);
                            bbb.min = minmax[0];
                            bbb.max = minmax[1];
                            bbb.style.width = window.innerWidth + "px";
                            bbb.style.height = "50px";
                            bbb.style.position = "absolute";
                            bbb.style.left = "0px";
                            bbb.style.top = "0px";
                            interdiv.appendChild(bbb);

                            bbb.focus();
                            bbb.value = text;

                            this.button = false;

                            var self = this;

                            window.onresize = function () {
                                bbb.style.width = window.innerWidth + "px";
                            }

                            bbb.onchange = function (e) {
                                var ss = self.state.split(",");
                                ss[3] = this.value;
                                self.state = ss.join(",");

                                eval(para[1] + "=ss[3]");
                            }

                            bbb.onblur = function (e) {
                                if (!mousejudge(self)) {
                                    bbb.parentNode.removeChild(bbb);
                                } else {
                                    bbb.focus();
                                }
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            break;
    }
    nextstate(this, this.state, 0, buttonnextstate(this, 0, 0, 1, 2));
}

interfaceobject.prototype.CVSLabel = function (left, top, t, s) {
    var text = t;
    var size = s;
    ctx.font = size + "px Verdana";
    var txtwidth = ctx.measureText(text).width;

    var bdyX = (txtwidth / 2) * -(left - 1);
    var bdyY = (size / 2) * -(top - 1);
    var offsetX = (txtwidth / 2) * left;
    var offsetY = (size / 2) * top;
    var cX = this.centerX - offsetX;
    var cY = this.centerY - offsetY;
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, txtwidth / 2, size / 2);
            this.bdy.push(new bdyrange(this, bdyX, bdyY, txtwidth, size));
            drawtext(ctx, text, this.centerX + bdyX, this.centerY + bdyY, size + "px Verdana", "red", "center", "middle", 1);
            break;
            break;
    }
    nextstate(this, this.state, 0, 0);
}

interfaceobject.prototype.gametitle = function () {
    switch (this.counter) {
        case cased(this, 0, 0):

            drawtext(ctx, gametitle, this.centerX, this.centerY, "italic 150px Verdana", "red", "center", "middle", 1, "red", 10);

            //for (var i = 0; i < object.length; i++) {
            //    object[i].exist = false;
            //}


            //var d = new deck(ctx.canvas.width / 2, ctx.canvas.height / 2, "normal");
            ////d.shuffle();
            //var t = d.cards.length - document.getElementById("testrange").value;
            //for (var i = 0; i < t; i++) {
            //    delete d.cards[i];
            //    d.cards.splice(i, 1);
            //    i--;
            //    t--;
            //}
            //for (var i = 0; i < d.cards.length; i++) {
            //    //d.cards[i].angleZ = -90 + i * (180 / (d.cards.length));
            //    d.cards[i].angleZ = (20 / d.cards.length) * i - (20 / 2 - (20 / (d.cards.length)) / 2);

            //    d.cards[i].centerX = Math.cos((d.cards[i].angleZ - 90) * Math.PI / 180) * 1500 + ctx.canvas.width / 2;
            //    d.cards[i].centerY = Math.sin((d.cards[i].angleZ - 90) * Math.PI / 180) * 1500 + ctx.canvas.height + 1500 - 20;
            //}
            //d.show();
            //delete d;

            break;
    }
    nextstate(this, "gametitle", 0, 0);
}

interfaceobject.prototype.pressstartbutton = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, ctx.canvas.width / 2, ctx.canvas.height / 2);
            this.bdy.push(new bdyrange(this, 0, 0, ctx.canvas.width, ctx.canvas.height));
            drawtext(ctx, "Click anywhere to start", this.centerX, this.centerY, "50px Verdana", "red", "center", "middle", 1);

            if (mousejudge(this)) {
                if (ismouseclick(0)) {
                    sound(this, 0, "ok");
                    objectif.push(new mainphase("g_menu", "gamephasecontroller"));
                }
            }
            break;
    }
    nextstate(this, "pressstartbutton", 0, 0);
}

interfaceobject.prototype.gameover = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, ctx.canvas.width / 2, ctx.canvas.height / 2);
            this.bdy.push(new bdyrange(this, 0, 0, ctx.canvas.width, ctx.canvas.height));

            drawtext(ctx, "GAME OVER", this.centerX, this.centerY - 100, "200px Verdana", "red", "center", "middle", 1);

            if (player1.score > player2.score) {
                drawtext(ctx, player1.name + " is the winner", this.centerX, this.centerY + 50, "50px Verdana", "red", "center", "middle", 1);
            } else if (player1.score < player2.score) {
                drawtext(ctx, player2.name + " is the winner", this.centerX, this.centerY + 50, "50px Verdana", "red", "center", "middle", 1);
            } else {
                drawtext(ctx, "Draw", this.centerX, this.centerY + 50, "50px Verdana", "red", "center", "middle", 1);
            }


            if (mousejudge(this)) {
                if (ismouseclick(0)) {
                    objectif.push(new mainphase("g_menu", "gamephasecontroller"));

                    //player1.score = 0;
                    //player2.score = 0;
                }
            }
            break;
        case cased(this, 1, 10):
            break;
        case cased(this, 11, 11):
            break;
    }
    nextstate(this, "gameover", 0, 0);
}



interfaceobject.prototype.fade_out = function () {

    switch (this.counter) {
        case cased(this, 0, 0):
            ctx.globalAlpha = 0;
            break;
        case cased(this, 1, 1):
            ctx.globalAlpha = 0.1;
            break;
        case cased(this, 2, 2):
            ctx.globalAlpha = 0.2;
            break;
        case cased(this, 3, 3):
            ctx.globalAlpha = 0.3;
            break;
        case cased(this, 4, 4):
            ctx.globalAlpha = 0.4;
            break;
        case cased(this, 5, 5):
            ctx.globalAlpha = 0.5;
            break;
        case cased(this, 6, 6):
            ctx.globalAlpha = 0.6;
            break;
        case cased(this, 7, 7):
            ctx.globalAlpha = 0.7;
            break;
        case cased(this, 8, 8):
            ctx.globalAlpha = 0.8;
            break;
        case cased(this, 9, 9):
            ctx.globalAlpha = 0.9;
            break;
        case cased(this, 10, 10):
            ctx.globalAlpha = 1;
            break;
    }

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalAlpha = 1;

    nextstate(this, "", 10, 1000);
}

interfaceobject.prototype.fade_in = function () {

    switch (this.counter) {
        case cased(this, 0, 0):
            ctx.globalAlpha = 1;
            break;
        case cased(this, 1, 1):
            ctx.globalAlpha = 0.9;
            break;
        case cased(this, 2, 2):
            ctx.globalAlpha = 0.8;
            break;
        case cased(this, 3, 3):
            ctx.globalAlpha = 0.7;
            break;
        case cased(this, 4, 4):
            ctx.globalAlpha = 0.6;
            break;
        case cased(this, 5, 5):
            ctx.globalAlpha = 0.5;
            break;
        case cased(this, 6, 6):
            ctx.globalAlpha = 0.4;
            break;
        case cased(this, 7, 7):
            ctx.globalAlpha = 0.3;
            break;
        case cased(this, 8, 8):
            ctx.globalAlpha = 0.2;
            break;
        case cased(this, 9, 9):
            ctx.globalAlpha = 0.1;
            break;
        case cased(this, 10, 10):
            ctx.globalAlpha = 0;
            break;
    }

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalAlpha = 1;

    nextstate(this, "", 10, 1000);
}




interfaceobject.prototype.selectcharacter = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            objectif.push(new interfaceobject(this, 200, ctx.canvas.height - 30, 0, 0, 1, "CVSButton,0,1," + player1.name + ",50,i_" + player1.constractor + ".name"));//载入CVSButton
            objectif.push(new interfaceobject(this, 200, 30, 0, 0, 1, "CVSButton,0,1," + player2.name + ",50,i_" + player2.constractor + ".name"));//载入CVSButton

            objectif.push(new interfaceobject(this, 0, ctx.canvas.height / 2 - 25, 0, 0, 1, "CVSButton,0,1," + (debug ? "☑" : "☒") + "Debug line,25,c_debug"));//载入CVSButton
            objectif.push(new interfaceobject(this, 0, ctx.canvas.height / 2 + 0, 0, 0, 1, "CVSButton,0,1," + (ctx.imageSmoothingEnabled ? "☑" : "☒") + "Anti-alias,25,c_ctx.imageSmoothingEnabled"));//载入CVSButton

            objectif.push(new interfaceobject(this, 0, ctx.canvas.height / 2 + 25, 0, 0, 1, "CVSLabel,0,1,AI (1~10) Lv.,25"));//载入CVSButton
            objectif.push(new interfaceobject(this, 0 + 170, ctx.canvas.height / 2 + 25, 0, 0, 1, "CVSButton,0,1," + level + ",25,r_level_1~10"));//载入CVSButton


            g_player1 = new sksjobject(player1, 200, ctx.canvas.height - 30, 0, 0, 1, "normal");
            objectif.push(g_player1);//载入玩家1；

            g_player2 = new sksjobject(player2, 200, 30, 0, 0, 1, "normal");
            objectif.push(g_player2);//载入玩家2；

            var g_controller = new sksjobject(this, 0, 0, 0, 0, 1, "controller");
            objectif.push(g_controller);//控制器；

            //var d1 = new interfaceobject(this,590,250,0,0,1,"s_davis");
            //pushtocanvas(objectif,ctx,d1);//载入人物1
            //var d2 = new interfaceobject(this,690,250,0,0,1,"s_davis");
            //pushtocanvas(objectif,ctx,d2);//载入人物2
            //var d3 = new interfaceobject(this,590,350,0,0,1,"s_davis");
            //pushtocanvas(objectif,ctx,d3);//载入人物3
            //var d4 = new interfaceobject(this,690,350,0,0,1,"s_davis");
            //pushtocanvas(objectif, ctx, d4);//载入人物4

            var d = new deck(ctx.canvas.width / 2, ctx.canvas.height / 2, "back");
            d.shuffle();


            var www = 10;
            var hhh = 10;


            var offsetx = (ctx.canvas.width - (www + 81) * 13) / 2;
            var offsety = (ctx.canvas.height - (www + 125) * 4) / 2;
            for (var i = 0; i < d.cards.length; i++) {
                d.cards[i].angle = 0;
                d.cards[i].centerX = offsetx + 81 / 2 + (81 + www) * (i % 13);
                d.cards[i].centerY = offsety + 125 / 2 + (125 + hhh) * (i % 4);
            }

            d.show();
            delete d;

            this.centerX = 590;
            this.centerY = 250;
            this.a = true;
            this.p = false;
            break;
        case cased(this, 1, 10):

            break;
        case cased(this, 11, 11):
            //ctx.beginPath();
            //ctx.strokeStyle="red";
            //ctx.strokeRect(this.centerX - 50,this.centerY - 50,100,100);
            //drawtext(ctx,"SELECT CHARACTER",this.centerX,this.centerY - 60,"10px Verdana","red","center","middle",1);

            //if(this.a)//延迟锁
            //{
            //	if (87 in keysDown)//按上
            //	{
            //		if(this.centerY != 250)
            //		{
            //		this.centerY -= 100;
            //		}
            //		this.a = false;
            //		var _cc = new interfaceobject(this,0,0,0,0,1,"choosecounter");
            //		pushtocanvas(objectif,ctx,_cc);//载入延迟锁计时器
            //	}
            //	if (83 in keysDown)//按下
            //	{
            //		if(this.centerY != 350)
            //		{
            //		this.centerY += 100;
            //		}
            //		this.a = false;
            //		var _cc = new interfaceobject(this,0,0,0,0,1,"choosecounter");
            //		pushtocanvas(objectif,ctx,_cc);//载入延迟锁计时器
            //	}
            //	if (65 in keysDown)//按左
            //	{
            //		if(this.centerX != 590)
            //		{
            //		this.centerX -= 100;
            //		}
            //		this.a = false;
            //		var _cc = new interfaceobject(this,0,0,0,0,1,"choosecounter");
            //		pushtocanvas(objectif,ctx,_cc);//载入延迟锁计时器
            //	}
            //	if (68 in keysDown)//按右
            //	{
            //		if(this.centerX != 690)
            //		{
            //		this.centerX += 100;
            //		}
            //		this.a = false;
            //		var _cc = new interfaceobject(this,0,0,0,0,1,"choosecounter");
            //		pushtocanvas(objectif,ctx,_cc);//载入延迟锁计时器
            //	}
            //}
            //	if (0 in keysDown)//确定
            //	{
            //		sound(this,11,"ok");
            //		this.p = true;
            //		this.exist = false;
            //	}
            //if (0 in keysDown)//取消
            //{   
            //	sound(this,11,"cancel");
            //	objectif.push(new mainphase("g_menu","gamephasecontroller"));
            //	this.exist = false;
            //}
            if (g_player1.getcards.length + g_player2.getcards.length >= 52) {
                objectif.push(new mainphase("g_gameover", "gamephasecontroller"));
                lockinput(true);
            }
            break;
    }
    nextstate(this, "selectcharacter", 11, 11);
}

interfaceobject.prototype.s_davis = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            if (this.identity.centerX == this.centerX && this.identity.centerY == this.centerY) {
                frameplay(this, "davis0_10", 0, 0, 42, 39);
            }
            else {
                frameplay(this, "davis0_0", 0, 0, 39, 39);
            }
            if (this.identity.centerX == this.centerX && this.identity.centerY == this.centerY && this.identity.p) {
                objectif.push(new mainphase("g_battle", "gamephasecontroller"));
                this.identity.p = false;
            }
            break;
    }
    nextstate(this, "s_davis", 0, 0);
}

interfaceobject.prototype.battleinterface = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            gamebg = new bg(this, 0, 0, 0, 0, 1, "castle1412")
            objectbg.push(gamebg);//载入场景；

            g_player1 = new beta(player1, 340, 520, 0, 0, 1, "standing");
            object.push(g_player1);//载入玩家1；

            g_player2 = new beta(player2, 940, 520, 0, 0, 1, "standing");
            g_player2.direction = -1;
            object.push(g_player2);//载入玩家2；

            var g_p1_hpgage = new interfaceobject(this, p1hpgage.x, p1hpgage.y, 0, 0, 1, "p1_hp")
            objectif.push(g_p1_hpgage);

            var g_p2_hpgage = new interfaceobject(this, p2hpgage.x, p2hpgage.y, 0, 0, 1, "p2_hp")
            g_p2_hpgage.direction = -1;
            objectif.push(g_p2_hpgage);
            //载入血条
            var timer = new interfaceobject(this, 640, 61, 0, 0, 1, "battletimer")
            objectif.push(timer);//载入计时器

            var _wv = new interfaceobject(this, 0, 0, 0, 0, 1, "windowvision")
            _wv.visualobject = g_player1;
            objectif.push(_wv);//载入视角控制器
            break;
    }
    nextstate(this, "", 0, 1000);
}

interfaceobject.prototype.windowvision = function () {
    switch (this.counter) {
        case cased(this, 0, 0):

            for (var i = 0; i < object.length; i++) {
                if (object[i].status == "character" || object[i].status == "weapon" || object[i].status == "ball") {
                    if (object[i].centerY < groundvalue) {
                        object[i].airland = "air";
                    }
                    else {
                        object[i].airland = "land";
                    }
                    if (object[i].status == "character" || object[i].status == "weapon") {
                        if (object[i].centerY < groundvalue) {
                            object[i].centerY += object[i].vy;
                            object[i].vy += vg * object[i].g_value;
                        }
                    }

                    if (object[i].centerY + object[i].dvy >= groundvalue && object[i].airland == "air")//落地反应
                    {
                        object[i].centerY = groundvalue;
                        object[i].airland = "land";
                        object[i].vy = 0;
                        object[i].dvy = 0;
                        object[i].counter = 0;
                        if (object[i].groundstate == "normal") {
                            if (object[i].status == "character") {
                                if (object[i].state == "fallingf") {

                                }
                                else if (object[i].state == "fallingb") {

                                }
                                else {
                                    object[i].state = "crouch";
                                }
                            }
                            else if (object[i].status == "weapon") {
                                object[i].state = "hitground";
                            }
                            else {
                                object[i].state = "hitground";
                            }
                        }
                        else {
                            object[i].state = object[i].groundstate;
                        }
                    }
                }
            }

            var cx = this.visualobject.tmidpointX;
            var cy = this.visualobject.tmidpointY;

            if (cx < gamesize.width / 2) {
                cx = gamesize.width / 2;
            }
            else if (cx > gamebg.bgwidth - gamesize.width / 2) {
                cx = gamebg.bgwidth - gamesize.width / 2;
            }

            if (cy > gamebg.bgheight - gamesize.height / 2) {
                cy = gamebg.bgheight - gamesize.height / 2;
            }
            else if (cy < gamesize.height / 2) {
                cy = gamesize.height / 2;
            }

            visualX = (cx - gamesize.width / 2);
            visualY = (cy - gamesize.height / 2);

            document.getElementById("demo2").innerHTML = "visualX and visualY:" + "(" + visualX + "," + visualY + ")";
            document.getElementById("demo3").innerHTML = "p1 and p2 middle point:" + "(" + cx + "," + cy + ")";

            break;
    }
    nextstate(this, "windowvision", 0, 0);
}



interfaceobject.prototype.p1_hp = function () {
    switch (this.counter) {
        case cased(this, 0, 0):

            if (g_player1) {

                frameplay(this, g_player1.cs, 0, 0, 50, 50);
                drawtext(ctx, g_player1.name, this.centerX, this.centerY + 60, "20px Verdana", "red", "left", "middle", 1);

                ctx.beginPath();
                ctx.rect(this.centerX, this.centerY, p1hpgage.w, p1hpgage.h);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "crimson";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.fillStyle = "red";
                var p1hp = g_player1.hp * p1hpgage.w / g_player1.maxhp;
                if (p1hp < 0) {
                    g_player1.hp = 0;
                    p1hp = 0;
                }
                ctx.fillRect(this.centerX + p1hpgage.w, this.centerY, -p1hp, p1hpgage.h);
                ctx.font = "20px Georgia";
                ctx.textAlign = "left";
                ctx.fillText(g_player1.hp, this.centerX, this.centerY - 10);
            }

            break;
    }
    nextstate(this, "p1_hp", 0, 0);
}

interfaceobject.prototype.p2_hp = function () {
    switch (this.counter) {
        case cased(this, 0, 0):

            if (g_player2) {

                frameplay(this, g_player2.cs, 0, 0, 50, 50);
                drawtext(ctx, g_player2.name, this.centerX, this.centerY + 60, "20px Verdana", "red", "right", "middle", 1);

                ctx.beginPath();
                ctx.rect(this.centerX, this.centerY, -p2hpgage.w, p2hpgage.h);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "crimson";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.fillStyle = "red";
                var p2hp = g_player2.hp * p2hpgage.w / g_player2.maxhp;
                if (p2hp < 0) {
                    g_player2.hp = 0;
                    p2hp = 0;
                }
                ctx.fillRect(this.centerX, this.centerY, -p2hp, p2hpgage.h);
                ctx.font = "20px Georgia";
                ctx.textAlign = "right";
                ctx.fillText(g_player2.hp, this.centerX, this.centerY - 10);
            }

            break;
    }
    nextstate(this, "p2_hp", 0, 0);
}

interfaceobject.prototype.battletimer = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            this.cmin = 0;
            this.chr = 0;

            this.rmin = -Math.PI / 2;
            this.rhr = -Math.PI / 2;

            this.fz = { myX: 14 / 4, myY: 31 / 4 };
            this.sz = { myX: 14 / 4, myY: 31 / 4 };


            break;
        case cased(this, 1, 10):
            break;
        case cased(this, 11, 11):
            frameplay(this, "timer_0", 0, 0, 53, 53);

            if (this.cmin >= 60) {
                this.rmin += 2 * Math.PI / 60;
                this.cmin = 0;
                this.chr += 1;
                //	sound(this,11,"ticktack");
            }
            if (this.chr >= 5) {
                this.rhr += 2 * Math.PI / 12 / 12;
                this.chr = 0;
                sound(this, 11, "ticktack");
            }


            ctx.save();
            ctx.translate(this.centerX, this.centerY);
            ctx.rotate(this.rhr);
            ctx.drawImage(document.getElementById("arrow_1"), -this.sz.myX, -this.sz.myY);
            ctx.restore();

            ctx.save();
            ctx.translate(this.centerX, this.centerY);
            ctx.rotate(this.rmin);
            ctx.drawImage(document.getElementById("arrow_0"), -this.fz.myX, -this.fz.myY);
            ctx.restore();


            this.cmin += 10;


            //this.rmin+=2*Math.PI/60/60;
            //this.rhr+=2*Math.PI/60/60/12;
            //
            //
            //		this.dXmin = Math.cos(this.rmin) * this.fz;
            //		this.dYmin = Math.sin(this.rmin) * this.fz;
            //		
            //		ctx.beginPath();
            //		ctx.moveTo(this.centerX,this.centerY);
            //		ctx.lineTo(this.centerX + this.dXmin,this.centerY + this.dYmin);
            //		ctx.strokeStyle="red";
            //		ctx.stroke();
            //		
            //		this.dXhr = Math.cos(this.rhr) * this.sz;
            //		this.dYhr = Math.sin(this.rhr) * this.sz;
            //		
            //		ctx.beginPath();
            //		ctx.moveTo(this.centerX,this.centerY);
            //		ctx.lineTo(this.centerX + this.dXhr,this.centerY + this.dYhr);
            //		ctx.strokeStyle="red";
            //		ctx.stroke();
            //sound(this,11,"ticktack");		


            break;
    }
    nextstate(this, "battletimer", 11, 11);
}