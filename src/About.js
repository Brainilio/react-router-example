import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap'; 


function About() {
    let title = useRef(null); 
    let paragraph = useRef(null);

    useEffect(() => { 
        gsap.from([title, paragraph], 0.8, { 
            delay: 0.8, 
            ease: "power3.out",
            opacity: 0, 
            y: 20, 
            stagger: { 
                amount: .15
            }
        })

    }, [title, paragraph])

  return (
    <div>
      <h1 ref={el => (title = el)}>About</h1>
      <div className='line-wrap'></div>
      <div ref={el => (paragraph = el)}>
          <p className="info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sapiente in reiciendis voluptatibus similique quis quisquam laudantium fuga et aliquam!
          </p>
      </div>
    </div>
  );
}

export default About;
