function effect(id,cx,cy,acx,acy,r,alpha,symmetry,s)
{
	this.c = ctx;

	this.counter = 0;
	this.identity = id.identity;
	this.pic;
	this.state = s;
	this.status = "effect";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.rotate = r % 360;
	this.rotate2 = this.rotate;
	this.Alpha = alpha;
	this.exist = true;
	
	this.symmetry = symmetry;
}

effect.prototype.render = function()
{

	switch(this.state)
	{
		case "explosion1":
			this.explosion1();
			break;
		case "fire1":
			this.fire1();
			break;
	}

//drawpic(this,this.c);


this.counter += 1;
return this.exist;
}

effect.prototype.explosion1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
sound(this,0,"explosion1",false);

drawblock(this,"explosion1_0",this.centerX,this.centerY,14,14,this.rotate2,1,ctx);
		break;
	case cased(this,3,5):
drawblock(this,"explosion1_1",this.centerX,this.centerY,14,14,this.rotate2,1,ctx);
		break;
	case cased(this,6,8):
drawblock(this,"explosion1_2",this.centerX,this.centerY,14,14,this.rotate2,1,ctx);
		break;
	case cased(this,9,11):
drawblock(this,"explosion1_3",this.centerX,this.centerY,14,14,this.rotate2,1,ctx);
		break;
	case cased(this,12,14):
drawblock(this,"explosion1_4",this.centerX,this.centerY,14,14,this.rotate2,1,ctx);
		break;
	case cased(this,15,17):
drawblock(this,"explosion1_5",this.centerX,this.centerY,14,14,this.rotate2,1,ctx);
		break;
	case cased(this,18,20):
drawblock(this,"explosion1_6",this.centerX,this.centerY,14,14,this.rotate2,1,ctx);
		break;
	}
nextstate(this,"",20,1000);
}

