function davis(id,cx,cy,acx,acy,alpha,s)
{
this.cx;
this.cw;
this.cy;
this.ch;
this.bx;
this.bw;
this.by;
this.bh;
this.ix;
this.iw;
this.iy;
this.ih;

this.target = "null";

this.itr_switch;
this.cln_switch;
this.bdy_switch;

this.identity = id;
this.tmidpointX = 0;
this.tmidpointY = 0;

this.up = this.identity.up;
this.down = this.identity.down;
this.left = this.identity.left;
this.right = this.identity.right;
this.a = this.identity.a;
this.b = this.identity.b;
this.c = this.identity.c;

this.vx = 0;
this.vy = 0;
this.vf = 0;
this.fall = 0;
this.hits = 0;

this.direction = 1;
this.state = s;
this.pre_state;
this.walking_speed = 3;
this.running_speed = 5;
this.jump_height = -13;
this.jump_distance = 4;
this.arest = 0;
this.attackcounter = 0;
this.attacking = false;
this.ag;
	this.counter = 0;
	this.exist = true;

	this.pic;

	this.status = "character";
	this.maxhp = 1000;
	this.hp = this.maxhp;
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.Alpha = alpha;
//   this.myUp = false;
//   this.myDown = false;
//   this.myLeft = false;
//   this.myRight = false;
}


davis.prototype.render = function()
{
//			if(this.direction == "1")
//			{
//if(this.centerX < this.cw/2)
//{
//	this.centerX = this.cw/2;
//}
//else if(this.centerX > c.width - this.cw/2)
//{
//	this.centerX = c.width - this.cw/2;
//}
//			}
for (var i=0; i<object.length; i++)
{
	if (object[i] != undefined && object[i].cx != undefined && object[i].cy != undefined && object[i].cw != undefined && object[i].ch != undefined && object[i].identity != this.identity && this.target == "null")
	{
		this.target = object[i];
	}
}

if(this.target != "null" && this.target.status == "character")
{
this.tmidpointX = (this.centerX + this.target.centerX)/2;
this.tmidpointY = (this.centerY + this.target.centerY)/2;
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
}
else
{
this.tmidpointX = this.centerX;
this.tmidpointY = this.centerY;
}

if(this.centerY < groundvalue)
{
	this.ag = "a";
	if(this.state == "standing")
	{
		this.counter = 0;
		this.state = "jumping";
	}
}
else if(this.centerY > groundvalue)
{
	this.g = "g";
	if(this.state == "jumping")
	{
		this.counter = 0;
		this.state = "standing";
	}
}

//if(this.ag == "a")
//{
//	this.centerY += this.vy;
//	this.vy += gy;
//}
if((this.centerY >= groundvalue && this.ag == "a") || (this.centerY > groundvalue && this.ag == "g" && this.state == "fallingf"))
{
	this.ag = "g";
	this.vy = 0;
//	this.dvx = 0;
	this.dvy = 0;
	this.centerY = groundvalue;
	if(this.state == "fallingf" && (this.counter == 1+1  || this.counter == 2+1))
	{
		this.state = "lying";
	}
	else if(this.state == "fallingf" && (this.counter == 0+1 || this.counter == 3+1 || this.counter == 4+1))
	{
		this.state = "falledground";
	}
	else
	{
		this.state = "crouch";
	}
	this.counter = 0;
}
if(this.centerY > groundvalue && this.ag == "g" && this.fall < 70)
{
	this.dvy = 0;
	this.centerY = groundvalue;
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
		case "running":
			break;
		case "squat":
			this.squat();
			break;
		case "jumpo":
			this.jumpo();
			break;
		case "jumpf":
			this.jumpf();
			break;
		case "jumpb":
			this.jumpb();
			break;
		case "jump_attack":
			this.jump_attack();
			break;
		case "jumping":
			this.jumping();
			break;
		case "crouch":
			this.crouch();
			break;
		case "turnback_standing":
			this.turnback_standing();
			break;
		case "turnback_squat":
			this.turnback_squat();
			break;
		case "injured1":
			this.injured1();
			break;
		case "injured2":
			this.injured2();
			break;
		case "faint":
			this.faint();
			break;
		case "fallingf":
			this.fallingf();
			break;
		case "falledground":
			this.falledground();
			break;
		case "lying":
			this.lying();
			break;
		case "punch1":
			this.punch1();
			break;
		case "punch2":
			this.punch2();
			break;
		case "singlong":
			this.singlong();
			break;
		default:
			break;
	}

if(this.fall > 0)
{
	if(this.fall > 70)
	{
		this.fall = 70;
	}
	if(this.state != "fallingf")
	{
	this.fall -= this.vf;
	this.vf += gf;
	}
}
else
{
	this.vf = 0;
	this.fall = 0;
}

if(this.state != this.pre_state)
{
	this.arest = 0;
	this.attackcounter = 0;
}
if(this.attackcounter >= this.arest)
{
	this.attacking = true;
}
else
{
	this.attackcounter += 1;
}

if(this.target != "null")
{
	if(this.target.state != "injured1" && this.target.state != "injured2" && this.target.state != "faint" && this.target.state != "fallingf")
	{
		this.hits = 0;
	}
}

drawpic(this,ctx);
this.counter += 1;

if(this.target != "null")
{
document.getElementById("demo5").innerHTML=this.counter;
document.getElementById("demo6").innerHTML="state:" + this.state;
document.getElementById("demo3").innerHTML="attackcounter: " + g_player1.attackcounter + " / " + g_player1.arest + "|" + g_player2.attackcounter + " / " + g_player2.arest;
//document.getElementById("demo3").innerHTML=g_player1.vx + "/" + g_player1.vy + "|" + g_player2.vx + "/" + g_player2.vy;
document.getElementById("demo7").innerHTML=g_player1.dvx + "/" + g_player1.dvy + "|" + g_player2.dvx + "/" + g_player2.dvy;
document.getElementById("demo8").innerHTML=g_player1.centerX + "/" + g_player1.centerY + "|" + g_player2.centerX + "/" + g_player2.centerY;
document.getElementById("demo9").innerHTML=g_player1.fall + "|" + g_player2.fall;
document.getElementById("demo13").innerHTML="p1_hits:" + g_player1.hits + "|" + "p2_hits:" + g_player2.hits;
}
return this.exist;
}

