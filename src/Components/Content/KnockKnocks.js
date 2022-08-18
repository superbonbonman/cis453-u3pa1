import React, { Component } from "react";
import Logo from "./Logo";

class KnockKnocks extends Component {
    render() {
        return (
            <div>
                <h2>KNOCK-KNOCK JOKES</h2>
                <p>Knock Knock.</p>
                <p>Who's there?</p>
                <p>Hatch.</p>
                <p>Hatch Who?</p>
                <p>Gessundheit! &#40;alt: Bless You!&#41;</p>
                <Logo />
                <p>Knock Knock.</p>
                <p>Who's there?</p>
                <p>A little old lady.</p>
                <p>A little old lady who?</p>
                <p>I didn't know you could yodel!</p>
            </div>
        );
    }
}

export default KnockKnocks;