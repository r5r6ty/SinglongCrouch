function core1(id,cx,cy,acx,acy,r,alpha,symmetry,s)
{
	this.functionname = "core1";
	this.z_index = 0;

	this.pX = 0;
	this.pY = 0;
	this.linked = false;
	this.Oarea = [{pX:1,pY:0},{pX:0,pY:1},{pX:-1,pY:0},{pX:0,pY:-1}];
	this.Xarea = [];
	this.key = {key: "none",keydown: false};

	this.counter = 0;
	this.identity = id.identity;
	this.core = this;
	this.target = "null";
	this.pic;
	this.state = s;
	this.status = "core";
	this.centerX = cx;
	this.centerY = cy;
	this.myX = 6;
	this.myY = 6;
	this.dvx = 0;
	this.dvy = 0;
	this.acx = 0;
	this.acy = 0;
	this.rotate = r % 360;
	this.rotate2 = this.rotate;
	this.Alpha = alpha;
	this.exist = true;
	
	this.hp = 1000;
	this.maxhp = this.hp;
	this.def = 0;
	
	this.blocklink = true;
	
	this.charge = 1000;
	this.maxcharge = this.charge;
	
	this.r2m = 0;
	this.clockwise = true;
	
	//四个方向，右是0，下是90，左是180，上是270；
	
	this.symmetry = symmetry;
	MYsymmetry(this);

	this.bx;
	this.by;
	this.bw;
	this.bh;
}

core1.prototype.render = function()
{
if(this.hp <= 0)
{
	this.state = "explosion";
	this.counter = 0;
	this.charge = 0;
	this.maxcharge = 0;
}
	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
		case "explosion":
			this.explosion();
			break;
			
		case "show":
			this.show();
			break;
		case "manufacture":
			this.manufacture();
			break;
	}

//drawpic(this,this.c);



ctxtest.beginPath();
ctxtest.arc(this.centerX / 10,this.centerY / 10,2,0,2*Math.PI);
ctxtest.stroke();
ctxtest.fillStyle="red";
ctxtest.fill();

bdy(this,0,0,10,12,0);

if(this.hp != this.maxhp)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="red";
ctxif.moveTo(this.centerX - 10,this.centerY - 12);
ctxif.lineTo(this.centerX - 10 + this.hp*20/this.maxhp,this.centerY - 12);
ctxif.stroke();
ctxif.restore();
}




this.counter += 1;
return this.exist;
}

core1.prototype.normal = function()
{
if(this.target != "null" && this.target.exist)
{
}
else
{
	if(this.identity == "player")
	{
		this.target = mouse;
	}
	else
	{
		for(var i=0; i<object.length; i++)
		{
			if(object[i] != undefined && object[i].identity != this.identity && object[i].status == "core")
			{
			this.target = object[i];
			break;
			}
		}		
	}
}//搜敌循环

this.charge = this.maxcharge;
dfs(this,this);


		for(var i=0; i<object.length; i++)
		{
			if(object[i] != undefined && object[i].identity == this.identity && object[i].core == this.core && object[i].core != undefined)
			{
				if(object[i].linked == false)
				{
					object[i].state = "explosion";
					object[i].counter = 0;
				}
				else
				{
					object[i].linked = false;
				}
			}
		}
	
this.r2m = r2target(this,this.target);

if(this.r2m < 0)
{
	this.r2m += 360;
}

if(this.rotate2 - this.r2m < -180)
{
	this.rotate2 += 360;
}
else if(this.rotate2 - this.r2m > 180)
{
	this.rotate2 -= 360;
}

if(this.rotate2 > this.r2m)
{
	this.clockwise = true;
}
else if(this.rotate2 < this.r2m)
{
	this.clockwise = false;
}

if(this.target == mouse)
{
var d = Math.sqrt(Math.pow(this.target.centerX + visualX - this.centerX,2) + Math.pow(this.target.centerY + visualY - this.centerY,2))
}
else
{
var d = Math.sqrt(Math.pow(this.target.centerX - this.centerX,2) + Math.pow(this.target.centerY - this.centerY,2))
}
ctx.beginPath();
ctx.save();
ctx.translate(Math.round(-visualX),Math.round(-visualY));
ctx.strokeStyle="yellow";
ctx.globalAlpha = 0.5;
ctx.moveTo(this.centerX,this.centerY);
ctx.arc(this.centerX,this.centerY,d,this.rotate2*(Math.PI/180),this.r2m*(Math.PI/180),this.clockwise);
ctx.closePath();
ctx.stroke();
ctx.restore();

//document.getElementById("demo7").innerHTML=g_player.dvx + "/" + g_player.dvy;

this.centerX += this.dvx;
this.centerY += this.dvy;

this.dvx = 0;
this.dvy = 0;

		var cx = g_player.centerX;
		var cy = g_player.centerY;
		visualX = (cx - gamesize.width/2);
		visualY = (cy - gamesize.height/2);





	switch(this.counter)
	{
	case cased(this,0,0):

//this.rotate2 = this.rotate + this.core.rotate2; 


drawblock(this,"core1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"normal",0,0);
}

core1.prototype.explosion = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

object.push(new effect(this,this.centerX,this.centerY,0,0,0,1,this.symmetry,"explosion1"));

		break;
	}
nextstate(this,"",0,1000);
}

core1.prototype.show = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

this.charge = this.maxcharge;
dfs(this,this);


		for(var i=0; i<object.length; i++)
		{
			if(object[i] != undefined && object[i].identity == this.identity && object[i].core == this.core && object[i].core != undefined)
			{
				if(!object[i].linked)
				{
					drawblock(this,"blockstate_2",object[i].centerX,object[i].centerY,6,6,0,1,ctxif);
				}
				else
				{
					object[i].linked = false;
				}
			}
		}

//this.rotate2 = this.rotate + this.core.rotate2; 

drawblock(this,"core1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

//if(g_p == "modification")
//{
//	for(var i=0; i<rdlu.length; i++)
//	{
//		if(this.linkmechanism[i] == "yes")
//		{
//		var lmr = ((this.rotate2 + rdlu[i])%360);
//
//		var diffX = Math.cos(lmr*(Math.PI/180)) * 12;
//		var diffY = Math.sin(lmr*(Math.PI/180)) * 12;
//		drawblock(this,"prototypeblock_0",this.centerX + diffX,this.centerY + diffY,6,6,0,1,ctx);
//		}
//	}
//}

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

		break;
	}
