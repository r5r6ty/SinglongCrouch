function enemy1(id,s,l)
{
	this.AIlevel = l;
	
	this.counter = 0;
	this.identity = Math.random();
	this.state = s;
	this.status = "AI";
	this.exist = true;
	
	this.distance = 0;

	this.core = new core1(enemy,Math.random()*(g_bg.bgwidth + 1),Math.random()*(g_bg.bgheight + 1),0,0,0,1,1,"normal");
	object.push(this.core);//载入enemy飞机	
	
	object.push(this.c0 = new supercannon1(this.core,2,0,0,0,0,1,1,"normal"));//载入enemysupercannon1

	object.push(new block1(this.core,0,-1,0,0,0,1,1,"normal"));//载入enemyblcok
	object.push(new block1(this.core,0,1,0,0,0,1,1,"normal"));//载入enemyblcok

	object.push(this.e1 = new eps1(this.core,1,0,0,0,0,1,1,"normal"));//载入enemyeps1
	object.push(this.e2 = new eps1(this.core,-1,-1,0,0,0,1,1,"normal"));//载入enemyeps1
	object.push(this.e3 = new eps1(this.core,-1,1,0,0,0,1,1,"normal"));//载入enemyeps1
	
	object.push(this.c1 = new cannon1(this.core,1,-1,0,0,0,1,1,"normal"));//载入enemycannon

	object.push(this.c2 = new cannon1(this.core,1,1,0,0,0,1,1,"normal"));//载入enemycannon

	object.push(this.p1 = new propeller1(this.core,-2,-1,0,0,0,1,1,"normal"));//载入enemypropeller
	object.push(this.p2 = new propeller1(this.core,-2,1,0,0,0,1,1,"normal"));//载入enemypropeller
}

enemy1.prototype.render = function()
{
if(this.core != undefined && !this.core.exist)
{
	this.exist = false;
	var ai = this.AIlevel - 2;
	if (ai >= 0)
	{
	objectif.push(new enemy1(sysobject,"normal",ai));//enemy1
	}
}
	switch(this.state)
	{
		case "normal":
			this.normal();
			break;
	}

this.counter += 1;
return this.exist;
}

enemy1.prototype.normal = function()
{
	switch(this.counter)
	{
	case cased(this,0,0):
	
	if(g_player != undefined && g_player.exist)
	{
	this.distance = Math.sqrt(Math.pow(this.core.centerX - g_player.centerX,2) + Math.pow(this.core.centerY - g_player.centerY,2));
	}
	else
	{
	this.distance = 0;
	}

	var rrr = Math.floor(Math.random()*(this.AIlevel*10 + 1));
	if(this.c0.state == "normal" && this.c0.ammo > 0 && rrr == 0 && Math.abs(this.core.r2m - this.c0.rotate2) <= 0 && this.distance <= 500)
	{
		this.c0.state = "shoot";
	}
	
	var rrr = Math.floor(Math.random()*(this.AIlevel*10 + 1));
	var r2r2r = r2target(this.c1,this.core.target)
	if(this.c1.state == "normal" && this.c1.ammo > 0 && rrr == 0 && Math.abs(r2r2r - this.c1.rotate2) <= 5 && this.distance <= 400)
	{
		this.c1.state = "shoot";
	}
	
	var rrr = Math.floor(Math.random()*(this.AIlevel*10 + 1));
	var r2r2r = r2target(this.c2,this.core.target)
	if(this.c2.state == "normal" && this.c2.ammo > 0 && rrr == 0 && Math.abs(r2r2r - this.c2.rotate2) <= 5 && this.distance <= 400)
	{
		this.c2.state = "shoot";
	}

	var rrr = Math.floor(Math.random()*(this.AIlevel*10 + 1));
	if(this.distance >= 200 && this.p1.state == "normal" && Math.abs(this.core.r2m - this.core.rotate2) <= 15 && rrr == 0)
	{
		this.p1.state = "working";
	}
	else if(this.distance < 200 && this.p1.state == "working")
	{
		this.p1.state = "normal";
		this.p1.counter = 0;
	}

	if(this.distance >= 200 && this.p2.state == "normal" && Math.abs(this.core.r2m - this.core.rotate2) <= 15 && rrr == 0)
	{
		this.p2.state = "working";
	}
	else if(this.distance < 200 && this.p2.state == "working")
	{
		this.p2.state = "normal";
		this.p2.counter = 0;
	}
	
	if(this.e1.state == "normal" && this.e2.state == "normal" && this.e3.state == "normal")
	{
		this.e1.state = "working";
		this.e2.state = "working";
		this.e3.state = "working";
	}
	
	if(this.core.target.exist == false)
	{
		this.exist = false;
	}

		break;
	}
nextstate(this,"normal",0,0);
}



function AI()
{

}