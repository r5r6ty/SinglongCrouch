function ifobj(id,cx,cy,acx,acy,alpha,s)
{
	this.counter = 0;
	this.identity = id;
	this.pic;
	this.state = s;
	this.status = "interfaceobject";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.Alpha = alpha;
	this.exist = true;
	
	this.p = 0;
}

ifobj.prototype.render = function()
{
	switch(this.state)
	{
		case "p1_hp":
			this.p1_hp();
			break;
		case "p2_hp":
			this.p2_hp();
			break;
		case "hit_counter":
			this.hit_counter();
			break;
		default:
			break;
	}

//drawpic(this,ctxif);

this.counter += 1;
return this.exist;
}

ifobj.prototype.p1_hp = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

if(g_player1)
{
ctxif.beginPath();
ctxif.rect(this.centerX,this.centerY,p1hpgage.w,p1hpgage.h);
ctxif.strokeStyle="white";
ctxif.fillStyle="crimson";
ctxif.fill();
ctxif.stroke();
ctxif.beginPath();
ctxif.fillStyle="red";
var p1hp = g_player1.hp * p1hpgage.w/g_player1.maxhp;
if(p1hp < 0)
{
	g_player1.hp = 0;
	p1hp = 0;
}
ctxif.fillRect(this.centerX + p1hpgage.w,this.centerY,-p1hp,p1hpgage.h);
ctxif.font="20px Georgia";
ctxif.textAlign="left";
ctxif.fillText(g_player1.hp,this.centerX,this.centerY - 10);
}

		break;
	}
nextstate(this,"p1_hp",0,0);
}

ifobj.prototype.p2_hp = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

if(g_player2)
{
ctxif.beginPath();
ctxif.rect(this.centerX,this.centerY,p2hpgage.w,p2hpgage.h);
ctxif.strokeStyle="white";
ctxif.fillStyle="crimson";
ctxif.fill();
ctxif.stroke();
ctxif.beginPath();
ctxif.fillStyle="red";
var p2hp = g_player2.hp * p2hpgage.w/g_player2.maxhp;
if(p2hp < 0)
{
	g_player2.hp = 0;
	p2hp = 0;
}
ctxif.fillRect(this.centerX,this.centerY,p2hp,p2hpgage.h);
ctxif.font="20px Georgia";
ctxif.textAlign="right";
ctxif.fillText(g_player2.hp,this.centerX + p2hpgage.w,this.centerY - 10);
}

		break;
	}
nextstate(this,"p2_hp",0,0);
}

ifobj.prototype.hit_counter = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
if(this.identity.hits > 1)
{
	this.counter = 1-1;
	this.p = 0;
}
else
{
	this.counter = 0-1;
}
		break;
	case cased(this,1,30):

if(this.identity)
{
ctxif.fillStyle="orange";
//ctxif.font="50px Algerian";
//ctxif.font="50px Mistral";
//ctxif.font="40px Old English Text MT";
//ctxif.font="40px Ravie";
ctxif.font="50px Stencil";
ctxif.textAlign="center";
ctxif.textBaseline="alphabetic";


if(this.identity.hits >= this.p)
{
this.p = this.identity.hits;
this.counter = 1-1;
}


ctxif.fillText(this.p + " HITS!",this.centerX,this.centerY);
}


		break;
	}
nextstate(this,"hit_counter",30,0);
}