nextstate(this,"show",0,0);
}

function XOaeracheck(o,Xareax,Xareay)
{
var x = o.centerX + Xareax * 12;
var y = o.centerY + Xareay * 12;

var dx = x - o.centerX;
var dy = y - o.centerY;

var r = Math.atan2(dy,dx)/(Math.PI/180);//计算相对core的朝向

if(r < 0)
{
	r += 360;
}

var distance = Math.sqrt(Math.pow(o.centerX - x,2) + Math.pow(o.centerY - y,2));

var r2r = (r + o.rotate) % 360;

var diffX =Math.cos(r2r*(Math.PI/180)) * distance;
var diffY =Math.sin(r2r*(Math.PI/180)) * distance;

var Xx = Math.round(diffX)/12;
var Xy = Math.round(diffY)/12;

return {x: Xx,y: Xy};
}





core1.prototype.manufacture = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

//this.centerX = g_cursor.centerX;
//this.centerY = g_cursor.centerY;

//this.rotate2 = this.rotate;
//
//drawblock(this,"core1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctxif);

		for(var i=0; i<object.length; i++)
		{
			if(object[i] != undefined && object[i].status == "core")
			{
			this.exist = false;
			break;
			}
		}
		if(this.exist)
		{
			g_player = new core1(player,startx,starty,0,0,0,1,1,"show");
			object.push(g_player);
		}



		break;
	}
nextstate(this,"manufacture",0,0);
}













function cannon1(id,cx,cy,acx,acy,r,alpha,symmetry,s)
{
	this.functionname = "cannon1";
	this.z_index = 1;

	this.pX = cx;
	this.pY = cy;
	this.linked = false;
	this.Oarea = [{pX:-1,pY:0}];
	this.Xarea = [{pX:1,pY:0}];
	this.key = {key: 0,keydown: false};

	this.counter = 0;
	this.identity = id.identity;
	this.core = id;
	this.target = "null";
	this.pic;
	this.state = s;
	this.status = "cannon";
	this.centerX = this.core.centerX + this.pX*12;
	this.centerY = this.core.centerY + this.pY*12;
	this.myX = 6;
	this.myY = 6;
	this.dvx = 0;
	this.dvy = 0;
	this.rotate = r % 360;
	this.rotate2 = 0;
	this.r2r = 0;
	this.Alpha = alpha;
	this.exist = true;
	
	this.hp = 200;
	this.maxhp = this.hp;
	this.def = 10;
	
	this.ammo = 10;
	this.maxammo = this.ammo;
	this.consumption = 1;
	this.reloadspeed = 0.05;
	
	this.charge = 20;
	
	this.diffX = 0;
	this.diffY = 0;
	
	this.r2m = 0;
	this.rspeed = 1;
	this.rpp = 0;
	this.leftrpp = -90;
	this.rightrpp = 90;
	//炮台专用参数
	
	this.symmetry = symmetry;
	MYsymmetry(this);
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
	
	this.r = myrotation(this);
	this.distance = Math.sqrt(Math.pow(this.core.centerX - this.centerX,2) + Math.pow(this.core.centerY - this.centerY,2));

}

cannon1.prototype.render = function()
{
if(this.ammo <= 0 && this.state == "normal")
{
	this.state = "reloading";
	this.counter = 0;
}
if(this.hp <= 0 || !this.core.exist)
{
	this.state = "explosion";
	this.counter = 0;
}
	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
		case "shoot":
			this.shoot();
			break;
		case "reloading":
			this.reloading();
			break;
		case "out_of_charge":
			this.out_of_charge();
			break;
		case "explosion":
			this.explosion();
			break;
			
		case "show":
			this.show();
			break;
		case "wait_keyset":
			this.wait_keyset();
			break;
		case "manufacture":
			this.manufacture();
			break;
	}

//drawpic(this,this.c);

bdy(this,0,0,12,12,0);

if(this.hp != this.maxhp)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="red";
ctxif.moveTo(this.centerX - 10,this.centerY - 12);
ctxif.lineTo(this.centerX - 10 + this.hp*20/this.maxhp,this.centerY - 12);
ctxif.stroke();
ctxif.restore();
}
if(this.ammo != this.maxammo)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="yellow";
ctxif.moveTo(this.centerX - 10,this.centerY - 11);
ctxif.lineTo(this.centerX - 10 + this.ammo*20/this.maxammo,this.centerY - 11);
ctxif.stroke();
ctxif.restore();
}


this.counter += 1;
return this.exist;
}

function r2target(o,t)
{
if(t == mouse)
{
var dx = t.centerX + visualX - o.centerX;
var dy = t.centerY + visualY - o.centerY;
}
else
{
var dx = t.centerX - o.centerX;
var dy = t.centerY - o.centerY;
}

var r = Math.round(Math.atan2(dy,dx)/(Math.PI/180));

return r;
}


cannon1.prototype.normal = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

MYblock_rotate2mouse(this,true);

if(this.target != "null" && this.target.exist)
{
}
else
{
	this.target = this.core.target
}//搜敌循环

var k = keystate(this,this.key);
if(k == "down" && this.identity == "player")
{
	this.state = "shoot";
	this.counter = 0 - 1;
}

drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"normal",0,0);
}




cannon1.prototype.shoot = function()
{
MYblock_rotate2mouse(this,true);

	switch(this.counter)
	{
	case cased(this,0,1):
sound(this,0,"cannon1",false);
if(this.counter == 0)
{
if(this.ammo - this.consumption < 0)
{
	this.ammo = 0;
}
else
{
	this.ammo -= this.consumption;
}

var diffX =Math.cos(this.rotate2*(Math.PI/180)) * 12;
var diffY =Math.sin(this.rotate2*(Math.PI/180)) * 12;

object.push(new bullet1(this,this.centerX + diffX,this.centerY + diffY,this.core.dvx,this.core.dvy,this.rotate2,1,"normal"));
}
drawblock(this,"cannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,2,3):
drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,4,5):
drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,6,7):
drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_3",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,8,9):
drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,10,11):
drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,12,13):
drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	}
nextstate(this,"normal",13,0);
}

cannon1.prototype.reloading = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_rotate2mouse(this,true);

if(this.ammo + this.reloadspeed > this.maxammo)
{
	this.ammo = this.maxammo;
}
else
{
	this.ammo += this.reloadspeed;
}
if(this.ammo == this.maxammo)
{
	this.state = "normal";
	this.counter = 0 - 1;
}

drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_1",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"reloading",0,0);
}

cannon1.prototype.out_of_charge = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

MYblock_rotate2mouse(this,false);

drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_0",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"out_of_charge",0,0);
}

cannon1.prototype.explosion = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

object.push(new effect(this,this.centerX,this.centerY,0,0,0,1,this.symmetry,"explosion1"));

		break;
	}
nextstate(this,"",0,1000);
}

cannon1.prototype.show = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
	MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

if(g_cursor != undefined && g_cursor.rightcondition == "down" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block())
{
	this.exist = false;
}
else if(g_cursor != undefined && g_cursor.leftcondition == "click" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block() && this.key.key != "none")
{
	this.state = "wait_keyset";
	this.counter = -1;
}

drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"show",0,0);
}

cannon1.prototype.wait_keyset = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
	MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

for(var i=0; i<124; i++)
{
	if(i in keysDown)
	{
	this.key.key = i;
	this.state = "show";
	this.counter = -1;
	break;
	}
}

drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctx);
drawblock(this,"cannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_3",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"wait_keyset",0,0);
}

cannon1.prototype.manufacture = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

var mx = g_cursor.centerX - 400;
var my = g_cursor.centerY - 300;

var x12 = (mx - (mx%12)) + 400;
var y12 = (my - (my%12)) + 300;

this.centerX = x12;
this.centerY = y12;

this.rotate2 = this.rotate;

if(g_cursor.middlecondition == "click")
{
symmetrychange(this);
}

//if(this.symmetry == -1)
//{
//
//}

draw_Oarea_and_Xarea(this);

if(g_cursor.leftcondition == "down" && check_Xarea(this) && check_Oarea(this) && check_cover(this))
{
	var diffX = (this.centerX - g_player.centerX)/12;
	var diffY = (this.centerY - g_player.centerY)/12;
	object.push(new cannon1(g_player,diffX,diffY,0,0,this.rotate,1,this.symmetry,"show"));
}

if(g_cursor.rightcondition == "click")
{
	this.exist = false;
}



drawblock(this,"cannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate + this.core.rotate2,1,ctxif);
drawblock(this,"cannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctxif);

		break;
	}
nextstate(this,"manufacture",0,0);
}

function MYsymmetry(o)
{
	for(var i=0; i<o.Oarea.length; i++)
	{
		o.Oarea[i].pY =  o.Oarea[i].pY * o.symmetry;
	}
	for(var i=0; i<o.Xarea.length; i++)
	{
		o.Xarea[i].pY =  o.Xarea[i].pY * o.symmetry;
	}
}

function symmetrychange(o)
{
	o.symmetry *= -1;
	for(var i=0; i<o.Oarea.length; i++)
	{
		o.Oarea[i].pY =  o.Oarea[i].pY * -1;
	}
	for(var i=0; i<o.Xarea.length; i++)
	{
		o.Xarea[i].pY =  o.Xarea[i].pY * -1;
	}
}

function draw_Oarea_and_Xarea(o)
{
	for(var i=0; i<o.Oarea.length; i++)
	{
	var s = true;
	var OareaXY = XOaeracheck(o,o.Oarea[i].pX,o.Oarea[i].pY);
	var diffX = o.centerX + OareaXY.x * 12;
	var diffY = o.centerY + OareaXY.y * 12;
		for(var j=0; j<object.length; j++)
		{
			if(object[j] != undefined && object[j].state != "manufacture")
			{
				if(object[j].centerX == diffX && object[j].centerY == diffY && o.state != "manufacture")
				{
					s = false;
				}
				for(var k=0; k<object[j].Xarea.length; k++)
				{
				var XareaXY2 = XOaeracheck(object[j],object[j].Xarea[k].pX,object[j].Xarea[k].pY);
				var diffX2 = object[j].centerX + XareaXY2.x * 12;
				var diffY2 = object[j].centerY + XareaXY2.y * 12;
					if(diffX2 == diffX && diffY2 == diffY)
					{
						s = false;
					}
				}
			}
		}
		if(s)
		{
		drawblock(o,"prototypeblock_0",diffX,diffY,6,6,0,1,ctxif);
		}
	}
	for(var i=0; i<o.Xarea.length; i++)
	{
	var XareaXY = XOaeracheck(o,o.Xarea[i].pX,o.Xarea[i].pY);
	var diffX = o.centerX + XareaXY.x * 12;
	var diffY = o.centerY + XareaXY.y * 12;
	drawblock(o,"prototypeblock_1",diffX,diffY,6,6,0,1,ctx);
	}
}

function check_Xarea(o)
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state != "manufacture")
		{
			for(var j=0; j<object[i].Xarea.length; j++)
			{
			var XareaXY = XOaeracheck(object[i],object[i].Xarea[j].pX,object[i].Xarea[j].pY);
			var diffX = object[i].centerX + XareaXY.x * 12;
			var diffY = object[i].centerY + XareaXY.y * 12;
				if(diffX == o.centerX && diffY == o.centerY)
				{
					return false;
				}
			}
			for(var j=0; j<o.Xarea.length; j++)
			{
			var XareaXY2 = XOaeracheck(o,o.Xarea[j].pX,o.Xarea[j].pY);
			var diffX2 = o.centerX + XareaXY2.x * 12;
			var diffY2 = o.centerY + XareaXY2.y * 12;
				if(object[i].centerX == diffX2 && object[i].centerY == diffY2)
				{
					return false;
				}
			}
		}
	}
return true;
}

function check_Oarea(o)
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state != "manufacture")
		{
			for(var j=0; j<object[i].Oarea.length; j++)
			{
			var OareaXY = XOaeracheck(object[i],object[i].Oarea[j].pX,object[i].Oarea[j].pY);
			var diffX = object[i].centerX + OareaXY.x * 12;
			var diffY = object[i].centerY + OareaXY.y * 12;
				for(var k=0; k<o.Oarea.length; k++)
				{
				var OareaXY2 = XOaeracheck(o,o.Oarea[k].pX,o.Oarea[k].pY);
				var diffX2 = o.centerX + OareaXY2.x * 12;
				var diffY2 = o.centerY + OareaXY2.y * 12;
					if(o.centerX == diffX && o.centerY == diffY && object[i].centerX == diffX2 && object[i].centerY == diffY2)
					{
						return true;
					}
				}
			}
		}
	}
