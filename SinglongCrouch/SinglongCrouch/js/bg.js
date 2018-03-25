function bg(id,cx,cy,acx,acy,alpha,s)
{
	this.bgwidth = 1740;

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
}

bg.prototype.render = function()
{
	switch(this.state)
	{
		case "castle1412":
			this.castle1412();
			break;
		default:
			break;
	}

drawpic(this,ctxbg);

this.counter += 1;
return this.exist;
}

bg.prototype.castle1412 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
			frameplay(this,"castle_0",0,0,1740,1332);
		break;
	}
nextstate(this,"castle1412",0,0);
}