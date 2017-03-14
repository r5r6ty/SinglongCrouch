function effect(id,cx,cy,acx,acy,alpha,s)
{
	this.counter = 0;
	this.identity = id;
	this.pic;
	this.state = s;
	this.status = "effect";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.Alpha = alpha;
	this.exist = true;
}

effect.prototype.render = function()
{
	switch(this.state)
	{
		case "spark1":
			this.spark1();
			break;
		case "spark2":
			this.spark2();
			break;
		default:
			break;
	}

drawpic(this,ctx2);

this.counter += 1;
return this.exist;
}

effect.prototype.spark1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,1):
			frameplay(this,"spark3_0",0,0,96,96);
			sound(this,0,"001");
		break;
	case cased(this,2,3):
			frameplay(this,"spark3_1",0,0,96,96);
		break;
	case cased(this,4,5):
			frameplay(this,"spark3_2",0,0,96,96);
		break;
	case cased(this,6,7):
			frameplay(this,"spark3_3",0,0,96,96);
		break;
	case cased(this,8,9):
			frameplay(this,"spark3_4",0,0,96,96);
		break;
	case cased(this,10,11):
			frameplay(this,"spark3_5",0,0,96,96);
		break;
	case cased(this,12,13):
			frameplay(this,"spark3_6",0,0,96,96);
		break;
	}
disappearance(this,13);
}

effect.prototype.spark2 = function()
{
	switch(this.counter)
	{
	case cased(this,0,1):
			frameplay(this,"spark4_0",0,0,96,96);
			sound(this,0,"006");
		break;
	case cased(this,2,3):
			frameplay(this,"spark4_1",0,0,96,96);
		break;
	case cased(this,4,5):
			frameplay(this,"spark4_2",0,0,96,96);
		break;
	case cased(this,6,7):
			frameplay(this,"spark4_3",0,0,96,96);
		break;
	case cased(this,8,9):
			frameplay(this,"spark4_4",0,0,96,96);
		break;
	case cased(this,10,11):
			frameplay(this,"spark4_5",0,0,96,96);
		break;
	}
disappearance(this,11);
}