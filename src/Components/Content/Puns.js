import React, { Component } from "react";
import Logo from "./Logo";

class Puns extends Component {
    render() {
        return (
            <div>
                <h2>PUNS</h2>
                <ul>
                    <li>What did the big volcano say to the baby volcano?</li>
                    <li>- I Lava You! -</li>
                    <Logo />
                    <li>What's the best kind of party to throw in Minecraft?</li>
                    <li>- A Block Party! -</li>
                    <Logo />
                    <li>Why couldn't the skeleton climb the mountain?</li>
                    <li>- He didn't have the guts! -</li>
                </ul>
            </div>
        );
    }
}

export default Puns;