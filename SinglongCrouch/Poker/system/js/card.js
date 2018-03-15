var numerals = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["spade","heart","club","diamond"];
var jokers = ["A","B"];

function card(id,cx,cy,acx,acy,alpha,s,test)
{
    this.c;

    this.test = test;

    
    this.name = "";
	this.counter = 0;
	this.identity = id;
    this.pic = this.test;
	this.state = s;
	this.status = "card";
	this.centerX = cx;
	this.centerY = cy;
	this.myX = this.pic.width / 2;
	this.myY = this.pic.height / 2;
	this.dvx = acx;
	this.dvy = acy;
    this.Alpha = alpha;
    this.scaleX = 1;
    this.scaleY = 1;
	this.exist = true;
	
	this.bdy = new Array();
	this.itr = new Array();
	
	this.direction = 1;

    this.speed = Math.random();

    this.angel = 90;
}

card.prototype.render = function()
{
    this.bdy.splice(0, this.bdy.length);//清空bdy
    this.itr.splice(0, this.itr.length);//清空itr

    var sine = Math.sin(Math.PI / 180 * this.angel);

    if (sine < 0)
    {
        this.pic = document.getElementById("poker_64");
        sine = Math.abs(sine);
    }
    else if (sine > 0) {
        this.pic = this.test;
    }

    this.scaleX = sine;

    this.angel += 5 * this.speed;

    if (this.angel > 360) {
        this.angel -= 360;
    }
    else if (this.angel < -360) {
        this.angel += 360;
    }

    this.bdy.push(new bdyrange(this, 0, 0, 81, 125));
    drawpic(this,this.c);

    this.counter += 1;
    return this.exist;
}

function deck(cx, cy)
{
    this.centerX = cx;
    this.centerY = cy;
    this.cards = new Array();
    for (var i = 0; i < numerals.length * suits.length; i++)// + jokers.length
    {
        var xxx = new card(player1, cx, cy, 0, 0, 1, "normal", document.getElementById("poker_" + i));
        xxx.name = "poker_" + i;
        this.cards.push(xxx);
    }
}

function random(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

function shuffleC(arr) {
    var length = arr.length,
        shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
        rand = random(0, index);
        if (rand !== index) shuffled[index] = shuffled[rand];
        shuffled[rand] = arr[index];
    }
    return shuffled;
}

deck.prototype.render = function ()
{
    
}

deck.prototype.shuffle = function () {
    this.cards = shuffleC(this.cards);
}

deck.prototype.show = function () {
    for (var i = 0; i < this.cards.length; i++) {
        pushtocanvas(object, ctx, this.cards[i]);
    }
}