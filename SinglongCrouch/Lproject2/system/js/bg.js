function bg(id,cx,cy,acx,acy,alpha,s)
{
	this.c;
	this.name = "CASTLE1412"
	this.bgwidth;
	this.bgheight;

	this.counter = 0;
	this.identity = id;
	this.pic;
	this.state = s;
	this.status = "bg";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.Alpha = alpha;
	this.exist = true;
	
	this.bdy = new Array();
	this.itr = new Array();
	
	this.direction = 1;
}

bg.prototype.render = function()
{
	switch(this.state)
	{
		case "castle1412":
			this.castle1412();
			break;
	}
	switch(this.state)
	{
		case "castle1412_bg":
			this.castle1412_bg();
			break;
	}

drawpic(this,this.c);

ctxbg.save();
ctxbg.translate(-visualX, -visualY);
ctxbg.beginPath();
ctxbg.strokeStyle="#0000ff";
ctxbg.moveTo(gamespace,groundvalue);
ctxbg.lineTo(gamebg.bgwidth - gamespace,groundvalue);
ctxbg.stroke();
ctxbg.restore();

this.counter += 1;
return this.exist;
}

bg.prototype.castle1412_bg = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
			frameplay(this,"castle_0",0,0,0,0);
		break;
	}
nextstate(this,"castle1412_bg",0,0);
}

bg.prototype.castle1412 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
			this.bgwidth = 1740;
			this.bgheight = 1332;
			
			groundvalue = this.bgheight - 100;


			var _c1412_bg = new bg(this,0,0,0,0,1,"castle1412_bg")
			pushtocanvas(objectbg,ctxbg,_c1412_bg);//‘ÿ»Î≥°æ∞£ª
			
		break;
	}
nextstate(this,"",0,1000);
}