return false;
}

function check_Oarea2(o)
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state != "manufacture")
		{
			for(var j=0; j<o.Oarea.length; j++)
			{
			var OareaXY = XOaeracheck(o,o.Oarea[j].pX,o.Oarea[j].pY);
			var diffX = o.centerX + OareaXY.x * 12;
			var diffY = o.centerY + OareaXY.y * 12;
				if(object[i].centerX == diffX && object[i].centerY == diffY)
				{
					return true;
				}
			}
		}
	}
return false;
}

function check_cover(o)
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state != "manufacture" && object[i].centerX == o.centerX && object[i].centerY == o.centerY)
		{
			return false;
		}
	}
return true;
}

function check_no_manufacture_block()
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state == "manufacture")
		{
			return false;
		}
	}
return true;
}


function MYblock_rotate2mouse(o,move)
{
o.r2m = r2target(o,o.target);
	
o.rotate2 = o.rotate + o.core.rotate2 + o.rpp - o.core.rotate;

if(move)
{
	if(o.rotate2 - o.r2m < -180)
	{
		o.rotate2 += 360;
	}
	else if(o.rotate2 - o.r2m > 180)
	{
		o.rotate2 -= 360;
	}
	
	if(o.rotate2 > o.r2m)
	{
		if(o.rpp <= o.leftrpp)
		{
			o.rpp = o.leftrpp;
		}
		else
		{
			if(o.rotate2 - o.r2m >= o.rspeed)
			{
			o.rpp -= o.rspeed;
			}
			else
			{
			o.rpp -= o.rotate2 - o.r2m;
			}
		}
	
	}
	else if(o.rotate2 < o.r2m)
	{
		if(o.rpp >= o.rightrpp)
		{
			o.rpp = o.rightrpp;
		}
		else
		{
			if(o.r2m - o.rotate2 >= o.rspeed)
			{
			o.rpp += o.rspeed;
			}
			else
			{
			o.rpp += o.r2m - o.rotate2;
			}
		}
	}
}

o.r2r = (o.r + o.core.rotate2 - o.core.rotate) % 360;

o.diffX =Math.cos(o.r2r*(Math.PI/180)) * o.distance;
o.diffY =Math.sin(o.r2r*(Math.PI/180)) * o.distance;

o.centerX = o.core.centerX + o.diffX;
o.centerY = o.core.centerY + o.diffY;
}

function MYblock_normal(o)
{
o.rotate2 = o.rotate + o.core.rotate2 - o.core.rotate;

o.r2r = (o.r + o.core.rotate2 - o.core.rotate) % 360;

o.diffX =Math.cos(o.r2r*(Math.PI/180)) * o.distance;
o.diffY =Math.sin(o.r2r*(Math.PI/180)) * o.distance;

o.centerX = o.core.centerX + Math.round(o.diffX);
o.centerY = o.core.centerY + Math.round(o.diffY);
}










function block1(id,cx,cy,acx,acy,r,alpha,symmetry,s)
{
	this.functionname = "block1";
	this.z_index = 0;

	this.pX = cx;
	this.pY = cy;
	this.linked = false;
	this.Oarea = [{pX:1,pY:0},{pX:0,pY:1},{pX:-1,pY:0},{pX:0,pY:-1}];
	this.Xarea = [];
	this.key = {key: "none",keydown: false};

	this.counter = 0;
	this.identity = id.identity;
	this.core = id;
	this.pic;
	this.state = s;
	this.status = "block";
	this.centerX = this.core.centerX + this.pX*12;
	this.centerY = this.core.centerY + this.pY*12;
	this.myX = 6;
	this.myY = 6;
	this.dvx = 0;
	this.dvy = 0;
	this.rotate = r % 360;
	this.r2r = 0;
	this.Alpha = alpha;
	this.exist = true;
	
	this.hp = 500;
	this.maxhp = this.hp;
	this.def = 10;
	
	this.charge = 0;
	
	this.diffX = 0;
	this.diffY = 0;
	
	this.symmetry = symmetry;
	MYsymmetry(this);
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
	
	this.r = myrotation(this);
	this.distance = Math.sqrt(Math.pow(this.core.centerX - this.centerX,2) + Math.pow(this.core.centerY - this.centerY,2));
}

block1.prototype.render = function()
{
if(this.hp <= 0 || !this.core.exist)
{
	this.state = "explosion";
	this.counter = 0;
}
	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
		case "out_of_charge":
			this.out_of_charge();
			break;
		case "explosion":
			this.explosion();
			break;
			
		case "show":
			this.show();
			break;
		case "manufacture":
			this.manufacture();
			break;
	}

//drawpic(this,this.c);

bdy(this,0,0,12,12,0);

if(this.hp != this.maxhp)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="red";
ctxif.moveTo(this.centerX - 10,this.centerY - 12);
ctxif.lineTo(this.centerX - 10 + this.hp*20/this.maxhp,this.centerY - 12);
ctxif.stroke();
ctxif.restore();
}

this.counter += 1;
return this.exist;
}

block1.prototype.normal = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

drawblock(this,"block1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"normal",0,0);
}

block1.prototype.out_of_charge = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

drawblock(this,"block1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_0",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"out_of_charge",0,0);
}

block1.prototype.explosion = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

object.push(new effect(this,this.centerX,this.centerY,0,0,0,1,this.symmetry,"explosion1"));

		break;
	}
nextstate(this,"",0,1000);
}

block1.prototype.show = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

if(g_cursor != undefined && g_cursor.rightcondition == "down" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block())
{
	this.exist = false;
}
else if(g_cursor != undefined && g_cursor.leftcondition == "click" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block() && this.key.key != "none")
{
	this.state = "wait_keyset";
	this.counter = -1;
}

drawblock(this,"block1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"show",0,0);
}

block1.prototype.manufacture = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

var mx = g_cursor.centerX - 400;
var my = g_cursor.centerY - 300;

var x12 = (mx - (mx%12)) + 400;
var y12 = (my - (my%12)) + 300;

this.centerX = x12;
this.centerY = y12;

this.rotate2 = this.rotate;

if(g_cursor.middlecondition == "click")
{
symmetrychange(this);
}

draw_Oarea_and_Xarea(this);

