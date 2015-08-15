var Quotes=["The things you own end up owning you.",
"You're not your job. You're not how much money you have in the bank. You're not the car you drive. You're not the contents of your wallet. You're not your fucking khakis. You're the all-singing, all-dancing crap of the world.",
"This is your life and it's ending one minute at a time.",
"Listen up, maggots. You are not special. You are not a beautiful or unique snowflake. You're the same decaying organic matter as everything else.",
"You met me at a very strange time in my life.",
"Oxygen gets you high. In a catastrophic emergency, you're taking giant panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing - 600 miles an hour. Blank faces, calm as Hindu cows.",
"I found freedom. Losing all hope was freedom.",
"On a long enough timeline, the survival rate for everyone drops to zero.",
"When you have insomnia, you're never really asleep... and you're never really awake.",
"We're a generation of men raised by women. I'm wondering if another woman is really the answer we need.",
"It's just, when you buy furniture, you tell yourself, that's it. That's the last sofa I'm gonna need. Whatever else happens, I've got that sofa problem handled. ",
"I wasn't really dying. I wasn't host to cancer or parasites. I was the warm little center that the life of this world crowded around.",
"Fight Club wasn't about winning or losing. It wasn't about words. The hysterical shouting was in tongues, like at a Pentecostal Church.",
"In death, a member of project mayhem has a name, his name is Robert Paulsen. His name is Robert Paulsen. His name is Robert Paulsen. His name is Robert Paulsen.",
"I want you to hit me as hard as you can.",
"When the fight was over, nothing was solved, but nothing mattered. We all felt saved.",
"After fighting, everything else in your life got the volume turned down.",
"Reject the basic assumption of civilization, especially the importance of material possessions.",
"All the ways you wish you could be, that's me. I look like you wanna look, I fuck like you wanna fuck, I am smart, capable, and most importantly, I am free in all the ways that you are not.",
"Fuck what you know. You need to forget about what you know, that's your problem. Forget about what you think you know about life, about friendship, and especially about you and me.",
"Reject the basic assumptions of civilization, especially the importance of material possessions."];
var Author=["-Tyler Durden",
"-Tyler Durden",
"-Narrator(Edward Norton)",  
"-Tyler Durden", 
"-Narrator(Edward Norton)",
"-Tyler Durden",  
"-Narrator(Edward Norton)",
"-Narrator(Edward Norton)",
"-Narrator(Edward Norton)",
"-Tyler Durden",  
"-Narrator(Edward Norton)", 
"-Narrator(Edward Norton)", 
"-Narrator(Edward Norton)",
"-The Mechanic",
"-Tyler Durden", 
"-Narrator(Edward Norton)", 
"-Narrator(Edward Norton)",
"-Lou",
"-Tyler Durden", 
"-Tyler Durden", 
"-Tyler Durden"];

$(document).ready(function(){	
	i=randomnumber();
	$(".quote").append(Quotes[i]);
	$(".author").append(Author[i]);
	
	$(".quotebutton").click(function(){
		i=randomnumber();	
		$(".quote").empty();
		$(".author").empty();
		$(".quote").append(Quotes[i]);
		$(".author").append(Author[i]);
	});

	$('.popup').click(function(event) {
    $('.popup').attr("href", "https://twitter.com/intent/tweet?text="+Quotes[i]+"%20@freecodecamp%20@sidgupta234");
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
    
 
    return false;
  });

});

function randomnumber(){
	return Math.round(Math.random()*20);
}