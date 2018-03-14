var numerals = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["spade","heart","club","diamond"];
var jokers = ["A","B"];

function card(id,cx,cy,acx,acy,alpha,s,test)
{
	this.c;

    

	this.counter = 0;
	this.identity = id;
	this.pic = test;
	this.state = s;
	this.status = "card";
	this.centerX = cx;
	this.centerY = cy;
	this.myX = this.pic.width / 2;
	this.myY = this.pic.height / 2;
	this.dvx = acx;
	this.dvy = acy;
	this.Alpha = alpha;
	this.exist = true;
	
	this.bdy = new Array();
	this.itr = new Array();
	
	this.direction = 1;

    
}

card.prototype.render = function()
{
    this.bdy.splice(0, this.bdy.length);//清空bdy
    this.itr.splice(0, this.itr.length);//清空itr

    this.bdy.push(new bdyrange(this, 0, 0, 81, 125));
    drawpic(this,this.c);

    this.counter += 1;
    return this.exist;
}

function deck()
{
    for (var i = 0; i < numerals.length * suits.length + jokers.length; i++)
    {
        var xxx = new card(player1,Math.random()*1960,Math.random()*1080,0,0,1,"normal",document.getElementById("poker_" + i));
        pushtocanvas(object,ctx,xxx);//载入玩家2；
    }
}