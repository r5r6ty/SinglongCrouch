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
    this.c;

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

interfaceobject.prototype.render = function () {
    this.bdy.splice(0, this.bdy.length);//清空bdy
    this.itr.splice(0, this.itr.length);//清空itr

    switch (this.state) {
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
    }
    switch (this.state) {
        case "fade_in":
            this.fade_in();//淡入
            break;
        case "fade_out":
            this.fade_out();//淡出
            break;
    }
    switch (this.state) {
        case "arcade":
            this.arcade();//arcade
            break;
        case "story":
            this.story();//story
            break;
        case "vs_cpu":
            this.vs_cpu();//vs_cpu
            break;
        case "vs_player":
            this.vs_player();//vs_player
            break;
    }
    switch (this.state) {
        case "choosecounter":
            this.choosecounter();//选项控制延时器
            break;
        case "windowvision":
            this.windowvision();//windowvision
            break;
    }
    switch (this.state) {
        case "s_davis":
            this.s_davis();//选davis
            break;
    }
    switch (this.state) {
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

    drawpic(this, this.c);

    this.counter += 1;
    return this.exist;
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
        case cased(this, 0, 0):

            this.myX = 250;
            this.myY = 5;

            var per = loadeddata / totaldata;

            ctx.fillStyle = "red";
            ctx.textAlign = "left";
            ctx.fillText("Now loading..." + (per * 100).toFixed(0) + "%" + "(" + loadeddata + "/" + totaldata + ")", this.centerX - this.myX, this.centerY - 10);
            ctx.beginPath();
            ctx.rect(this.centerX - this.myX, this.centerY - this.myY, 500, 10);
            ctx.strokeStyle = "red";
            ctx.stroke();
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.fillRect(this.centerX - this.myX, this.centerY - this.myY, 500 * per, 10);

            if (loadeddata >= totaldata)//当loading完
            {
                objectif.push(new mainphase("g_title", "gamephasecontroller"));
            }

            break;
    }
    nextstate(this, "nowloading", 0, 0);
}

interfaceobject.prototype.mainmenu = function () {
    switch (this.counter) {
        case cased(this, 0, 0):

            var _arcade = new interfaceobject(this, 640, 300, 0, 0, 1, "arcade");
            pushtocanvas(objectif, ctx, _arcade);//载入arcade
            var _story = new interfaceobject(this, 640, 330, 0, 0, 1, "story");
            pushtocanvas(objectif, ctx, _story);//载入story
            var _vs_cpu = new interfaceobject(this, 640, 360, 0, 0, 1, "vs_cpu");
            pushtocanvas(objectif, ctx, _vs_cpu);//载入arcade
            var _vs_player = new interfaceobject(this, 640, 390, 0, 0, 1, "vs_player");
            pushtocanvas(objectif, ctx, _vs_player);//载入arcade

            this.centerX = 640;
            this.centerY = 300;
            this.a = true;
            this.p = false;

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

interfaceobject.prototype.arcade = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "ARCADE", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);
            break;
        case cased(this, 1, 1):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "ARCADE", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);
            drawfillrect(ctx, this.centerX - 75, this.centerY - 15, 150, 30, "red", 0.5);
            break;
        case cased(this, 2, 2):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "ARCADE", this.centerX, this.centerY, "20px Verdana", "crimson", "center", "middle", 1);
            drawfillrect(ctx, this.centerX - 75, this.centerY - 15, 150, 30, "crimson", 0.5);

            if (ismouseclick(0)) {
                sound(this, 2, "ok");
                objectif.push(new mainphase("g_arcade", "gamephasecontroller"));
                this.button = false;
            }
            break;
    }
    nextstate(this, "arcade", 0, buttonnextstate(this, 0, 0, 1, 2));
}

interfaceobject.prototype.story = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "STORY", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);
            break;
        case cased(this, 1, 1):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "STORY", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);
            drawfillrect(ctx, this.centerX - 75, this.centerY - 15, 150, 30, "red", 0.5);
            break;
        case cased(this, 2, 2):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "STORY", this.centerX, this.centerY, "20px Verdana", "crimson", "center", "middle", 1);
            drawfillrect(ctx, this.centerX - 75, this.centerY - 15, 150, 30, "crimson", 0.5);

            if (ismouseclick(0)) {
                sound(this, 2, "ok");
                objectif.push(new mainphase("g_story", "gamephasecontroller"));
                this.button = false;
            }
            break;
    }
    nextstate(this, "story", 0, buttonnextstate(this, 0, 0, 1, 2));
}

