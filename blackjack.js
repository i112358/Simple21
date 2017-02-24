var C1 = {val:1, imgsrc:"Cards/cardClubsA.png"};
var C2 = {val:2, imgsrc:"Cards/cardClubs2.png"};
var C3 = {val:3, imgsrc:"Cards/cardClubs3.png"};
var C4 = {val:4, imgsrc:"Cards/cardClubs4.png"};
var C5 = {val:5, imgsrc:"Cards/cardClubs5.png"};
var C6 = {val:6, imgsrc:"Cards/cardClubs6.png"};
var C7 = {val:7, imgsrc:"Cards/cardClubs7.png"};
var C8 = {val:8, imgsrc:"Cards/cardClubs8.png"};
var C9 = {val:9, imgsrc:"Cards/cardClubs9.png"};
var C10 = {val:10, imgsrc:"Cards/cardClubs10.png"};
var C11 = {val:10, imgsrc:"Cards/cardClubsJ.png"};
var C12 = {val:10, imgsrc:"Cards/cardClubsQ.png"};
var C13 = {val:10, imgsrc:"Cards/cardClubsK.png"};
var S1 = {val:1, imgsrc:"Cards/cardSpadesA.png"};
var S2 = {val:2, imgsrc:"Cards/cardSpades2.png"};
var S3 = {val:3, imgsrc:"Cards/cardSpades3.png"};
var S4 = {val:4, imgsrc:"Cards/cardSpades4.png"};
var S5 = {val:5, imgsrc:"Cards/cardSpades5.png"};
var S6 = {val:6, imgsrc:"Cards/cardSpades6.png"};
var S7 = {val:7, imgsrc:"Cards/cardSpades7.png"};
var S8 = {val:8, imgsrc:"Cards/cardSpades8.png"};
var S9 = {val:9, imgsrc:"Cards/cardSpades9.png"};
var S10 = {val:10, imgsrc:"Cards/cardSpades10.png"};
var S11 = {val:10, imgsrc:"Cards/cardSpadesJ.png"};
var S12 = {val:10, imgsrc:"Cards/cardSpadesQ.png"};
var S13 = {val:10, imgsrc:"Cards/cardSpadesK.png"};
var D1 = {val:1, imgsrc:"Cards/cardDiamondsA.png"};
var D2 = {val:2, imgsrc:"Cards/cardDiamonds2.png"};
var D3 = {val:3, imgsrc:"Cards/cardDiamonds3.png"};
var D4 = {val:4, imgsrc:"Cards/cardDiamonds4.png"};
var D5 = {val:5, imgsrc:"Cards/cardDiamonds5.png"};
var D6 = {val:6, imgsrc:"Cards/cardDiamonds6.png"};
var D7 = {val:7, imgsrc:"Cards/cardDiamonds7.png"};
var D8 = {val:8, imgsrc:"Cards/cardDiamonds8.png"};
var D9 = {val:9, imgsrc:"Cards/cardDiamonds9.png"};
var D10 = {val:10, imgsrc:"Cards/cardDiamonds10.png"};
var D11 = {val:10, imgsrc:"Cards/cardDiamondsJ.png"};
var D12 = {val:10, imgsrc:"Cards/cardDiamondsQ.png"};
var D13 = {val:10, imgsrc:"Cards/cardDiamondsK.png"};
var H1 = {val:1, imgsrc:"Cards/cardHeartsA.png"};
var H2 = {val:2, imgsrc:"Cards/cardHearts2.png"};
var H3 = {val:3, imgsrc:"Cards/cardHearts3.png"};
var H4 = {val:4, imgsrc:"Cards/cardHearts4.png"};
var H5 = {val:5, imgsrc:"Cards/cardHearts5.png"};
var H6 = {val:6, imgsrc:"Cards/cardHearts6.png"};
var H7 = {val:7, imgsrc:"Cards/cardHearts7.png"};
var H8 = {val:8, imgsrc:"Cards/cardHearts8.png"};
var H9 = {val:9, imgsrc:"Cards/cardHearts9.png"};
var H10 = {val:10, imgsrc:"Cards/cardHearts10.png"};
var H11 = {val:10, imgsrc:"Cards/cardHeartsJ.png"};
var H12 = {val:10, imgsrc:"Cards/cardHeartsQ.png"};
var H13 = {val:10, imgsrc:"Cards/cardHeartsK.png"};
var cardBack ={val:0, imgsrc:"Cards/cardBack_red4.png"};
var deck = [C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11,C12,C13,
			S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,
			D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11,D12,D13,
			H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H11,H12,H13];