davis.prototype.death = function()
{

}

davis.prototype.myshot = function()
{

}

function prandom(a,b)
{
	var i = Math.round(Math.random())
	if(i == 1)
	{
	return a;
	}
	else
	{
	return b;
	}
}

davis.prototype.standing = function()
{
//holdkey();
skillkeydown(this,prandom("punch1","punch2"),0,this.a);
skillkeydown(this,"jumpo",0,this.up);
skillkeydown(this,"squat",0,this.down);

skillkeydown(this,"walkingf",0,this.right);
skillkeydown(this,"walkingb",0,this.left);

	switch(this.counter)
	{
	case cased(this,0,9):
			frameplay(this,"davis0_0",0,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,21,18,43,62);
		break;
	case cased(this,10,19):
			frameplay(this,"davis0_1",0,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,21,18,43,62);
		break;
	case cased(this,20,29):
			frameplay(this,"davis0_2",0,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,21,18,43,62);
		break;
	case cased(this,30,39):
			frameplay(this,"davis0_3",0,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,21,18,43,62);
		break;
	}
nextstate(this,"standing",39,0);
}



davis.prototype.punch1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
			frameplay(this,"davis0_10",0,0,42,79);
				cln(this,0,-25,30,50);
				bdy(this,28,12,33,70);
		break;
	case cased(this,3,5):
			frameplay(this,"davis0_11",0,0,23,79);
			sound(this,4,"007");
				cln(this,0,-25,30,50);
				bdy(this,13,11,31,68);
				itr(this,21,31,43,18,10,4,4,20,20);
		break;
	case cased(this,6,9):
			frameplay(this,"davis0_12",0,0,28,79);
				cln(this,0,-25,30,50);
				bdy(this,17,9,31,72);
		break;
	case cased(this,10,13):
			frameplay(this,"davis0_13",0,0,41,79);
				cln(this,0,-25,30,50);
				bdy(this,29,10,32,70);
		break;
	}
nextstate(this,"standing",13,0);
}

davis.prototype.punch2 = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
			frameplay(this,"davis0_14",0,0,42,79);
				cln(this,0,-25,30,50);
				bdy(this,26,12,27,68);
		break;
	case cased(this,3,5):
			frameplay(this,"davis0_15",0,0,24,79);
			sound(this,4,"007");
				cln(this,0,-25,30,50);
				bdy(this,13,11,32,67);
				itr(this,23,38,41,15,10,4,4,20,20);
		break;
	case cased(this,6,9):
			frameplay(this,"davis0_16",0,0,28,79);
				cln(this,0,-25,30,50);
				bdy(this,17,15,37,64);
		break;
	case cased(this,10,13):
			frameplay(this,"davis0_17",0,0,41,79);
				cln(this,0,-25,30,50);
				bdy(this,28,9,32,72);
		break;
	}