if(g_cursor.leftcondition == "down" && check_Xarea(this) && check_Oarea(this) && check_cover(this))
{
	var diffX = (this.centerX - g_player.centerX)/12;
	var diffY = (this.centerY - g_player.centerY)/12;
	object.push(new block1(g_player,diffX,diffY,0,0,this.rotate,1,this.symmetry,"show"));
}

if(g_cursor.rightcondition == "click")
{
	this.exist = false;
}

drawblock(this,"block1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctxif);

		break;
	}
nextstate(this,"manufacture",0,0);
}






function propeller1(id,cx,cy,acx,acy,r,alpha,symmetry,s)
{
	this.functionname = "propeller1";
	this.z_index = 0;

	this.pX = cx;
	this.pY = cy;
	this.linked = false;
	this.Oarea = [{pX:1,pY:0}];
	this.Xarea = [{pX:-1,pY:0}];
	this.key = {key: 87,keydown: false};

	this.counter = 0;
	this.identity = id.identity;
	this.core = id;
	this.pic;
	this.state = s;
	this.status = "Propeller";
	this.centerX = this.core.centerX + this.pX*12;
	this.centerY = this.core.centerY + this.pY*12;
	this.myX = 32;
	this.myY = 14;
	this.dvx = 0;
	this.dvy = 0;
	this.vx = 0;
	this.vy = 0;
	this.rotate = r % 360;
	this.r2r = 0;
	this.Alpha = alpha;
	this.exist = true;
	
	this.hp = 100;
	this.maxhp = this.hp;
	this.def = 10;
	
	this.fuel = 1000;
	this.maxfuel = this.fuel;
	this.consumption = 1;
	this.reloadspeed = 2;
	
	this.charge = 30;
	
	this.diffX = 0;
	this.diffY = 0;
	
	this.speed = 1;
	this.acceleration = 0.001;
	
	this.symmetry = symmetry;
	MYsymmetry(this);
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
	
	this.r = myrotation(this);
	this.distance = Math.sqrt(Math.pow(this.core.centerX - this.centerX,2) + Math.pow(this.core.centerY - this.centerY,2));
}

propeller1.prototype.render = function()
{
if(this.fuel <= 0)
{
	this.state = "reloading";
	this.counter = 0;
}
if(this.hp <= 0 || !this.core.exist)
{
	this.state = "explosion";
	this.counter = 0;
}
	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
		case "working":
			this.working();
			break;
		case "reloading":
			this.reloading();
			break;
		case "out_of_charge":
			this.out_of_charge();
			break;
		case "explosion":
			this.explosion();
			break;
		
		case "show":
			this.show();
			break;
		case "wait_keyset":
			this.wait_keyset();
			break;
		case "manufacture":
			this.manufacture();
			break;
	}

//drawpic(this,this.c);

bdy(this,0,0,12,12,0);

if(this.hp != this.maxhp)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="red";
ctxif.moveTo(this.centerX - 10,this.centerY - 12);
ctxif.lineTo(this.centerX - 10 + this.hp*20/this.maxhp,this.centerY - 12);
ctxif.stroke();
ctxif.restore();
}
if(this.fuel != this.maxfuel)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="yellow";
ctxif.moveTo(this.centerX - 10,this.centerY - 11);
ctxif.lineTo(this.centerX - 10 + this.fuel*20/this.maxfuel,this.centerY - 11);
ctxif.stroke();
ctxif.restore();
}

this.counter += 1;
return this.exist;
}

