function beta(id,cx,cy,acx,acy,alpha,s)
{
	this.c;

	this.name = "BETA";
	this.cs = "character_s_0";
	
	this.g_value = 1;
	this.walking_speed = 8;
	this.running_speed = 5;
	this.jump_height = -25;
	this.jump_distance = 4;
	
	this.target = "null";
	this.maxhp = 1000;
	this.hp = this.maxhp;
	
	this.counter = 0;
	this.identity = id;
	this.pic;
	this.state = s;
	this.status = "character";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.Alpha = alpha;
	this.exist = true;
	
	this.airland = "land";
	this.groundstate = "standing";
	
	this.vx = 0;
	this.vy = 0;
	
	this.direction = 1;
	
	this.tmidpointX = 0;
	this.tmidpointY = 0;

	this.itr_switch;
	this.cln_switch;
	this.bdy_switch;
	
	this.cx;
	this.cw;
	this.cy;
	this.ch;
	
	this.bdy = new Array();
	this.itr = new Array();
	
	this.up = this.identity.up;
	this.down = this.identity.down;
	this.left = this.identity.left;
	this.right = this.identity.right;
	this.a = this.identity.a;
	this.b = this.identity.b;
	this.c = this.identity.c;
}

beta.prototype.render = function()
{

if(this.target != "null" && this.target.status == "character")
{
this.tmidpointX = (this.centerX + this.target.centerX)/2;
this.tmidpointY = (this.centerY - this.myY/2 + this.target.centerY - this.target.myY/2)/2;
	if(this.state == "standing" || this.state == "walkingf" || this.state == "walkingb" || this.state == "squat")
	{
		if(this.direction == "1")
		{
			if(this.centerX > this.target.centerX)
			{
				this.direction = "-1"
			}
		}
		else
		{
			if(this.centerX < this.target.centerX)
			{
				this.direction = "1"
			}
		}
	}
	if(this.direction == 1)
	{
		this.left = this.identity.left;
		this.right = this.identity.right;
	}
	else
	{
		this.left = this.identity.right;
		this.right = this.identity.left;
	}
}
else
{
	for(var i=0; i<object.length; i++)
	{
		if(this.target == "null" && object[i].identity != this.identity && object[i].status == "character")
		{
		this.target = object[i];
		break;
		}
	}
}//À—µ–—≠ª∑

	switch(this.state)
	{
		case "standing":
			this.standing();
			break;
		case "walkingf":
			this.walkingf();
			break;
		case "walkingb":
			this.walkingb();
			break;
		case "jumpo":
			this.jumpo();
			break;
		case "jumping":
			this.jumping();
			break;
		case "crouch":
			this.crouch();
			break;
	}



ctx.save();
ctx.translate(-visualX, -visualY);
ctx.beginPath();
ctx.strokeStyle="red";
ctx.moveTo(this.centerX,this.centerY);
ctx.lineTo(this.centerX,this.centerY + this.vy + this.dvy);
ctx.stroke();
ctx.restore();

drawpic(this,this.c);

ctest.width = g_player1.pic.width;
ctest.height = g_player1.pic.height;
ctxtest.drawImage(g_player1.pic, 0, 0); 





this.counter += 1;

//document.getElementById("demo4").innerHTML= g_player1.centerY + "||" + groundvalue;
//document.getElementById("demo8").innerHTML= g_player1.airland;

return this.exist;
}

beta.prototype.standing = function()
{
skillkeydown(this,"walkingf",0,this.right);
skillkeydown(this,"walkingb",0,this.left);

skillkeydown(this,"jumpo",0,this.up);



	switch(this.counter)
	{
	case cased(this,0,4):
			frameplay(this,"standing_0",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,5,9):
			frameplay(this,"standing_1",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,10,14):
			frameplay(this,"standing_2",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,15,19):
			frameplay(this,"standing_3",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,20,24):
			frameplay(this,"standing_4",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,25,29):
			frameplay(this,"standing_5",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,30,34):
			frameplay(this,"standing_6",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,35,39):
			frameplay(this,"standing_7",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,40,44):
			frameplay(this,"standing_8",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,45,49):
			frameplay(this,"standing_9",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,50,54):
			frameplay(this,"standing_10",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,55,59):
			frameplay(this,"standing_11",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,60,64):
			frameplay(this,"standing_12",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,65,69):
			frameplay(this,"standing_13",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,70,74):
			frameplay(this,"standing_14",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,75,79):
			frameplay(this,"standing_15",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,80,84):
			frameplay(this,"standing_16",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,85,89):
			frameplay(this,"standing_17",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,90,94):
			frameplay(this,"standing_18",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,95,99):
			frameplay(this,"standing_19",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	}
nextstate(this,"standing",99,0);
}

beta.prototype.walkingf = function()//>
{

skillkeyup(this,"standing",0,this.right);

	switch(this.counter)
	{
	case cased(this,0,0):
			frameplay(this,"standing_0",this.walking_speed,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
				this.itr.push(this,new itrrange(this,135,121,111,106));
		break;
	}
nextstate(this,"walkingf",0,0);
}

beta.prototype.walkingb = function()//>
{

skillkeyup(this,"standing",0,this.left);

	switch(this.counter)
	{
	case cased(this,0,0):
			frameplay(this,"standing_0",-this.walking_speed,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
				this.itr.push(this,new itrrange(this,135,121,111,106));
		break;
	}
nextstate(this,"walkingb",0,0);
}

beta.prototype.jumping = function()
{
skillkeydown(this,"jump_attack",0,this.a);

	switch(this.counter)
	{
	case cased(this,0,1):
			frameplay(this,"davis0_62",0,0,39,79);
		break;
	}
nextstate(this,"jumping",1,0);
}

beta.prototype.jumpo = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
			frameplay(this,"davis0_60",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,3,5):
			frameplay(this,"davis0_61",0,0,156,347);
			sound(this,3,"017");
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,6,6):
			this.vy = 0;
			this.dvy = 0;
			frameplay(this,"davis0_62",0,this.jump_height,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	case cased(this,7,7):
		if (this.up in keysDown)//∞¥…œ
		{
		this.counter = 0;
		this.state = "jumpo";
		}
			frameplay(this,"davis0_62",0,0,156,347);
				clnrange(this,156,190,45,140);
				this.bdy.push(this,new bdyrange(this,119,21,80,150));
				this.bdy.push(this,new bdyrange(this,106,171,99,176));
		break;
	}
nextstate(this,"jumpo",7,7);
}

beta.prototype.crouch = function()
{
	switch(this.counter)
	{
	case cased(this,0,5):
			frameplay(this,"davis0_60",0,0,39,79);
			sound(this,0,"012");
		break;
	}
nextstate(this,"standing",5,0);
}