nextstate(this,"standing",13,0);
}

davis.prototype.walkingf = function()//>
{
skillkeydown(this,prandom("punch1","punch2"),0,this.a);
skillkeydown(this,"jumpf",0,this.up);
skillkeydown(this,"squat",0,this.down);

skillkeyup(this,"standing",0,this.right);

	switch(this.counter)
	{
	case cased(this,0,5):
			frameplay(this,"davis0_4",this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,6,11):
			frameplay(this,"davis0_5",this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,12,17):
			frameplay(this,"davis0_6",this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,18,23):
			frameplay(this,"davis0_7",this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,24,29):
			frameplay(this,"davis0_6",this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,30,35):
			frameplay(this,"davis0_5",this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	}
nextstate(this,"walkingf",35,0);
}

davis.prototype.walkingb = function()//<
{
skillkeydown(this,prandom("punch1","punch2"),0,this.a);
skillkeydown(this,"jumpb",0,this.up);
skillkeydown(this,"squat",0,this.down);

skillkeyup(this,"standing",0,this.left);

	switch(this.counter)
	{
	case cased(this,0,5):
			frameplay(this,"davis0_7",-this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,6,11):
			frameplay(this,"davis0_6",-this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,12,17):
			frameplay(this,"davis0_5",-this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,18,23):
			frameplay(this,"davis0_4",-this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,24,29):
			frameplay(this,"davis0_5",-this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	case cased(this,30,35):
			frameplay(this,"davis0_6",-this.walking_speed,0,39,79);
				cln(this,0,-25,30,50);
				bdy(this,28,15,27,65);
		break;
	}
nextstate(this,"walkingb",35,0);
}

davis.prototype.jumping = function()
{
skillkeydown(this,"jump_attack",0,this.a);

	switch(this.counter)
	{
	case cased(this,0,1):
			frameplay(this,"davis0_62",0,0,39,79);
				cln(this,0,-35,25,50);
				bdy(this,20,11,29,61);
		break;
	}
nextstate(this,"jumping",1,0);
}

davis.prototype.jumpo = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
			frameplay(this,"davis0_60",0,0,39,79);
				cln(this,0,-20,30,40);
				bdy(this,22,24,35,58);
		break;
	case cased(this,3,5):
			frameplay(this,"davis0_61",0,0,39,79);
			sound(this,3,"017");
				cln(this,0,-20,30,40);
				bdy(this,26,26,34,56);
		break;
	case cased(this,6,7):
		this.dvy = this.jump_height;
			frameplay(this,"davis0_62",0,0,39,79);
				cln(this,0,-35,25,50);
				bdy(this,20,11,29,61);
		skillkeydown(this,"jump_attack",0,this.a);
		break;
	}
nextstate(this,"jumpo",7,6);
}

davis.prototype.jumpf = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
			frameplay(this,"davis0_60",0,0,39,79);
				cln(this,0,-20,30,40);
				bdy(this,22,24,35,58);
		break;
	case cased(this,3,5):
			frameplay(this,"davis0_61",0,0,39,79);
			sound(this,3,"017");
				cln(this,0,-20,30,40);
				bdy(this,26,26,34,56);
		break;
	case cased(this,6,14):
		this.dvx = this.direction * this.jump_distance;
		this.dvy = this.jump_height;
			frameplay(this,"davis0_63",0,0,39,79);
				cln(this,0,-35,25,50);
				bdy(this,43,5,23,33);
				bdy(this,28,29,21,33);
				bdy(this,18,48,27,21);
		skillkeydown(this,"jump_attack",0,this.a);
		break;
	case cased(this,15,23):
			frameplay(this,"davis1_42",0,0,39,78);
				cln(this,0,-35,25,50);
				bdy(this,35,8,27,27);
				bdy(this,16,30,39,37);
		skillkeydown(this,"jump_attack",0,this.a);
		break;
	}
nextstate(this,"jumpf",23,15);
}

