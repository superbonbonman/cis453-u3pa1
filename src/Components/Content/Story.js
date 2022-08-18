import React, { Component } from "react";
import Logo from "./Logo";

class Story extends Component {
    render() {
        return (
            <div>
                <h2>Story Jokes</h2>
                <Logo />
                <p>A pirate captain walks into his favorite old bar for
                the first time in quite a while. The bartender recognizes
                him and greets him right away.</p>
                <p>"It's been a while, how's the pirate life treatin' ya?",
                asks the bartender.</p>
                <p>"Pretty good", the captain replies.</p>
                <p>The bartender can't help but notice that the captain looks
                a lot rougher than he did the last time he was ashore.</p>
                <p>"I saw you walkin' in on that new wooden leg. How'd that happen?",
                the bartender inquires.</p>
                <p>"Arrr, ye' see, we got attacked by another pirate ship shortly
                after setting sail. With the ships firing all those cannons at each
                other, I got hit with one of the cannonballs and it took my leg clean 
                off! But the doc fixed me up with this here peg leg, and I was good as new!"</p>
                <p>"Wow", said the bartender, "sounds pretty rough. I notice you got a new
                hook for a hand now too. What happened there?"</p>
                <p>"Arrr, while we were fighting another pirate ship, we boarded their ship 
                and I had me a bit of a sword fight with their captain for their haul. That 
                captain managed to cut this hand here clean off! But it's alright, I managed 
                to win the fight and the doc set me up with this here hook."</p>
                <p>"Wow!", said the bartender again, "sounds like quite the battle! I noticed
                you got a new eyepatch as well. Did you lose your eye in that battle too?"</p>
                <p>"Well, no, that one happened on a peaceful, sunny day. I was laying outside 
                on the deck just enjoying the sun. I happened to look up at the sky and, with my 
                luck of course, a gull flying overhead pooped right into my right eye!"</p>
                <p>"Oh my!", said the bartender, as he paused a moment in question. "Pardon my asking,
                but even though that seems bad, it doesn't quite seem bad enough to cost a man his eye, 
                should it?"</p>
                <p>"Aye, wouldn't have been a problem", said the captain, "but that was my first day 
                with the hook"</p>
            </div>
        );
    }
}

export default Story;