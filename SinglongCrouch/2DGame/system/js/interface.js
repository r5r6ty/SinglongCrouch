function gameprocess(id,s)
{
	this.z_index = 0;

	this.counter = 0;
	this.identity = id.identity;
	this.state = s;
	this.status = "process";
	this.exist = true;
	
	g_p = this.state;

	for (var i=0; i<objectif.length; i++)
	{
		delete objectif[i];
	}

}

gameprocess.prototype.render = function()
{

	switch(this.state)
	{
		case "menu":
			this.menu();
			break;
		case "battle":
			this.battle();
			break;
		case "modification":
			this.modification();
			break;
	}

//drawpic(this,this.c);


this.counter += 1;
return this.exist;
}

gameprocess.prototype.menu = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

	objectif.push(g_cursor);//载入光标

	objectif.push(new interface(sysobject,0,0,0,0,0,1,"ui1"));

	objectif.push(g_mb1);

	objectif.push(new button(sysobject,307 + 6,13 + 12,1,"previous"));
	
	objectif.push(new button(sysobject,480 + 6,13 + 12,1,"next"));
	
//	objectif.push(MYhangar);

//	objectif.push(new interface(sysobject,400,590,0,0,0,1,"shipname"));
	
//	eval(getCookie('hangar0'));//用字符串执行机体构造
var myship = "";
var strs = g_hangar[0].split(";"); //字符分割 
for(var i=0; i<strs.length-1; i++)
{
var strs2 = strs[i].split(","); //字符分割
		if(strs2[0].indexOf("core") >= 0 )
		{
		myship += 'object.push(g_player = new '+strs2[0]+'(player,'+strs2[1]+','+strs2[2]+',0,0,'+strs2[3]+','+strs2[4]+','+strs2[5]+',"'+strs2[6]+'"));';
		myship += 'g_player.key.key = "'+strs2[7]+'";';
		}
		else
		{
		myship += 'object.push(temp1 = new '+strs2[0]+'(g_player,'+strs2[1]+','+strs2[2]+',0,0,'+strs2[3]+','+strs2[4]+','+strs2[5]+',"'+strs2[6]+'"));';
		myship += 'temp1.key.key = "'+strs2[7]+'";';
		}
}
eval(myship);
		break;
	}
nextstate(this,"",0,1000);
}

gameprocess.prototype.battle = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
g_hangar[0] = "";
		for(var i=0; i<object.length; i++)
		{
			if(object[i] != undefined && object[i].state != "manufacture")
			{
			
			if(object[i].status == "core")
			{
			g_hangar[0] += object[i].functionname+','+object[i].centerX+','+object[i].centerY+','+object[i].rotate+','+object[i].Alpha+','+object[i].symmetry+','+object[i].state+','+object[i].key.key+';';
			}
			else
			{
			g_hangar[0] += object[i].functionname+','+object[i].pX+','+object[i].pY+','+object[i].rotate+','+object[i].Alpha+','+object[i].symmetry+','+object[i].state+','+object[i].key.key+';';
			}

			object[i].state = "normal";
			object[i].counter = 0;
			}
			else
			{
				object[i].exist = false;
			}
		}

setCookie('hangar0',g_hangar[0],1)

g_cursor = new cursor(sysobject,400,300,0,0,0,1,"scope")
objectif.push(g_cursor);//载入光标	

objectbg.push(g_bg);//载入场景

objectif.push(new enemy1(sysobject,"normal",10));//enemy1
objectif.push(new enemy1(sysobject,"normal",10));//enemy1
objectif.push(new enemy1(sysobject,"normal",10));//enemy1
objectif.push(new enemy1(sysobject,"normal",10));//enemy1
objectif.push(new enemy1(sysobject,"normal",10));//enemy1
	
		break;
	}
nextstate(this,"",0,1000);
}