davis.prototype.jumpb = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
			frameplay(this,"davis0_60",0,0,39,79);
				cln(this,0,-20,30,40);
				bdy(this,22,24,35,58);
		break;
	case cased(this,3,5):
			frameplay(this,"davis0_61",0,0,39,79);
			sound(this,3,"017");
				cln(this,0,-20,30,40);
				bdy(this,26,26,34,56);
		break;
	case cased(this,6,14):
		this.dvx = this.direction * -this.jump_distance;
		this.dvy = this.jump_height;
			frameplay(this,"davis0_64",0,0,39,79);
				cln(this,0,-35,25,50);
				bdy(this,20,5,27,38);
				bdy(this,16,37,36,22);
		skillkeydown(this,"jump_attack",0,this.a);
		break;
	case cased(this,15,23):
			frameplay(this,"davis1_43",0,0,39,79);
				cln(this,0,-35,25,50);
				bdy(this,18,13,29,51);
		skillkeydown(this,"jump_attack",0,this.a);
		break;
	}
nextstate(this,"jumpb",23,15);
}

davis.prototype.crouch = function()
{
	switch(this.counter)
	{
	case cased(this,0,5):
			frameplay(this,"davis0_60",0,0,39,79);
			sound(this,0,"012");
				cln(this,0,-20,30,40);
				bdy(this,25,26,31,54);
		break;
	}
nextstate(this,"standing",5,0);
}

davis.prototype.jump_attack = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
			frameplay(this,"davis1_62",0,0,36,75);
				cln(this,0,-35,25,50);
				bdy(this,18,10,35,57);
		break;
	case cased(this,3,5):
			frameplay(this,"davis1_63",0,0,39,74);
			sound(this,3,"007");
				cln(this,0,-35,25,50);
				bdy(this,22,9,35,56);
		break;
	case cased(this,6,8):
			frameplay(this,"davis1_64",0,0,35,75);
				cln(this,0,-35,25,50);
				bdy(this,24,6,29,60);
		break;
	case cased(this,9,15):
			frameplay(this,"davis1_65",0,0,25,70);
				cln(this,0,-35,25,50);
				bdy(this,11,2,29,63);
				itr(this,17,37,52,17,30,3,-13,70,60);
		break;
	case cased(this,16,18):
			frameplay(this,"davis1_66",0,0,25,71);
				cln(this,0,-35,25,50);
				bdy(this,11,5,28,63);
				itr(this,32,40,36,16,30,3,-13,70,60);
		break;
	case cased(this,19,25):
			frameplay(this,"davis1_67",0,0,33,72);
				cln(this,0,-35,25,50);
				bdy(this,21,6,29,58);
		break;
	}
nextstate(this,"jumping",25,0);
}

davis.prototype.injured1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,6):
			frameplay(this,"davis1_50",0,0,35,79);
				cln(this,0,-25,25,50);
				bdy(this,25,17,29,61);
		break;
	case cased(this,7,14):
			frameplay(this,"davis1_51",0,0,34,79);
				cln(this,0,-25,25,50);
				bdy(this,32,16,27,63);
				bdy(this,22,37,26,42);
		break;
	}
nextstate(this,"standing",14,0);
}

davis.prototype.injured2 = function()
{
	switch(this.counter)
	{
	case cased(this,0,6):
			frameplay(this,"davis1_53",0,0,36,79);
				cln(this,0,-25,25,50);
				bdy(this,11,24,39,31);
				bdy(this,25,53,40,27);
		break;
	case cased(this,7,14):
			frameplay(this,"davis1_54",0,0,43,79);
				cln(this,0,-25,25,50);
				bdy(this,12,23,40,37);
				bdy(this,27,56,36,24);
		break;
	}
nextstate(this,"standing",14,0);
}

davis.prototype.faint = function()
{
	switch(this.counter)
	{
	case cased(this,0,12):
			frameplay(this,"davis1_50",0,0,39,79);
				cln(this,0,-25,25,50);
				bdy(this,27,22,42,58);
		break;
	case cased(this,13,24):
			frameplay(this,"davis1_52",0,0,39,79);
				cln(this,0,-25,25,50);
				bdy(this,28,24,39,57);
		break;
	case cased(this,25,36):
			frameplay(this,"davis1_51",0,0,38,79);
				cln(this,0,-25,25,50);
				bdy(this,28,23,37,58);
		break;
	case cased(this,37,48):
			frameplay(this,"davis1_52",0,0,39,79);
				cln(this,0,-25,25,50);
				bdy(this,29,26,37,53);
		break;
	}
nextstate(this,"standing",48,0);
}

