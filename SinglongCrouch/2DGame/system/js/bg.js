function bg(id,cx,cy,acx,acy,r,alpha,s)
{
	this.c;
	this.bgwidth;
	this.bgheight;

	this.counter = 0;
	this.identity = id.identity;
	this.pic;
	this.state = s;
	this.status = "bg";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.rotate = r % 360;
	this.Alpha = alpha;
	this.exist = true;
	
this.bgwidth = 1369;
this.bgheight = 1200;

}

bg.prototype.render = function()
{
	switch(this.state)
	{
		case "space":
			this.space();
			break;
	}

//drawpic(this,this.c);

this.counter += 1;
return this.exist;
}

bg.prototype.space = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

drawblock(this,"bg1_0",0,0,0,0,0,1,ctxbg);
drawblock(this,"bg1_0",0,400,0,0,0,1,ctxbg);
drawblock(this,"bg1_0",0,800,0,0,0,1,ctxbg);

		break;
	}
nextstate(this,"space",0,0);
}