gameprocess.prototype.modification = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

	objectif.push(g_cursor);//载入光标

	objectif.push(new interface(sysobject,0,0,0,0,0,1,"ui1"));
	
	objectif.push(new interface(sysobject,650,25,0,0,0,1,"ui3"));//改造栏
	
	objectif.push(new modificationblock(sysobject,650 + 25,25 + 25 + 25,1,"core1"));//core1
	
	objectif.push(new modificationblock(sysobject,650 + 25 + 50,25 + 25 + 25,1,"cannon1"));//cannon1
	
	objectif.push(new modificationblock(sysobject,650 + 25 + 100,25 + 25 + 25,1,"propeller1"));//propeller1
	
	objectif.push(new modificationblock(sysobject,650 + 25,25 + 25 + 25 + 50,1,"block1"));//propeller1
	
	objectif.push(new modificationblock(sysobject,650 + 25 + 50,25 + 25 + 25 + 50,1,"eps1"));//eps1
	
	objectif.push(new modificationblock(sysobject,650 + 25 + 100,25 + 25 + 25 + 50,1,"supercannon1"));//supercannon1

	objectif.push(g_mb1);
	
	objectif.push(new button(sysobject,307 + 6,13 + 12,1,"previous"));
	
	objectif.push(new button(sysobject,480 + 6,13 + 12,1,"next"));

//	objectif.push(new interface(sysobject,400,590,0,0,0,1,"shipname"));
	
		break;
	}
nextstate(this,"",0,1000);
}




function cursor(id,cx,cy,acx,acy,r,alpha,s)
{
	this.z_index = 100;
	this.key1 = {key: 0,keydown: false};
	this.key2 = {key: 1,keydown: false};
	this.key3 = {key: 2,keydown: false};

	this.counter = 0;
	this.identity = id.identity;
	this.pic;
	this.state = s;
	this.status = "arrow";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.rotate = r % 360;
	this.Alpha = alpha;
	this.exist = true;
	
	this.leftcondition;
	this.middlecondition;
	this.rightcondition;
	
	this.ix;
	this.iy;
	this.iw;
	this.ih;
}

function keystate(o,key)
{
	if(key.key in keysDown)
	{
		key.keydown = true;
		var condition = "down";
	}
	else if(!(key.key in keysDown) && key.keydown)
	{
		key.keydown = false;
		var condition = "click";
	}
	else if(!key.keydown)
	{
		var condition = "up";
	}
return condition;
}

cursor.prototype.render = function()
{

this.leftcondition = keystate(this,this.key1);
this.middlecondition = keystate(this,this.key2);
this.rightcondition = keystate(this,this.key3);

document.getElementById("demo13").innerHTML= this.leftcondition + "/" + this.middlecondition + "/" + this.rightcondition;


	switch(this.state)
	{
		case "arrow":
			this.arrow();
			break;
		case "scope":
			this.scope();
			break;
	}

//drawpic(this,this.c);

this.counter += 1;
return this.exist;
}