propeller1.prototype.normal = function()
{
var k = keystate(this,this.key);
if (k == "down" && this.identity == "player")//按key
{
	this.state = "working";
	this.counter = 0 - 1;
}
	
MYblock_normal(this);

this.acx = 0;
this.acy = 0;

if(this.dvx > this.acx)
{
		if(this.dvx - this.vx <= this.acx)
		{
			this.vx = 0;
			this.dvx = this.acx;
		}
		else
		{
			this.dvx -= this.vx;
			this.vx += this.acceleration;
		}
}
else if(this.dvx <  this.acx)
{
		if(this.dvx +  this.vx >= this.acx)
		{
			 this.vx = 0;
			 this.dvx =  this.acx;
		}
		else
		{
			 this.dvx +=  this.vx;
			 this.vx += this.acceleration;
		}
}
else
{
	this.vx = 0;
}
if(this.dvy > this.acy)
{
		if(this.dvy - this.vy <= this.acy)
		{
			this.vy = 0;
			this.dvy = this.acy;
		}
		else
		{
			this.dvy -= this.vy;
			this.vy += this.acceleration;
		}
}
else if(this.dvy <  this.acy)
{
		if(this.dvy +  this.vy >= this.acy)
		{
			 this.vy = 0;
			 this.dvy =  this.acy;
		}
		else
		{
			 this.dvy +=  this.vy;
			 this.vy += this.acceleration;
		}
}
else
{
	this.vy = 0;
}

this.core.dvx += this.dvx;
this.core.dvy += this.dvy;

	switch(this.counter)
	{
	case cased(this,0,2):

drawblock(this,"propeller1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"normal",0,0);
}

propeller1.prototype.working = function()
{
var k = keystate(this,this.key);
if (k == "up" && this.identity == "player")
{
	this.state = "normal";
	this.counter = 0 - 1;
}
	
MYblock_normal(this);

this.acx = Math.cos(this.rotate2*(Math.PI/180)) * this.speed;
this.acy = Math.sin(this.rotate2*(Math.PI/180)) * this.speed;

if(this.dvx > this.acx)
{
		if(this.dvx - this.vx <= this.acx)
		{
			this.vx = 0;
			this.dvx = this.acx;
		}
		else
		{
			this.dvx -= this.vx;
			this.vx += this.acceleration;
		}
}
else if(this.dvx <  this.acx)
{
		if(this.dvx +  this.vx >= this.acx)
		{
			 this.vx = 0;
			 this.dvx =  this.acx;
		}
		else
		{
			 this.dvx +=  this.vx;
			 this.vx += this.acceleration;
		}
}
else
{
	this.vx = 0;
}
if(this.dvy > this.acy)
{
		if(this.dvy - this.vy <= this.acy)
		{
			this.vy = 0;
			this.dvy = this.acy;
		}
		else
		{
			this.dvy -= this.vy;
			this.vy += this.acceleration;
		}
}
else if(this.dvy <  this.acy)
{
		if(this.dvy +  this.vy >= this.acy)
		{
			 this.vy = 0;
			 this.dvy =  this.acy;
		}
		else
		{
			 this.dvy +=  this.vy;
			 this.vy += this.acceleration;
		}
}
else
{
	this.vy = 0;
}

this.core.dvx += this.dvx;
this.core.dvy += this.dvy;

if(this.fuel - this.consumption < 0)
{
	this.fuel = 0;
}
else
{
	this.fuel -= this.consumption;
}

	switch(this.counter)
	{
	case cased(this,0,2):

if(Math.abs(this.dvx) >= Math.abs(this.acx)/2 && Math.abs(this.dvy) >= Math.abs(this.acy)/2)
{
drawblock(this,"propeller1_3",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
}
else
{
drawblock(this,"propeller1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
}

		break;
	case cased(this,3,5):

if(Math.abs(this.dvx) >= Math.abs(this.acx)/2 && Math.abs(this.dvy) >= Math.abs(this.acy)/2)
{
drawblock(this,"propeller1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
}
else
{
drawblock(this,"propeller1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
}

		break;
	}
nextstate(this,"working",5,0);
}

propeller1.prototype.reloading = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

this.acx = 0;
this.acy = 0;

if(this.dvx > this.acx)
{
		if(this.dvx - this.vx <= this.acx)
		{
			this.vx = 0;
			this.dvx = this.acx;
		}
		else
		{
			this.dvx -= this.vx;
			this.vx += this.acceleration;
		}
}
else if(this.dvx <  this.acx)
{
		if(this.dvx +  this.vx >= this.acx)
		{
			 this.vx = 0;
			 this.dvx =  this.acx;
		}
		else
		{
			 this.dvx +=  this.vx;
			 this.vx += this.acceleration;
		}
}
else
{
	this.vx = 0;
}
if(this.dvy > this.acy)
{
		if(this.dvy - this.vy <= this.acy)
		{
			this.vy = 0;
			this.dvy = this.acy;
		}
		else
		{
			this.dvy -= this.vy;
			this.vy += this.acceleration;
		}
}
else if(this.dvy <  this.acy)
{
		if(this.dvy +  this.vy >= this.acy)
		{
			 this.vy = 0;
			 this.dvy =  this.acy;
		}
		else
		{
			 this.dvy +=  this.vy;
			 this.vy += this.acceleration;
		}
}
else
{
	this.vy = 0;
}

this.core.dvx += this.dvx;
this.core.dvy += this.dvy;

if(this.fuel + this.reloadspeed > this.maxfuel)
{
	this.fuel = this.maxfuel;
}
else
{
	this.fuel += this.reloadspeed;
}
if(this.fuel == this.maxfuel)
{
	this.state = "normal";
	this.counter = 0 - 1;
}

drawblock(this,"propeller1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_1",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"reloading",0,0);
}

propeller1.prototype.out_of_charge = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

this.acx = 0;
this.acy = 0;

if(this.dvx > this.acx)
{
		if(this.dvx - this.vx <= this.acx)
		{
			this.vx = 0;
			this.dvx = this.acx;
		}
		else
		{
			this.dvx -= this.vx;
			this.vx += this.acceleration;
		}
}
else if(this.dvx <  this.acx)
{
		if(this.dvx +  this.vx >= this.acx)
		{
			 this.vx = 0;
			 this.dvx =  this.acx;
		}
		else
		{
			 this.dvx +=  this.vx;
			 this.vx += this.acceleration;
		}
}
else
{
	this.vx = 0;
}
if(this.dvy > this.acy)
{
		if(this.dvy - this.vy <= this.acy)
		{
			this.vy = 0;
			this.dvy = this.acy;
		}
		else
		{
			this.dvy -= this.vy;
			this.vy += this.acceleration;
		}
}
else if(this.dvy <  this.acy)
{
		if(this.dvy +  this.vy >= this.acy)
		{
			 this.vy = 0;
			 this.dvy =  this.acy;
		}
		else
		{
			 this.dvy +=  this.vy;
			 this.vy += this.acceleration;
		}
}
else
{
	this.vy = 0;
}

this.core.dvx += this.dvx;
this.core.dvy += this.dvy;

drawblock(this,"propeller1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_0",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"out_of_charge",0,0);
}

propeller1.prototype.explosion = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

object.push(new effect(this,this.centerX,this.centerY,0,0,0,1,this.symmetry,"explosion1"));

		break;
	}
nextstate(this,"",0,1000);
}

propeller1.prototype.show = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

if(g_cursor != undefined && g_cursor.rightcondition == "down" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block())
{
	this.exist = false;
}
else if(g_cursor != undefined && g_cursor.leftcondition == "click" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block() && this.key.key != "none")
{
	this.state = "wait_keyset";
	this.counter = -1;
}

drawblock(this,"propeller1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"show",0,0);
}

propeller1.prototype.wait_keyset = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

document.getElementById("demo18").innerHTML= keysDown.length;
for(var i=0; i<124; i++)
{
	if(i in keysDown)
	{
	this.key.key = i;
	this.state = "show";
	this.counter = -1;
	break;
	}
}

drawblock(this,"propeller1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_3",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"wait_keyset",0,0);
}

propeller1.prototype.manufacture = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

var mx = g_cursor.centerX - 400;
var my = g_cursor.centerY - 300;

var x12 = (mx - (mx%12)) + 400;
var y12 = (my - (my%12)) + 300;

this.centerX = x12;
this.centerY = y12;

this.rotate2 = this.rotate;

if(g_cursor.middlecondition == "click")
{
symmetrychange(this);
}

draw_Oarea_and_Xarea(this);

if(g_cursor.leftcondition == "down" && check_Xarea(this) && check_Oarea(this) && check_cover(this))
{
	var diffX = (this.centerX - g_player.centerX)/12;
	var diffY = (this.centerY - g_player.centerY)/12;
	object.push(new propeller1(g_player,diffX,diffY,0,0,this.rotate,1,this.symmetry,"show"));
}

if(g_cursor.rightcondition == "click")
{
	this.exist = false;
}

drawblock(this,"propeller1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctxif);

		break;
	}
nextstate(this,"manufacture",0,0);
}




