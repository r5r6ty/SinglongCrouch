var numerals = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["spade","heart","club","diamond"];
var jokers = ["A","B"];

function card(id,cx,cy,acx,acy,alpha,s,test)
{
	this.c;

    
    this.name = "";
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