cursor.prototype.arrow = function()
{
this.centerX = mouse.centerX;
this.centerY = mouse.centerY;

this.ix = mouse.centerX;
this.iy = mouse.centerY;
this.iw = 0;
this.ih = 0;

	if(this.leftcondition == "up")//左键
	{
	}
	else if(this.leftcondition == "down")
	{
	}
	else if(this.leftcondition == "click")
	{
	}
	if(this.rightcondition == "up")//右键
	{
	}
	else if(this.rightcondition == "down")
	{
	}
	else if(this.rightcondition == "click")
	{
	}

	switch(this.counter)
	{
	case cased(this,0,4):
drawinterface(this,"cursor_0",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,5,9):
drawinterface(this,"cursor_1",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,10,14):
drawinterface(this,"cursor_2",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,15,19):
drawinterface(this,"cursor_1",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	}
nextstate(this,"arrow",19,0);
}

cursor.prototype.scope = function()
{
this.centerX = mouse.centerX;
this.centerY = mouse.centerY;
if(this.condition == "normal")
{
}
else if(this.condition == "clicked")
{
this.condition = "normal";
}
	switch(this.counter)
	{
	case cased(this,0,9):
drawinterface(this,"cursor_3",this.centerX,this.centerY,5,5,0,1,ctxif);
		break;
	case cased(this,10,19):
drawinterface(this,"cursor_4",this.centerX,this.centerY,5,5,0,1,ctxif);
		break;
	case cased(this,20,29):
drawinterface(this,"cursor_5",this.centerX,this.centerY,5,5,0,1,ctxif);
		break;
	}
nextstate(this,"scope",29,0);
}







function interface(id,cx,cy,acx,acy,r,alpha,s)
{
	this.z_index = 0;

	this.counter = 0;
	this.identity = id.identity;
	this.pic;
	this.state = s;
	this.status = "interface";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.dvx = acx;
	this.dvy = acy;
	this.rotate = r % 360;
	this.Alpha = alpha;
	this.exist = true;
}

interface.prototype.render = function()
{

	switch(this.state)
	{
		case "ui1":
			this.ui1();
			break;
		case "shipname":
		this.z_index = 1;
			this.shipname();
			break;
		case "ui3":
			this.ui3();
			break;
		case "dialogbox":
			this.dialogbox();
			break;
	}

//drawpic(this,this.c);


this.counter += 1;
return this.exist;
}



interface.prototype.ui1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):

drawinterface(this,"ui1_0",this.centerX,this.centerY,0,0,0,1,ctxif);

ctxif.save();
ctxif.fillStyle="white";
ctxif.font="15px Arial";
ctxif.textAlign="left";
ctxif.fillText("Player："+player_name,5,15);
ctxif.restore();

		break;
	}
nextstate(this,"ui1",0,0);
}

interface.prototype.ui2 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
drawinterface(this,"ui2_0",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	}
nextstate(this,"ui2",0,0);
}

interface.prototype.ui2_r = function()
{
	switch(this.counter)
	{
	case cased(this,0,1):
drawinterface(this,"ui2_0",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,2,3):
drawinterface(this,"ui2_1",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,4,5):
drawinterface(this,"ui2_2",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,6,7):
drawinterface(this,"ui2_3",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,8,9):
drawinterface(this,"ui2_4",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,10,21):
drawinterface(this,"ui2_5",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,22,23):
drawinterface(this,"ui2_4",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,24,25):
drawinterface(this,"ui2_3",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,26,27):
drawinterface(this,"ui2_2",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,28,29):
drawinterface(this,"ui2_1",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	case cased(this,30,31):
drawinterface(this,"ui2_0",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	}
nextstate(this,"ui2",31,0);
}


interface.prototype.ui3 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
drawinterface(this,"ui3_0",this.centerX,this.centerY,0,0,0,1,ctxif);
		break;
	}
nextstate(this,"ui3",0,0);
}


interface.prototype.shipname = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
ctxif.save();
ctxif.fillStyle="yellow";
ctxif.font="20px Arial";
ctxif.textAlign="center";
ctxif.fillText(MYhangar.shipname,this.centerX,this.centerY);
ctxif.restore();
		break;
	}
nextstate(this,"shipname",0,0);
}



function button2mouse(o)
{
	if(g_cursor != undefined && detection(g_cursor.ix, g_cursor.iy, g_cursor.ix + g_cursor.iw, g_cursor.iy + g_cursor.ih, o.bx, o.by, o.bx + o.bw, o.by + o.bh))
	{
		if(g_cursor.leftcondition == "up")
		{
		o.condition = "overed";
		}
		else if(g_cursor.leftcondition == "down")
		{
		o.condition = "pressed";
		}
		else if(g_cursor.leftcondition == "click")
		{
		o.condition = "clicked";
		}
	}
	else
	{
		o.condition = "normal";
	}
}