function eps1(id,cx,cy,acx,acy,r,alpha,symmetry,s)
{
	this.functionname = "eps1";
	this.z_index = 0;

	this.pX = cx;
	this.pY = cy;
	this.linked = false;
	this.Oarea = [{pX:1,pY:0},{pX:-1,pY:0}];
	this.Xarea = [];
	this.key = {key: 32,keydown: false};

	this.counter = 0;
	this.identity = id.identity;
	this.core = id;
	this.pic;
	this.state = s;
	this.status = "eps";
	this.centerX = this.core.centerX + this.pX*12;
	this.centerY = this.core.centerY + this.pY*12;
	this.myX = 6;
	this.myY = 6;
	this.dvx = 0;
	this.dvy = 0;
	this.rotate = r % 360;
	this.r2r = 0;
	this.Alpha = alpha;
	this.exist = true;
	
	this.hp = 250;
	this.maxhp = this.hp;
	this.def = 0;
	
	this.charge = 5;
	
	this.diffX = 0;
	this.diffY = 0;
	
	this.rspeed = 0.2;
	
	this.symmetry = symmetry;
	MYsymmetry(this);
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
	
	this.r = myrotation(this);
	this.distance = Math.sqrt(Math.pow(this.core.centerX - this.centerX,2) + Math.pow(this.core.centerY - this.centerY,2));
}

eps1.prototype.render = function()
{
if(this.hp <= 0 || !this.core.exist)
{
	this.state = "explosion";
	this.counter = 0;
}
	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
		case "working":
			this.working();
			break;
		case "out_of_charge":
			this.out_of_charge();
			break;
		case "explosion":
			this.explosion();
			break;
			
		case "show":
			this.show();
			break;
		case "wait_keyset":
			this.wait_keyset();
			break;
		case "manufacture":
			this.manufacture();
			break;
	}

//drawpic(this,this.c);

bdy(this,0,0,12,12,0);

if(this.hp != this.maxhp)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="red";
ctxif.moveTo(this.centerX - 10,this.centerY - 12);
ctxif.lineTo(this.centerX - 10 + this.hp*20/this.maxhp,this.centerY - 12);
ctxif.stroke();
ctxif.restore();
}

this.counter += 1;
return this.exist;
}

