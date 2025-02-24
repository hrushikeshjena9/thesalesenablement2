import React, { useEffect, useState } from "react";

const WaterBubbleBackground = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const generateBubbles = () => {
            return Array.from({ length: 10 }, () => ({
                id: Math.random().toString(36).substr(2, 9), 
                cx: Math.random() * 100,
                cy: Math.random() * 100,
                r: Math.random() * 40 + 10,
                animationDelay: Math.random() * 5 + "s",
                animationDuration: Math.random() * 6 + 4 + "s",
            }));
        };

        setBubbles(generateBubbles());
    }, []);

    return (
        <svg
            className="absolute inset-0 w-full h-full overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
                </radialGradient>
            </defs>
            {bubbles.map((bubble) => (
                <circle
                    key={bubble.id}
                    cx={`${bubble.cx}%`}
                    cy={`${bubble.cy}%`}
                    r={bubble.r}
                    fill="url(#bubbleGradient)"
                    className="bubble"
                    style={{
                        animationDelay: bubble.animationDelay,
                        animationDuration: bubble.animationDuration,
                    }}
                />
            ))}
            <style>
                {`
                .bubble {
                    animation: floatUp linear infinite;
                    opacity: 0.6;
                }
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 0.5;
                    }
                    50% {
                        transform: translateY(-30vh) scale(1.1);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(-60vh) scale(1);
                        opacity: 0;
                    }
                }
                `}
            </style>
        </svg>
    );
};

export default WaterBubbleBackground;





// import React, { useEffect, useState } from "react";

// const FireBackground = () => {
//     const [particles, setParticles] = useState([]);

//     useEffect(() => {
//         const generateParticles = () => {
//             let newParticles = [];
//             for (let i = 0; i < 30; i++) {
//                 newParticles.push({
//                     id: i,
//                     cx: Math.random() * 100,
//                     cy: Math.random() * 40 + 60, 
//                     r: Math.random() * 6 + 3, 
//                     duration: Math.random() * 4 + 2, 
//                     delay: Math.random() * 2, 
//                     color: `rgba(255, ${Math.floor(Math.random() * 150 + 100)}, 0, ${Math.random() * 0.5 + 0.5})`,
//                 });
//             }
//             setParticles(newParticles);
//         };
//         generateParticles();
//     }, []);

//     return (
//         <svg className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" xmlns="http://www.w3.org/2000/svg">
//             {particles.map((particle) => (
//                 <circle
//                     key={particle.id}
//                     cx={`${particle.cx}%`}
//                     cy={`${particle.cy}%`}
//                     r={particle.r}
//                     fill={particle.color}
//                     className="fire-particle"
//                     style={{
//                         animationDuration: `${particle.duration}s`,
//                         animationDelay: `${particle.delay}s`,
//                     }}
//                 />
//             ))}

//             <style>
//                 {`
//                 .fire-particle {
//                     animation: riseUp ease-in-out infinite, flicker ease-in-out infinite;
//                     filter: blur(2px);
//                 }

//                 @keyframes riseUp {
//                     0% {
//                         transform: translateY(0) scale(1);
//                         opacity: 1;
//                     }
//                     50% {
//                         transform: translateY(-50vh) scale(1.2);
//                         opacity: 0.7;
//                     }
//                     100% {
//                         transform: translateY(-100vh) scale(0.8);
//                         opacity: 0;
//                     }
//                 }

//                 @keyframes flicker {
//                     0%, 100% {
//                         opacity: 0.8;
//                     }
//                     50% {
//                         opacity: 1;
//                     }
//                 }
//                 `}
//             </style>
//         </svg>
//     );
// };

// export default FireBackground;