function button(id,cx,cy,alpha,s)
{
	this.z_index = 1;

	this.counter = 0;
	this.identity = id.identity;
	this.pic;
	this.state = s;
	this.status = "button";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.target;
	this.target2;
	this.Alpha = alpha;
	this.exist = true;
	
	this.condition = "normal";
	//normal,overed,(鼠标进入，移出),clicked
	
	this.buttongroup = ["battle_start","modification_start"];
	this.gi = 0;
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
}

button.prototype.render = function()
{
	switch(this.state)
	{
		case this.buttongroup[0]:
			this.battle_start();
			break;
		case this.buttongroup[1]:
			this.modification_start();
			break;
		case "previous":
			this.previous();
			break;
		case "next":
			this.next();
			break;
	}

//drawpic(this,this.c);

ctxif.save();
ctxif.beginPath();
ctxif.strokeStyle="blue";
ctxif.moveTo(this.bx,this.by);
ctxif.lineTo(this.bx + this.bw,this.by);
ctxif.lineTo(this.bx + this.bw,this.by + this.bh);
ctxif.lineTo(this.bx,this.by + this.bh);
ctxif.closePath();
ctxif.stroke();
ctxif.restore();


this.counter += 1;
return this.exist;
}

button.prototype.battle_start = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,100,40);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"button1_0",this.centerX,this.centerY,50,20,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"button1_0",this.centerX,this.centerY,50,20,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"button1_0",this.centerX,this.centerY,50,20,0,1,ctxif);
}
else if(this.condition == "clicked")
{
sound(this,0,"ok",false);
	if(g_player != undefined)
	{
	objectif.push(new gameprocess(sysobject,"battle"));
	}
}
		break;
	}
nextstate(this,"battle_start",0,0);
}



button.prototype.modification_start = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,100,40);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"button1_1",this.centerX,this.centerY,50,20,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"button1_1",this.centerX,this.centerY,50,20,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"button1_1",this.centerX,this.centerY,50,20,0,1,ctxif);
}
else if(this.condition == "clicked")
{
sound(this,0,"ok",false);
	objectif.push(new gameprocess(sysobject,"modification"));
}
		break;
	}
nextstate(this,"modification_start",0,0);
}



button.prototype.previous = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,26,24);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"button2_0",this.centerX,this.centerY,6,12,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"button2_0",this.centerX,this.centerY,6,12,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"button2_0",this.centerX,this.centerY,6,12,0,1,ctxif);
}
else if(this.condition == "clicked")
{
	if(g_mb1.gi > 0)
	{
	g_mb1.gi -= 1;
	g_mb1.state = g_mb1.buttongroup[g_mb1.gi];
	}
}
		break;
	}
nextstate(this,"previous",0,0);
}


button.prototype.next = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,26,24);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"button2_1",this.centerX,this.centerY,6,12,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"button2_1",this.centerX,this.centerY,6,12,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"button2_1",this.centerX,this.centerY,6,12,0,1,ctxif);
}
else if(this.condition == "clicked")
{
	if(g_mb1.gi < g_mb1.buttongroup.length - 1)
	{
	g_mb1.gi += 1;
	g_mb1.state = g_mb1.buttongroup[g_mb1.gi];
	}
}
		break;
	}
nextstate(this,"next",0,0);
}















function modificationblock(id,cx,cy,alpha,s)
{
	this.z_index = 1;

	this.counter = 0;
	this.identity = id.identity;
	this.pic;
	this.state = s;
	this.status = "button";
	this.centerX = cx;
	this.centerY = cy;
	this.myX;
	this.myY;
	this.target;
	this.target2;
	this.Alpha = alpha;
	this.exist = true;
	
	this.activity = false;
	
	this.condition = "normal";
	//normal,overed,(鼠标进入，移出),clicked
	
	this.buttongroup = ["core1","cannon1","propeller1","block1","eps1","supercannon1"];
	this.gi = 0;
	
	this.bx;
	this.by;
	this.bw;
	this.bh;
}