eps1.prototype.normal = function()
{
var k = keystate(this,this.key);
if (k == "up" && this.identity == "player")//按key
{
	this.state = "working";
	this.counter = 0 - 1;
}

MYblock_normal(this);

	switch(this.counter)
	{
	case cased(this,0,4):
drawblock(this,"eps1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,5,9):
drawblock(this,"eps1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,10,14):
drawblock(this,"eps1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	}
nextstate(this,"normal",14,0);
}

eps1.prototype.working = function()
{
var k = keystate(this,this.key);
if (k == "down" && this.identity == "player")
{
	this.state = "normal";
	this.counter = 0 - 1;
}

MYblock_normal(this);

this.core.rotate2 = core_rotation_change(this,this.core.rotate2,this.core.r2m,this.rspeed);

	switch(this.counter)
	{
	case cased(this,0,4):
drawblock(this,"eps1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,5,9):
drawblock(this,"eps1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,10,14):
drawblock(this,"eps1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	}
nextstate(this,"working",14,0);
}

eps1.prototype.out_of_charge = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

drawblock(this,"eps1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_0",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"out_of_charge",0,0);
}

eps1.prototype.explosion = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

object.push(new effect(this,this.centerX,this.centerY,0,0,0,1,this.symmetry,"explosion1"));

		break;
	}
nextstate(this,"",0,1000);
}

eps1.prototype.show = function()
{
MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

if(g_cursor != undefined && g_cursor.rightcondition == "down" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block())
{
	this.exist = false;
}
else if(g_cursor != undefined && g_cursor.leftcondition == "click" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block() && this.key.key != "none")
{
	this.state = "wait_keyset";
	this.counter = -1;
}

	switch(this.counter)
	{
	case cased(this,0,4):
drawblock(this,"eps1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,5,9):
drawblock(this,"eps1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,10,14):
drawblock(this,"eps1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	}
nextstate(this,"show",14,0);
}

eps1.prototype.wait_keyset = function()
{
MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

document.getElementById("demo18").innerHTML= keysDown.length;
for(var i=0; i<124; i++)
{
	if(i in keysDown)
	{
	this.key.key = i;
	this.state = "show";
	this.counter = -1;
	break;
	}
}

	switch(this.counter)
	{
	case cased(this,0,4):
drawblock(this,"eps1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,5,9):
drawblock(this,"eps1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,10,14):
drawblock(this,"eps1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	}
	
drawblock(this,"blockstate_3",this.centerX,this.centerY,6,6,0,1,ctx);

nextstate(this,"wait_keyset",14,0);
}

eps1.prototype.manufacture = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

var mx = g_cursor.centerX - 400;
var my = g_cursor.centerY - 300;

var x12 = (mx - (mx%12)) + 400;
var y12 = (my - (my%12)) + 300;

this.centerX = x12;
this.centerY = y12;

this.rotate2 = this.rotate;

if(g_cursor.middlecondition == "click")
{
symmetrychange(this);
}

draw_Oarea_and_Xarea(this);

if(g_cursor.leftcondition == "down" && check_Xarea(this) && check_Oarea(this) && check_cover(this))
{
	var diffX = (this.centerX - g_player.centerX)/12;
	var diffY = (this.centerY - g_player.centerY)/12;
	object.push(new eps1(g_player,diffX,diffY,0,0,this.rotate,1,this.symmetry,"show"));
}

if(g_cursor.rightcondition == "click")
{
	this.exist = false;
}

drawblock(this,"eps1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctxif);

		break;
	}
nextstate(this,"manufacture",0,0);
}






function supercannon1(id,cx,cy,acx,acy,r,alpha,symmetry,s)
{
	this.functionname = "supercannon1";
	this.z_index = 0;

	this.pX = cx;
	this.pY = cy;
	this.linked = false;
	this.Oarea = [{pX:-1,pY:0}];
	this.Xarea = [{pX:1,pY:0},{pX:2,pY:0}];
	this.key = {key: 0,keydown: false};

	this.counter = 0;
	this.identity = id.identity;
	this.core = id;
	this.pic;
	this.state = s;
	this.status = "cannon";
	this.centerX = this.core.centerX + this.pX*12;
	this.centerY = this.core.centerY + this.pY*12;
	this.myX = 6;
	this.myY = 6;
	this.dvx = 0;
	this.dvy = 0;
	this.rotate = r % 360;
	this.r2r = 0;
	this.Alpha = alpha;
	this.exist = true;
	
	this.hp = 100;
	this.maxhp = this.hp;
	this.def = 0;

	this.ammo = 1;
	this.maxammo = this.ammo;
	this.consumption = 1;
	this.reloadspeed = 0.005;

	this.charge = 100;
	
	this.diffX = 0;
	this.diffY = 0;
	
	this.symmetry = symmetry;
	MYsymmetry(this);
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
	
	this.r = myrotation(this);
	this.distance = Math.sqrt(Math.pow(this.core.centerX - this.centerX,2) + Math.pow(this.core.centerY - this.centerY,2));
}

supercannon1.prototype.render = function()
{
if(this.ammo <= 0 && this.state == "normal")
{
	this.state = "reloading";
	this.counter = 0;
}
if(this.hp <= 0 || !this.core.exist)
{
	this.state = "explosion";
	this.counter = 0;
}
	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
		case "shoot":
			this.shoot();
			break;
		case "reloading":
			this.reloading();
			break;
		case "out_of_charge":
			this.out_of_charge();
			break;
		case "explosion":
			this.explosion();
			break;

		case "wait_keyset":
			this.wait_keyset();
			break;
		case "show":
			this.show();
			break;
		case "manufacture":
			this.manufacture();
			break;
	}

//drawpic(this,this.c);

bdy(this,0,0,12,12,0);

if(this.hp != this.maxhp)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="red";
ctxif.moveTo(this.centerX - 10,this.centerY - 12);
ctxif.lineTo(this.centerX - 10 + this.hp*20/this.maxhp,this.centerY - 12);
ctxif.stroke();
ctxif.restore();
}
if(this.ammo != this.maxammo)
{
ctxif.save();
ctxif.beginPath();
ctxif.translate(Math.round(-visualX),Math.round(-visualY));
ctxif.strokeStyle="yellow";
ctxif.moveTo(this.centerX - 10,this.centerY - 11);
ctxif.lineTo(this.centerX - 10 + this.ammo*20/this.maxammo,this.centerY - 11);
ctxif.stroke();
ctxif.restore();
}

this.counter += 1;
return this.exist;
}

supercannon1.prototype.normal = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
var k = keystate(this,this.key);
if(k == "click" && this.identity == "player")
{
	this.state = "shoot";
	this.counter = 0 - 1;
}
	
MYblock_normal(this);

drawblock(this,"supercannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"normal",0,0);
}

supercannon1.prototype.shoot = function()
{
MYblock_normal(this);

	switch(this.counter)
	{
	case cased(this,0,1):
sound(this,0,"supercannon1",false);
if(this.counter == 0)
{
if(this.ammo - this.consumption < 0)
{
	this.ammo = 0;
}
else
{
	this.ammo -= this.consumption;
}

var diffX =Math.cos(this.rotate2*(Math.PI/180)) * 24;
var diffY =Math.sin(this.rotate2*(Math.PI/180)) * 24;

object.push(new bullet2(this,this.centerX + diffX,this.centerY + diffY,this.core.dvx,this.core.dvy,this.rotate2,1,"normal"));

object.push(new effect(this,this.centerX + diffX,this.centerY + diffY,this.core.dvx,this.core.dvy,this.rotate2,1,this.symmetry,"fire1"));
}
drawblock(this,"supercannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,2,3):
drawblock(this,"supercannon1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,4,5):
drawblock(this,"supercannon1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,6,7):
drawblock(this,"supercannon1_3",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,8,37):
drawblock(this,"supercannon1_4",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,38,42):
drawblock(this,"supercannon1_3",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,43,47):
drawblock(this,"supercannon1_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,48,52):
drawblock(this,"supercannon1_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	case cased(this,53,57):
drawblock(this,"supercannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);
		break;
	}
nextstate(this,"normal",57,0);
}

supercannon1.prototype.reloading = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

if(this.ammo + this.reloadspeed > this.maxammo)
{
	this.ammo = this.maxammo;
}
else
{
	this.ammo += this.reloadspeed;
}
if(this.ammo == this.maxammo)
{
	this.state = "normal";
	this.counter = 0 - 1;
}

drawblock(this,"supercannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_1",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"reloading",0,0);
}

supercannon1.prototype.out_of_charge = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

drawblock(this,"supercannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_0",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"out_of_charge",0,0);
}

supercannon1.prototype.explosion = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

object.push(new effect(this,this.centerX,this.centerY,0,0,0,1,this.symmetry,"explosion1"));

		break;
	}
nextstate(this,"",0,1000);
}

supercannon1.prototype.show = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

if(g_cursor != undefined && g_cursor.rightcondition == "down" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block())
{
	this.exist = false;
}
else if(g_cursor != undefined && g_cursor.leftcondition == "click" && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, this.bx, this.by, this.bx + this.bw, this.by + this.bh) && check_no_manufacture_block() && this.key.key != "none")
{
	this.state = "wait_keyset";
	this.counter = -1;
}

drawblock(this,"supercannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

		break;
	}
nextstate(this,"show",0,0);
}

supercannon1.prototype.wait_keyset = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
MYblock_normal(this);

if(g_p == "modification")
{
draw_Oarea_and_Xarea(this);
}

for(var i=0; i<124; i++)
{
	if(i in keysDown)
	{
	this.key.key = i;
	this.state = "show";
	this.counter = -1;
	break;
	}
}

drawblock(this,"supercannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctx);

drawblock(this,"blockstate_3",this.centerX,this.centerY,6,6,0,1,ctx);

		break;
	}
nextstate(this,"wait_keyset",0,0);
}

supercannon1.prototype.manufacture = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

var mx = g_cursor.centerX - 400;
var my = g_cursor.centerY - 300;

var x12 = (mx - (mx%12)) + 400;
var y12 = (my - (my%12)) + 300;

this.centerX = x12;
this.centerY = y12;

this.rotate2 = this.rotate;

if(g_cursor.middlecondition == "click")
{
symmetrychange(this);
}

draw_Oarea_and_Xarea(this);

if(g_cursor.leftcondition == "down" && check_Xarea(this) && check_Oarea(this) && check_cover(this))
{
	var diffX = (this.centerX - g_player.centerX)/12;
	var diffY = (this.centerY - g_player.centerY)/12;
	object.push(new supercannon1(g_player,diffX,diffY,0,0,this.rotate,1,this.symmetry,"show"));
}

if(g_cursor.rightcondition == "click")
{
	this.exist = false;
}

drawblock(this,"supercannon1_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2,1,ctxif);

		break;
	}
nextstate(this,"manufacture",0,0);
}