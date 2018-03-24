var numerals = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["spade","heart","club","diamond"];
var jokers = ["A","B"];

function card(id,cx,cy,acx,acy,alpha,s,test)
{
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

    this.speed = 1;

    this.angleY = 90;

    this.shadowBlur = 0;
    this.shadowColor = "";
}

card.prototype.update = function()
{
    this.bdy.splice(0, this.bdy.length);//清空bdy
    this.itr.splice(0, this.itr.length);//清空itr

    switch (this.state) {
        case "normal":
            this.normal();
            break;
        case "Z_rolling":
            this.Z_rolling();
            break;
        case "Y_rolling":
            this.Y_rolling();
            break;
        case "back":
            this.back();
            break;
        case "open":
            this.open();
            break;
    }

    var sine = Math.sin(Math.PI / 180 * (this.angleY - 90));

    if (sine < 0) {
        this.pic = document.getElementById("poker_64");
        sine = Math.abs(sine);
    }
    else if (sine > 0) {
        this.pic = this.test;
    }

    this.scaleX = sine;

    if (this.angleY >= 360) {
        this.angleY -= 360;
    }
    else if (this.angleY <= -360) {
        this.angleY += 360;
    }

    this.counter += 1;
    return this.exist;
}

card.prototype.render = function () {
    drawpic(this);
}

card.prototype.normal = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            this.bdy.push(new bdyrange(this, 0, 0, 81, 125));
            break;
    }
    nextstate(this, "normal", 0, 0);
}

card.prototype.Y_rolling = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            var sine = Math.sin(Math.PI / 180 * (this.angleY - 90));
            this.angleY += 1 + this.speed;
            this.bdy.push(new bdyrange(this, 0, 0, 81, 125));
            break;
    }
    nextstate(this, "Y_rolling", 0, 0);
}

card.prototype.Z_rolling = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            var sine = Math.sin(Math.PI / 180 * (this.angleY - 90));
            this.angleY += 1 + this.speed;
            this.bdy.push(new bdyrange(this, 0, 0, 81, 125));
            break;
    }
    nextstate(this, "Z_rolling", 0, 0);
}

card.prototype.back = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            this.bdy.push(new bdyrange(this, 0, 0, 81, 125));
            if (this.angleY < 0) {
                this.angleY += 5;
                if (this.angleY > 0) {
                    this.angleY = 0;
                }
            } else if (this.angleY > 0) {
                this.angleY -= 5;
                if (this.angleY < 0) {
                    this.angleY = 0;
                }
            }

            if (mousejudge(this)) {
                if (caninput) {
                    this.centerX += Math.random() * 2 - 1;
                    this.centerY += Math.random() * 2 - 1;
                    if (ismouseclick(0)) {
                        sound(this, 0, "ok");
                        this.state = "open";
                        this.counter = 0 - 1;

                        this.shadowBlur = 0;
                        this.shadowColor = "";
                    } else {
                        this.shadowBlur = 20 + (Math.random() * 2 - 1) * 10;
                        this.shadowColor = "gold";
                    }
                }
            } else {
                this.shadowBlur = 0;
                this.shadowColor = "";
            }
            break;
    }
    nextstate(this, "back", 0, 0);
}

card.prototype.open = function () {
    switch (this.counter) {
        case cased(this, 0, 0):
            this.bdy.push(new bdyrange(this, 0, 0, 81, 125));
            if (this.angleY < 180) {
                this.angleY += 5;
                if (this.angleY > 180) {
                    this.angleY = 180;
                }
            } else if (this.angleY > 180) {
                this.angleY -= 5;
                if (this.angleY < 180) {
                    this.angleY = 180;
                }
            }
            break;
    }
    nextstate(this, "open", 0, 0);
}

function deck(cx, cy, s)
{
    this.centerX = cx;
    this.centerY = cy;
    this.cards = new Array();
    for (var i = 0; i < numerals.length * suits.length; i++)// + jokers.length
    {
        var xxx = new card(player1, cx, cy, 0, 0, 1, s, document.getElementById("poker_" + i));
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
        object.push(this.cards[i]);
    }
}