var yourCards = [];
var dealerCards = [];
var flag = 51;
var win = false;



function giveCard()
{
	document.getElementById("welcome").style.display = "none";
	//Remove previous cards
	var yc = document.getElementById("yourHand");
	var dc = document.getElementById("dealerHand");
	var hit = document.getElementById("hit");
	var stand = document.getElementById("stand");
	removeButtons();
	var dcchild = dc.childNodes;
	var ycchild = yc.childNodes;
	for(i=dcchild.length-1; i>=0; i--)
	{
		dc.removeChild(dcchild[i]);
	} 
	for(j=ycchild.length-1; j>=0; j--)
	{
		yc.removeChild(ycchild[j]);
	}
	yourCards = [];
	dealerCards = [];
	//Shuffle cards
	deck.sort(function(a, b){return 0.5 - Math.random()});
	flag = 51;
	//first round
	var yccard1 = document.createElement("img");
	yccard1.setAttribute('src', deck[flag].imgsrc);
	yc.appendChild(yccard1);
	yourCards.push(deck[flag]);
	flag--;
	var dccard1 = document.createElement("img");
	dccard1.setAttribute('src', deck[flag].imgsrc);
	dc.appendChild(dccard1);
	dealerCards.push(deck[flag]);
	flag--;
	//second round
	var yccard2 = document.createElement("img");
	yccard2.setAttribute('src', deck[flag].imgsrc);
	yc.appendChild(yccard2);
	yourCards.push(deck[flag]);
	flag--;
	var dccard2 = document.createElement("img");
	dccard2.setAttribute('src', cardBack.imgsrc);
	dc.appendChild(dccard2);
	dealerCards.push(deck[flag]);
	flag--;
	//Check for blackjack
	if(getValue(dealerCards)==21)
	{
		win = false;
		endGame();
	}else if(getValue(yourCards)==21)
	{
		win = true;
		endGame();
	}else
	{
		var hitB = document.createElement("button");
		var hitT = document.createTextNode("Hit");
		document.getElementById("inst").style.display = "block";
		hitB.appendChild(hitT);
		hitB.setAttribute("onclick","addCard()");
		hit.appendChild(hitB);
		var standB = document.createElement("button");
		var standT = document.createTextNode("Stand");
		standB.appendChild(standT);
		standB.setAttribute("onclick","dealerTurn()");
		stand.appendChild(standB);
	}
}

//if player hits
function addCard()
{
	yourCards.push(deck[flag]);
	var yc = document.getElementById("yourHand");
	var nc = document.createElement("img");
	nc.setAttribute("src",deck[flag].imgsrc);
	flag--;
	yc.appendChild(nc);
	if(getValue(yourCards)>21)
	{
		removeButtons();
		alert("You have BUSTED!");		
		win = false;
		endGame();
	}
}

//if player stands
function dealerTurn()
{
	removeButtons();
	var dc = document.getElementById("dealerHand");
	while(getValue(dealerCards)<=16)
	{
		dealerCards.push(deck[flag]);
		var nc = document.createElement("img");
		nc.setAttribute("src", deck[flag].imgsrc);
		dc.appendChild(nc);
		flag--;
	}
	if(getValue(dealerCards)>21)
	{
		alert("Dealer has BUSTED!");
		win = true;
		endGame();		
	}else if(getValue(dealerCards)>=getValue(yourCards))
	{
		win = false;
		endGame();
	}else
	{
		win = true;
		endGame();
	}
}

//remove button if user can't do anymore actions
function removeButtons()
{
	var hit = document.getElementById("hit");
	var stand = document.getElementById("stand");
	var hitchild = hit.childNodes;
	var standchild = stand.childNodes;
	for(i=hitchild.length-1; i>=0; i--)
	{
		hit.removeChild(hitchild[i]);
	}
	for(i=standchild.length-1; i>=0; i--)
	{
		stand.removeChild(standchild[i]);
	}
	document.getElementById("inst").style.display = "none";
}

//Calculate the cards of a player
function getValue(a)
{
	var ace = false;
	var handVal = 0;
	for(i=0;i<a.length;i++)
	{
		handVal = handVal + a[i].val;
		if(a[i].val==1)
		{
			ace = true;
		}
	}
	if(ace==true&&ace+10<=21)
	{
		handVal = handVal + 10;
	}
	return handVal;
}

//Show result and show the dealer's second card
function endGame()
{
	document.getElementById("dealerHand").firstChild.nextSibling.setAttribute("src", dealerCards[1].imgsrc);
	if(win==false)
	{
		alert("You Lose!");
	}else
	{
		alert("You Win!");
	}
}