effect.prototype.fire1 = function()
{
this.centerX += this.dvx;
this.centerY += this.dvy;
	switch(this.counter)
	{
	case cased(this,0,2):
drawblock(this,"fire1_0",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	case cased(this,3,5):
drawblock(this,"fire1_1",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	case cased(this,6,8):
drawblock(this,"fire1_2",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	case cased(this,9,11):
drawblock(this,"fire1_3",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	case cased(this,12,14):
drawblock(this,"fire1_4",this.centerX,this.centerY,4,141,this.rotate2,1,ctx);
		break;
	case cased(this,15,17):
drawblock(this,"fire1_5",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	case cased(this,18,20):
drawblock(this,"fire1_6",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	case cased(this,21,23):
drawblock(this,"fire1_7",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	case cased(this,24,26):
drawblock(this,"fire1_8",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	case cased(this,27,29):
drawblock(this,"fire1_9",this.centerX,this.centerY,44,141,this.rotate2,1,ctx);
		break;
	}
nextstate(this,"",29,1000);
}



function dfs(o,oo)
{
o.linked = true;
	for(var iii=0; iii<o.Oarea.length; iii++)
	{
	var XareaXY = XOaeracheck(o,o.Oarea[iii].pX,o.Oarea[iii].pY)
		for(var i=0; i<object.length; i++)
		{
			if(object[i] != undefined && object[i].identity == o.identity && object[i].core == o.core && object[i].core != undefined)
			{
				if(object[i].pX == o.pX + XareaXY.x && object[i].pY == o.pY + XareaXY.y && !object[i].linked)
				{
					if(oo.charge - object[i].charge < 0)
					{
						if(g_p == "modification")
						{
						drawblock(o,"blockstate_0",object[i].centerX,object[i].centerY,6,6,0,1,ctxif);
						}
						else
						{
						object[i].state = "out_of_charge";
						object[i].counter = 0;
						}
					}
					else
					{
					oo.charge -= object[i].charge;
						if(object[i].state == "out_of_charge")
						{
						object[i].state = "normal";
						object[i].counter = 0;
						}
					}
					dfs(object[i],oo);
					break;
				}
			}
		}
	}
}

function drawblock(o,p,x,y,mx,my,r,a,canvas)
{
canvas.save();
canvas.translate(x + Math.round(-visualX), y + Math.round(-visualY));
canvas.rotate(r*(Math.PI/180));
canvas.globalAlpha = a;
if(o.symmetry == -1)
{
	canvas.translate(0, c.height);
	canvas.scale(1, -1);
	canvas.drawImage(document.getElementById(p), Math.round(-mx), Math.round(c.height - (document.getElementById(p).height - my))); 
	canvas.translate(0, c.height);
	canvas.scale(1, -1);
}
else(o.symmetry == 1)
{
	canvas.drawImage(document.getElementById(p), Math.round(-mx), Math.round(-my)); 
}
canvas.restore();
}

function drawinterface(o,p,x,y,mx,my,r,a,canvas)
{
canvas.save();
canvas.translate(Math.round(x), Math.round(y));
canvas.rotate(r*(Math.PI/180));
canvas.globalAlpha = a;
canvas.drawImage(document.getElementById(p), Math.round(0 - mx), Math.round(0 - my)); 
canvas.restore();
}


//function ppp()
//{
//g_player = new core1(player,startx,starty,0,0,0,1,"normal");
//object.push(g_player);//载入飞机	
//
//object.push(new block1(g_player,0,-3,0,0,0,1,"normal"));//载入block
//
//object.push(new block1(g_player,0,3,0,0,0,1,"normal"));//载入block
//
//object.push(new block1(g_player,0,-1,0,0,0,1,"normal"));//载入cannon
//
//object.push(new block1(g_player,0,1,0,0,0,1,"normal"));//载入cannon
//
//object.push(new cannon1(g_player,0,-2,0,0,0,1,"normal"));//载入cannon
//
//object.push(new cannon1(g_player,0,2,0,0,0,1,"normal"));//载入cannon
//
//object.push(new block1(g_player,-1,0,0,0,0,1,"normal"));//载入cannon
//
//object.push(new block1(g_player,1,0,0,0,0,1,"normal"));//载入cannon
//
//object.push(new block1(g_player,-2,0,0,0,0,1,"normal"));//载入cannon
//
//object.push(new cannon1(g_player,2,0,0,0,0,1,"normal"));//载入cannon
//
//object.push(new propeller1(g_player,-1,-3,0,0,0,1,"normal"));//载入Propeller
//
//object.push(new propeller1(g_player,-1,3,0,0,0,1,"normal"));//载入Propeller
//
//object.push(new propeller1(g_player,-3,0,0,0,0,1,"normal"));//载入Propeller
//}


function interfacebdy(o,x,y,w,h)
{
	o.activity = true;
	o.bx = o.centerX + x - w/2;
	o.by = o.centerY + y - h/2;
	o.bw = w;
	o.bh = h;
}

function hangar(id,s,n)
{
	this.z_index = 0;

	this.counter = 0;
	this.identity = id.identity;
	this.state = s;
	this.status = "hangar";
	this.exist = true;

this.number = n;
this.shipname = "";
this.block = new Array();

}

hangar.prototype.render = function()
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

hangar.prototype.normal = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	for (var i=0; i<object.length; i++)
	{
		delete object[i];
	}
		for(var i=0; i<this.block.length; i++)
		{
			if(this.block[i] != undefined)
			{
			aafs(this,this.block[i].block,this.block[i].identity,this.block[i].px,this.block[i].py,this.block[i].rotate,this.block[i].alpha,this.block[i].state)
			}
		}
		break;
	}
nextstate(this,"",0,1000);
}


function aafs(o,b,i,px,py,r,a,s)
{
	if(b == core1)
	{
	g_player = new b(player,px,py,0,0,r,a,s);
	object.push(g_player);//载入飞机	
	}
	else
	{
	object.push(new b(g_player,px,py,0,0,r,a,s));
	}
}