davis.prototype.fallingf = function()
{
if(this.counter >= 1)
{
	if((this.dvy + this.vy >= this.dvy) && (this.dvy + this.vy < this.dvy/2))
	{
	this.counter = 1;
	}
	else if((this.dvy + this.vy >= this.dvy/2) && (this.dvy + this.vy < 0))
	{
	this.counter = 2;
	}
	else if((this.dvy + this.vy >= 0) && (this.dvy + this.vy < -this.dvy/2))
	{
	this.counter = 3;
	}
	else
	{
	this.counter = 4;
	}
}
	switch(this.counter)
	{
	case cased(this,0,1):
			frameplay(this,"davis0_30",0,0,39,79);
				cln(this,0,-40,30,30);
				bdy(this,25,25,21,20);
		break;
	case cased(this,2,2):
			frameplay(this,"davis0_31",0,0,37,85);
				cln(this,0,-40,30,30);
				bdy(this,22,20,24,23);
		break;
	case cased(this,3,3):
			frameplay(this,"davis0_32",0,0,39,79);
				cln(this,0,-40,30,30);
				bdy(this,27,22,20,18);
		break;
	case cased(this,4,4):
			frameplay(this,"davis0_33",0,0,39,79);
				cln(this,0,-40,30,30);
				bdy(this,22,30,27,21);
		break;
	}

}

davis.prototype.falledground = function()
{
	switch(this.counter)
	{
	case cased(this,0,10):
			frameplay(this,"davis0_35",0,0,39,79);
			sound(this,0,"016");
				cln(this,0,-10,50,20);
		break;
	}
nextstate(this,"lying",10,0);
}

davis.prototype.lying = function()
{
	switch(this.counter)
	{
	case cased(this,0,60):
			frameplay(this,"davis0_34",0,0,38,73);
			sound(this,0,"016");
				cln(this,0,-10,50,20);
		break;
	}
	if(this.hp <= 0)
	{
nextstate(this,"lying",60,60);
	}
	else
	{
nextstate(this,"crouch",60,0);
	}
}



davis.prototype.squat = function()
{
skillkeydown(this,"singlong",0,this.a);

skillkeyup(this,"standing",0,this.down);
	switch(this.counter)
	{
	case cased(this,0,5):
			frameplay(this,"davis0_60",0,0,39,79);
				cln(this,0,-20,30,40);
				bdy(this,25,26,31,54);
		break;
	}
nextstate(this,"squat",5,0);
}

davis.prototype.turnback_standing = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
		break;
	}
nextstate(this,"standing",0,1);
}

davis.prototype.turnback_squat = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
		break;
	}
nextstate(this,"squat",0,1);
}

davis.prototype.singlong = function()
{
	switch(this.counter)
	{
	case cased(this,0,2):
		this.dvx = this.direction * 3;
		this.dvy = -15;
			frameplay(this,"davis2_30",0,0,30,76);
			sound(this,0,"095");
				cln(this,0,-35,20,40);
				bdy(this,25,26,31,54);
		break;
	case cased(this,3,4):
			frameplay(this,"davis2_31",0,0,28,79);
			sound(this,4,"031");
				cln(this,0,-35,20,40);
				bdy(this,25,26,31,54);
				itr(this,10,3,72,75,1,3,-33,70,85);
		break;
	case cased(this,5,6):
			frameplay(this,"davis2_32",0,0,26,81);
				cln(this,0,-35,20,40);
				bdy(this,19,7,36,69);
				itr(this,13,-1,67,80,1,3,-31,70,60);
		break;
	case cased(this,7,8):
			frameplay(this,"davis2_33",0,0,26,78);
				cln(this,0,-35,20,40);
				bdy(this,22,6,30,69);
				itr(this,11,-2,63,80,1,3,-29,70,45);
		break;
	case cased(this,9,12):
			frameplay(this,"davis2_34",0,0,34,81);
				cln(this,0,-35,20,40);
				bdy(this,28,12,29,66);
				itr(this,19,1,61,80,1,3,-27,70,30);
		break;
	case cased(this,13,16):
			frameplay(this,"davis2_35",0,0,33,75);
				cln(this,0,-35,20,40);
				bdy(this,27,7,28,65);
		break;
	case cased(this,17,22):
			frameplay(this,"davis2_36",0,0,29,74);
				cln(this,0,-35,20,40);
				bdy(this,23,11,30,61);
		break;
	case cased(this,21,26):
			frameplay(this,"davis2_37",0,0,29,73);
				cln(this,0,-35,20,40);
				bdy(this,21,3,33,68);
		break;
	}
nextstate(this,"standing",26,0);
}















