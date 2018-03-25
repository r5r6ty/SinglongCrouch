function bullet1(id,cx,cy,acx,acy,r,alpha,s)
{
	this.z_index = 0;

	this.counter = 0;
	this.identity = id.identity;
	this.pic;
	this.state = s;
	this.status = "bullet";
	this.centerX = cx;
	this.centerY = cy;
	this.myX = 11;
	this.myY = 2;
	this.dvx = acx;
	this.dvy = acy;
	this.rotate = r % 360;
	this.Alpha = alpha;
	this.exist = true;
	
//	this.hp = 5;
//	this.maxhp = this.hp;
//	this.def = 0;

	this.damage = 20;
	this.penetration = 0;
	
	this.diffX = 0;
	this.diffY = 0;
	
	this.speed = 10;
	this.d = 2;
	this.diffrotate = Math.floor(Math.random()*(this.d + 1) - this.d/2);
	
	this.ix;
	this.iy;
	this.iw;
	this.ih;
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
}

bullet1.prototype.render = function()
{

	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
	}

//drawpic(this,this.c);


this.counter += 1;
return this.exist;
}

bullet1.prototype.normal = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
this.rotate2 = this.rotate + this.diffrotate;

this.diffX =Math.cos(this.rotate2*(Math.PI/180)) * this.speed;
this.diffY =Math.sin(this.rotate2*(Math.PI/180)) * this.speed;

if(this.dvx < 0)
{
this.dvx = 0;
}
if(this.dvy < 0)
{
this.dvy = 0;
}

this.centerX += this.diffX + this.dvx;
this.centerY += this.diffY + this.dvy;



ctx.save();
ctx.translate(this.centerX + Math.round(-visualX), this.centerY + Math.round(-visualY));
ctx.rotate(this.rotate2*(Math.PI/180));
ctx.drawImage(document.getElementById("bullet1_0"), Math.round(0 - this.myX), Math.round(0 - this.myY)); 
ctx.restore();


itr(this,0,0,5,5,10);

//ctx.beginPath();
//ctx.save();
//ctx.translate(Math.round(-visualX),Math.round(-visualY));
//ctx.strokeStyle="red";
//ctx.moveTo(this.ix,this.iy);
//ctx.lineTo(this.ix + this.iw,this.iy);
//ctx.lineTo(this.ix + this.iw,this.iy + this.ih);
//ctx.lineTo(this.ix,this.iy + this.ih);
//ctx.closePath();
//ctx.stroke();
//ctx.restore();


if(this.centerX < 0 || this.centerX > g_bg.bgwidth || this.centerY < 0 || this.centerY > g_bg.bgheight)
{
	this.exist = false;
}

		break;
	}
nextstate(this,"normal",0,0);
}



function bullet2(id,cx,cy,acx,acy,r,alpha,s)
{
	this.z_index = 0;

	this.counter = 0;
	this.identity = id.identity;
	this.pic;
	this.state = s;
	this.status = "bullet";
	this.centerX = cx;
	this.centerY = cy;
	this.myX = 35;
	this.myY = 60;
	this.dvx = acx;
	this.dvy = acy;
	this.rotate = r % 360;
	this.Alpha = alpha;
	this.exist = true;
	
//	this.hp = 5;
//	this.maxhp = this.hp;
//	this.def = 0;

	this.damage = 500;
	this.penetration = 0;
	
	this.diffX = 0;
	this.diffY = 0;
	
	this.speed = 15;
	this.d = 10;
	this.diffrotate = Math.floor(Math.random()*(this.d + 1) - this.d/2);
	
	this.ix;
	this.iy;
	this.iw;
	this.ih;
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
}

bullet2.prototype.render = function()
{

	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
	}


this.counter += 1;
return this.exist;
}

bullet2.prototype.normal = function()
{	
this.rotate2 = this.rotate + this.diffrotate;

this.diffX =Math.cos(this.rotate2*(Math.PI/180)) * this.speed;
this.diffY =Math.sin(this.rotate2*(Math.PI/180)) * this.speed;

if(this.dvx < 0)
{
this.dvx = 0;
}
if(this.dvy < 0)
{
this.dvy = 0;
}

this.centerX += this.diffX + this.dvx;
this.centerY += this.diffY + this.dvy;

itr(this,0,0,25,25,10);

if(this.centerX < 0 || this.centerX > g_bg.bgwidth || this.centerY < 0 || this.centerY > g_bg.bgheight)
{
	this.exist = false;
}
	switch(this.counter)
	{
	case cased(this,0,2):
	drawblock(this,"bullet2_0",this.centerX,this.centerY,this.myX,this.myY,this.rotate2 - 135,1,ctx);
		break;
	case cased(this,3,5):
	drawblock(this,"bullet2_1",this.centerX,this.centerY,this.myX,this.myY,this.rotate2 - 135,1,ctx);
		break;
	case cased(this,6,8):
	drawblock(this,"bullet2_2",this.centerX,this.centerY,this.myX,this.myY,this.rotate2 - 135,1,ctx);
		break;
	}
ctx.beginPath();
ctx.save();
ctx.translate(Math.round(-visualX),Math.round(-visualY));
ctx.strokeStyle="red";
ctx.moveTo(this.ix,this.iy);
ctx.lineTo(this.ix + this.iw,this.iy);
ctx.lineTo(this.ix + this.iw,this.iy + this.ih);
ctx.lineTo(this.ix,this.iy + this.ih);
ctx.closePath();
ctx.stroke();
ctx.restore();
nextstate(this,"normal",8,0);
}




function bdy(o,x,y,w,h,d)
{
	var xxx =Math.cos(o.rotate2*(Math.PI/180)) * d;
	var yyy =Math.sin(o.rotate2*(Math.PI/180)) * d;
	o.bx = o.centerX + x - w/2 + xxx;
	o.by = o.centerY + y - h/2 + yyy;
	o.bw = w;
	o.bh = h;
}

function itr(o,x,y,w,h,d)
{
	var xxx =Math.cos(o.rotate2*(Math.PI/180)) * d;
	var yyy =Math.sin(o.rotate2*(Math.PI/180)) * d;
	o.ix = o.centerX + x - w/2 + xxx;
	o.iy = o.centerY + y - h/2 + yyy;
	o.iw = w;
	o.ih = h;
	
for (var i=0; i<object.length; i++)
{
	if (object[i] != undefined && object[i].bx != undefined && object[i].by != undefined && object[i].bw != undefined && object[i].bh != undefined && object[i].identity != o.identity)
	{
		if (detection(o.ix, o.iy, o.ix + o.iw, o.iy + o.ih, object[i].bx, object[i].by, object[i].bx + object[i].bw, object[i].by + object[i].bh))
		{
//sound(this,"none","hit1",false);
			object[i].hp -= (o.damage -  (object[i].def - o.penetration));
			o.exist = false;
			break;
		}
	}
}
	
}