modificationblock.prototype.render = function()
{
this.activity = false;
	switch(this.state)
	{
		case this.buttongroup[0]:
			this.core1();
			break;
		case this.buttongroup[1]:
			this.cannon1();
			break;
		case this.buttongroup[2]:
			this.propeller1();
			break;
		case this.buttongroup[3]:
			this.block1();
			break;
		case this.buttongroup[4]:
			this.eps1();
			break;
		case this.buttongroup[5]:
			this.supercannon1();
			break;
	}

//drawpic(this,this.c);

ctxif.save();
ctxif.beginPath();
ctxif.strokeStyle="blue";
ctxif.moveTo(this.bx,this.by);
ctxif.lineTo(this.bx + this.bw,this.by);
ctxif.lineTo(this.bx + this.bw,this.by + this.bh);
ctxif.lineTo(this.bx,this.by + this.bh);
ctxif.closePath();
ctxif.stroke();
ctxif.restore();


this.counter += 1;
return this.exist;
}

modificationblock.prototype.core1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,50,50);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"core1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"core1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"core1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "clicked")
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state == "manufacture")
		{
			object[i].exist = false;;
		}
	}
	objectif.push(new core1(this,this.centerX,this.centerY,0,0,0,1,1,"manufacture"));
}
		break;
	}
nextstate(this,"core1",0,0);
}

modificationblock.prototype.cannon1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,50,50);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"cannon1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"cannon1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"cannon1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "clicked")
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state == "manufacture")
		{
			object[i].exist = false;;
		}
	}
	object.push(new cannon1(this,this.centerX,this.centerY,0,0,0,1,1,"manufacture"));
}
		break;
	}
nextstate(this,"cannon1",0,0);
}

modificationblock.prototype.propeller1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,50,50);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"propeller1_0",this.centerX,this.centerY,32,14,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"propeller1_0",this.centerX,this.centerY,32,14,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"propeller1_0",this.centerX,this.centerY,32,14,0,1,ctxif);
}
else if(this.condition == "clicked")
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state == "manufacture")
		{
			object[i].exist = false;;
		}
	}
	object.push(new propeller1(this,this.centerX,this.centerY,0,0,0,1,1,"manufacture"));
}
		break;
	}
nextstate(this,"propeller1",0,0);
}

modificationblock.prototype.block1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,50,50);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"block1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"block1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"block1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "clicked")
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state == "manufacture")
		{
			object[i].exist = false;;
		}
	}
	object.push(new block1(this,this.centerX,this.centerY,0,0,0,1,1,"manufacture"));
}
		break;
	}
nextstate(this,"block1",0,0);
}

modificationblock.prototype.eps1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,50,50);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"eps1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"eps1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"eps1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "clicked")
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state == "manufacture")
		{
			object[i].exist = false;;
		}
	}
	object.push(new eps1(this,this.centerX,this.centerY,0,0,0,1,1,"manufacture"));
}
		break;
	}
nextstate(this,"eps1",0,0);
}

modificationblock.prototype.supercannon1 = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
interfacebdy(this,0,0,50,50);
button2mouse(this);
if(this.condition == "normal")
{
drawinterface(this,"supercannon1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "overed")
{
drawinterface(this,"supercannon1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "pressed")
{
drawinterface(this,"supercannon1_0",this.centerX,this.centerY,6,6,0,1,ctxif);
}
else if(this.condition == "clicked")
{
	for(var i=0; i<object.length; i++)
	{
		if(object[i] != undefined && object[i].state == "manufacture")
		{
			object[i].exist = false;;
		}
	}
	object.push(new supercannon1(this,this.centerX,this.centerY,0,0,0,1,1,"manufacture"));
}
		break;
	}
nextstate(this,"supercannon1",0,0);
}

function startthegame()
{
	this.z_index = 0;
	this.counter = 0;
	this.status = "process";
	this.exist = true;
}

startthegame.prototype.render = function()
{

if(loadeddata >= 25)
{
start();
document.getElementById("divframe").removeChild(document.getElementById("cvsload"));
this.exist = false;
}

this.counter += 1;
return this.exist;
}