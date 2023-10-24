import React, {useRef, useEffect } from 'react';
import mojs from 'mo-js';

function TypeHeadText(){
    const typingRef =useRef(null);

    useEffect(() => {
        const textAnimation = new mojs.Html({
            el: typingRef.current,
            isShowStart: true,
            isShowEnd: true,
            y: {
                0: '0.5rem',
            },
            duration: 2000,
            easing: 'cubic.out',
        });

        textAnimation.play();

        return() => {
            textAnimation.destroy();
        };
    }, []);

    return(
        <p ref={typingRef} className='typing-text'>
            This is a typing Animation.
        </p>
    )
};

export default TypeHeadText;