interfaceobject.prototype.vs_cpu = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "VS CPU", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);
            break;
        case cased(this, 1, 1):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "VS CPU", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);
            drawfillrect(ctx, this.centerX - 75, this.centerY - 15, 150, 30, "red", 0.5);
            break;
        case cased(this, 2, 2):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "VS CPU", this.centerX, this.centerY, "20px Verdana", "crimson", "center", "middle", 1);
            drawfillrect(ctx, this.centerX - 75, this.centerY - 15, 150, 30, "crimson", 0.5);

            if (ismouseclick(0)) {
                sound(this, 2, "ok");
                objectif.push(new mainphase("g_vs_cpu", "gamephasecontroller"));
                this.button = false;
            }
            break;
    }
    nextstate(this, "vs_cpu", 0, buttonnextstate(this, 0, 0, 1, 2));
}

interfaceobject.prototype.vs_player = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "VS PLAYER", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);
            break;
        case cased(this, 1, 1):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "VS PLAYER", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);
            drawfillrect(ctx, this.centerX - 75, this.centerY - 15, 150, 30, "red", 0.5);
            break;
        case cased(this, 2, 2):
            frameplay(this, "", 0, 0, 75, 15);
            this.bdy.push(new bdyrange(this, 0, 0, 150, 30));
            drawtext(ctx, "VS PLAYER", this.centerX, this.centerY, "20px Verdana", "crimson", "center", "middle", 1);
            drawfillrect(ctx, this.centerX - 75, this.centerY - 15, 150, 30, "crimson", 0.5);

            if (ismouseclick(0)) {
                sound(this, 2, "ok");
                objectif.push(new mainphase("g_vs_player", "gamephasecontroller"));
                this.button = false;
            }
            break;
    }
    nextstate(this, "vs_player", 0, buttonnextstate(this, 0, 0, 1, 2));
}



interfaceobject.prototype.gametitle = function () {
    switch (this.counter) {
        case cased(this, 0, 0):

            drawtext(ctx, gametitle, this.centerX, this.centerY, "italic 50px Verdana", "red", "center", "middle", 1);

            break;
    }
    nextstate(this, "gametitle", 0, 0);
}

interfaceobject.prototype.pressstartbutton = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            frameplay(this, "", 0, 0, ctx.canvas.width / 2, ctx.canvas.height / 2);
            this.bdy.push(new bdyrange(this, 0, 0, ctx.canvas.width, ctx.canvas.height));
            drawtext(ctx, "Click anywhere to start", this.centerX, this.centerY, "20px Verdana", "red", "center", "middle", 1);

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
    ctx.fillRect(0, 0, 1280, 720);
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
    ctx.fillRect(0, 0, 1280, 720);
    ctx.globalAlpha = 1;

    nextstate(this, "", 10, 1000);
}




interfaceobject.prototype.selectcharacter = function () {
    switch (this.counter) {
        case cased(this, 0, 0):

            g_player1 = new arcadeobject(player1, 200, 700, 0, 0, 1, "normal");
            pushtocanvas(objectif, ctx, g_player1);//载入玩家1；

            g_player2 = new arcadeobject(player2, 200, 20, 0, 0, 1, "normal");
            pushtocanvas(objectif, ctx, g_player2);//载入玩家2；

            var g_controller = new arcadeobject(this, 0, 0, 0, 0, 1, "controller");
            pushtocanvas(objectif, ctx, g_controller);//控制器；

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
                g_player1.identity.score = g_player1.getcards.length;
                g_player2.identity.score = g_player2.getcards.length;
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
            pushtocanvas(objectbg, ctx, gamebg);//载入场景；

            g_player1 = new beta(player1, 340, 520, 0, 0, 1, "standing");
            pushtocanvas(object, ctx, g_player1);//载入玩家1；

            g_player2 = new beta(player2, 940, 520, 0, 0, 1, "standing");
            g_player2.direction = -1;
            pushtocanvas(object, ctx, g_player2);//载入玩家2；

            var g_p1_hpgage = new interfaceobject(this, p1hpgage.x, p1hpgage.y, 0, 0, 1, "p1_hp")
            pushtocanvas(objectif, ctx, g_p1_hpgage);

            var g_p2_hpgage = new interfaceobject(this, p2hpgage.x, p2hpgage.y, 0, 0, 1, "p2_hp")
            g_p2_hpgage.direction = -1;
            pushtocanvas(objectif, ctx, g_p2_hpgage);
            //载入血条
            var timer = new interfaceobject(this, 640, 61, 0, 0, 1, "battletimer")
            pushtocanvas(objectif, ctx, timer);//载入计时器

            var _wv = new interfaceobject(this, 0, 0, 0, 0, 1, "windowvision")
            _wv.visualobject = g_player1;
            pushtocanvas(objectif, ctx, _wv);//载入视角控制器
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