import { Card } from './Card';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function TechnologySection() {
  return (
    <section 
      className="flex flex-col items-center justify-center w-full px-4 overflow-x-hidden min-h-screen"
      style={{
        background: 'radial-gradient(circle at center, #111111 0%, #020202 100%)',
        position: 'relative'
      }}
    >
      <div className="flex flex-col items-center max-w-[800px]">
        <h2 
          className="text-[24px] md:text-3xl font-['Arial'] font-bold text-center mb-4"
          style={{
            background: 'linear-gradient(to bottom, #FFFFFF, #999999)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Built on a foundation of fast, production-grade tooling
        </h2>
      </div>


{/* Colored Lines Animations */}
      <div className="relative flex mr-20 mt-10">
         {/* Powered By Switch/Hub Gradient */}
         <div className='absolute'>
          <svg width="1016" height="247" viewBox="0 0 1016 247" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect 
              x="446.5" 
              y="58" 
              width="200" 
              height="74" 
              rx="10" 
              fill="url(#radialGlow)"
              animate={{
                opacity: [0.5, .2, 0.5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <radialGradient
                id="radialGlow"
                cx="0.5"
                cy="0.5"
                r="0.5"
                fx="0.5"
                fy="0.5"
              >
                <stop offset="0" stopColor="#111111" />
                <stop offset="1" stopColor="#020202" />
              </radialGradient>
              <motion.linearGradient 
                id="paint0_linear_674_596" 
                x1="0%" 
                y1="0%" 
                x2="100%" 
                y2="0%" 
                gradientUnits="userSpaceOnUse"
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["100%", "200%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <stop stopColor="#595959" />
                <motion.stop 
                  offset="0.635" 
                  stopColor="#343434"
                  animate={{
                    offset: ["0.2", "0.8"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.linearGradient>
            </defs>
          </svg>
         </div>

         {/* Yellow Line */}
        <div className='absolute'>
        <svg width="1016" height="247" viewBox="0 0 1016 247" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path 
  d="M654 82H958C962.418 82 966 85.5817 966 90V245.5" 
  stroke="url(#yellowGradient)"
  strokeWidth="2"
  initial={{ pathLength: 0, pathOffset: 1 }}
  animate={{ 
    pathLength: [0, 0.3, 0.3, 0],
    pathOffset: [1, 0.7, 0, 0],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear",
    times: [0, 0.3, 0.7, 1],
    delay: 3
  }}
/>
        </svg>

        </div>

        {/* Redish Pinkish Line */}
        <div className='absolute mt-1 ml-[1px]'>
        <svg width="1016" height="247" viewBox="0 0 1016 247" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path 
  d="M502.5 136V247" 
  stroke="#DC2F6D"
  strokeWidth="2"
  initial={{ pathLength: 0, pathOffset: 1 }}
  animate={{ 
    pathLength: [0, 0.3, 0.3, 0],
    pathOffset: [1, 0.7, 0, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "linear",
    times: [0, 0.3, 0.7, 1],
    delay: 2
  }}
/>
            </svg>

        </div>

        {/* Blue Line */}
        <div className='absolute'>
        <svg width="1016" height="247" viewBox="0 0 1016 247" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path 
  d="M475.5 138.5V151.5C475.5 155.918 471.918 159.5 467.5 159.5H106.5C102.082 159.5 98.5 163.082 98.5 167.5V244" 
  stroke="url(#blueGradient)"
  strokeWidth="2"
  initial={{ pathLength: 0, pathOffset: 1 }}
  animate={{ 
    pathLength: [0, 0.3, 0.3, 0],
    pathOffset: [1, 0.7, 0, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "linear",
    times: [0, 0.3, 0.7, 1],
    delay: 3
  }}
/>
        </svg>
        </div>

        <MiddleSwitch/>

      </div>


{/*Cards Div */}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6 xxl:gap-16 max-w-[1440px] px-4 max-md:mb-20">
        <Card
          icon={<ReactIcon />}
          title="React"
          description="The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
          cardIndex={0}
        />
        <Card
          icon={<TurbopackIcon />}
          title="Turbopack"
          description="The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
          cardIndex={1}
        />
        <Card
          icon={<SwcIcon />}
          title="Speedy Web Compiler"
          description="The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
          isLastCard={true}
          cardIndex={2}
        />
      </div>
    </section>
  );
}

// Svgs

function ReactIcon() {
  return (
    <Image
      src="/1.png"
      alt="React Logo"
      width={48}
      height={48}
      className="object-contain"
    />
  );
}

function TurbopackIcon() {
  return (
    <Image
      src="/2.png"
      alt="Turbopack Logo"
      width={48}
      height={48}
      className="object-contain"
    />
  );
}

function SwcIcon() {
  return (
    <Image
      src="/3.png"
      alt="SWC Logo"
      width={100}
      height={100}
      className="object-contain"
    />
  );
} 

function MiddleSwitch() {
    return (
        <svg width="1018" height="247" viewBox="0 0 1018 247" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M616.5 51V42C616.5 37.5817 620.082 34 624.5 34H1009C1013.42 34 1017 37.5817 1017 42V247" stroke="#272727"/>
<path d="M559 51.5V4" stroke="#272727"/>
<path d="M559.5 136V187" stroke="#272727"/>
<circle cx="559.5" cy="188" r="1.5" fill="black" stroke="#272727"/>
<path d="M531.5 136V172" stroke="#272727"/>
<circle cx="531.5" cy="173" r="1.5" fill="black" stroke="#272727"/>
<circle cx="559" cy="3" r="2.5" stroke="#272727"/>
<path d="M503.5 136V247" stroke="#272727"/>
<path d="M2.5 246L1.07407 90.5734C1.03327 86.1266 4.62676 82.5 9.07373 82.5H447.5" stroke="url(#paint0_radial_657_280)"/>
<path d="M161.464 246L160.558 119.057C160.526 114.617 164.117 111 168.557 111H447.5" stroke="url(#paint1_radial_657_280)"/>
<rect x="447.5" y="58" width="200" height="74" rx="10" fill="url(#paint2_linear_657_280)"/>
<rect x="449.5" y="60" width="196" height="70" rx="10" fill="#232323"/>
<path d="M473.44 103V83.9115H479.625C481.969 83.9115 483.497 84.0069 484.208 84.1979C485.302 84.4844 486.218 85.1094 486.956 86.0729C487.694 87.0278 488.062 88.2648 488.062 89.7839C488.062 90.9557 487.85 91.941 487.424 92.7396C486.999 93.5382 486.457 94.1675 485.797 94.6276C485.146 95.079 484.482 95.3785 483.805 95.526C482.885 95.7083 481.552 95.7995 479.807 95.7995H477.294V103H473.44ZM477.294 87.1406V92.5573H479.404C480.923 92.5573 481.938 92.4575 482.451 92.2578C482.963 92.0582 483.362 91.7457 483.648 91.3203C483.944 90.895 484.091 90.4002 484.091 89.8359C484.091 89.1415 483.887 88.5686 483.479 88.1172C483.071 87.6658 482.555 87.3837 481.93 87.2708C481.47 87.184 480.545 87.1406 479.156 87.1406H477.294ZM490.354 95.8906C490.354 94.6753 490.654 93.4991 491.253 92.362C491.852 91.2248 492.698 90.3568 493.792 89.7578C494.894 89.1589 496.122 88.8594 497.477 88.8594C499.569 88.8594 501.283 89.5408 502.62 90.9036C503.957 92.2578 504.625 93.9722 504.625 96.0469C504.625 98.1389 503.948 99.875 502.594 101.255C501.248 102.627 499.551 103.312 497.503 103.312C496.235 103.312 495.024 103.026 493.87 102.453C492.724 101.88 491.852 101.043 491.253 99.9401C490.654 98.829 490.354 97.4792 490.354 95.8906ZM494.104 96.0859C494.104 97.4575 494.43 98.5078 495.081 99.237C495.732 99.9661 496.535 100.331 497.49 100.331C498.444 100.331 499.243 99.9661 499.885 99.237C500.536 98.5078 500.862 97.4488 500.862 96.0599C500.862 94.7057 500.536 93.6641 499.885 92.9349C499.243 92.2057 498.444 91.8411 497.49 91.8411C496.535 91.8411 495.732 92.2057 495.081 92.9349C494.43 93.6641 494.104 94.7144 494.104 96.0859ZM510.081 103L505.706 89.1719H509.26L511.852 98.2344L514.234 89.1719H517.763L520.068 98.2344L522.711 89.1719H526.318L521.878 103H518.362L515.979 94.1068L513.635 103H510.081ZM536.266 98.599L539.911 99.2109C539.443 100.548 538.701 101.568 537.685 102.271C536.678 102.965 535.415 103.312 533.896 103.312C531.491 103.312 529.712 102.527 528.557 100.956C527.646 99.697 527.19 98.1085 527.19 96.1901C527.19 93.8984 527.789 92.1059 528.987 90.8125C530.185 89.5104 531.7 88.8594 533.531 88.8594C535.589 88.8594 537.212 89.5408 538.401 90.9036C539.59 92.2578 540.159 94.3368 540.107 97.1406H530.94C530.966 98.2257 531.261 99.072 531.826 99.6797C532.39 100.279 533.093 100.578 533.935 100.578C534.508 100.578 534.99 100.422 535.38 100.109C535.771 99.7969 536.066 99.2934 536.266 98.599ZM536.474 94.901C536.448 93.842 536.174 93.0391 535.654 92.4922C535.133 91.9366 534.499 91.6589 533.753 91.6589C532.954 91.6589 532.294 91.9497 531.773 92.5313C531.253 93.1128 530.997 93.9028 531.005 94.901H536.474ZM546.604 103H542.945V89.1719H546.344V91.138C546.925 90.2092 547.446 89.5972 547.906 89.3021C548.375 89.0069 548.905 88.8594 549.495 88.8594C550.328 88.8594 551.131 89.0894 551.904 89.5495L550.771 92.7396C550.155 92.3403 549.582 92.1406 549.052 92.1406C548.54 92.1406 548.106 92.2839 547.75 92.5703C547.394 92.8481 547.112 93.3559 546.904 94.0938C546.704 94.8316 546.604 96.3767 546.604 98.7292V103ZM561.5 98.599L565.146 99.2109C564.677 100.548 563.935 101.568 562.919 102.271C561.912 102.965 560.649 103.312 559.13 103.312C556.726 103.312 554.946 102.527 553.792 100.956C552.88 99.697 552.424 98.1085 552.424 96.1901C552.424 93.8984 553.023 92.1059 554.221 90.8125C555.419 89.5104 556.934 88.8594 558.766 88.8594C560.823 88.8594 562.446 89.5408 563.635 90.9036C564.825 92.2578 565.393 94.3368 565.341 97.1406H556.174C556.201 98.2257 556.496 99.072 557.06 99.6797C557.624 100.279 558.327 100.578 559.169 100.578C559.742 100.578 560.224 100.422 560.615 100.109C561.005 99.7969 561.3 99.2934 561.5 98.599ZM561.708 94.901C561.682 93.842 561.409 93.0391 560.888 92.4922C560.367 91.9366 559.734 91.6589 558.987 91.6589C558.188 91.6589 557.529 91.9497 557.008 92.5313C556.487 93.1128 556.231 93.9028 556.24 94.901H561.708ZM581.018 103H577.62V100.969C577.056 101.759 576.387 102.349 575.615 102.74C574.851 103.122 574.078 103.312 573.297 103.312C571.708 103.312 570.345 102.674 569.208 101.398C568.08 100.114 567.516 98.3255 567.516 96.0339C567.516 93.6901 568.067 91.9106 569.169 90.6953C570.272 89.4714 571.665 88.8594 573.349 88.8594C574.894 88.8594 576.231 89.5017 577.359 90.7865V83.9115H581.018V103ZM571.253 95.7865C571.253 97.2622 571.457 98.3299 571.865 98.9896C572.455 99.9444 573.28 100.422 574.339 100.422C575.181 100.422 575.897 100.066 576.487 99.3542C577.077 98.6337 577.372 97.5616 577.372 96.138C577.372 94.5495 577.086 93.408 576.513 92.7135C575.94 92.0104 575.207 91.6589 574.312 91.6589C573.444 91.6589 572.715 92.0061 572.125 92.7005C571.543 93.3863 571.253 94.4149 571.253 95.7865ZM592.099 83.9115H599.729C601.24 83.9115 602.364 83.9766 603.102 84.1068C603.848 84.2283 604.512 84.4887 605.094 84.888C605.684 85.2873 606.174 85.8212 606.565 86.4896C606.956 87.1493 607.151 87.8915 607.151 88.7161C607.151 89.6102 606.908 90.4306 606.422 91.1771C605.944 91.9236 605.293 92.4835 604.469 92.8568C605.632 93.1953 606.526 93.7726 607.151 94.5885C607.776 95.4045 608.089 96.3637 608.089 97.4661C608.089 98.3342 607.885 99.1806 607.477 100.005C607.077 100.821 606.526 101.477 605.823 101.971C605.128 102.457 604.269 102.757 603.245 102.87C602.602 102.939 601.053 102.983 598.596 103H592.099V83.9115ZM595.953 87.0885V91.5026H598.479C599.981 91.5026 600.914 91.4809 601.279 91.4375C601.938 91.3594 602.455 91.1337 602.828 90.7604C603.21 90.3785 603.401 89.8793 603.401 89.263C603.401 88.6727 603.236 88.1953 602.906 87.8307C602.585 87.4575 602.103 87.2318 601.461 87.1536C601.079 87.1102 599.981 87.0885 598.167 87.0885H595.953ZM595.953 94.6797V99.7839H599.521C600.91 99.7839 601.791 99.7448 602.164 99.6667C602.737 99.5625 603.201 99.3108 603.557 98.9115C603.922 98.5035 604.104 97.9609 604.104 97.2839C604.104 96.7109 603.965 96.2248 603.687 95.8255C603.41 95.4262 603.006 95.1354 602.477 94.9531C601.956 94.7708 600.819 94.6797 599.065 94.6797H595.953ZM609.599 89.1719H613.492L616.799 98.9896L620.029 89.1719H623.818L618.935 102.479L618.062 104.888C617.741 105.695 617.433 106.312 617.138 106.737C616.852 107.162 616.517 107.505 616.135 107.766C615.762 108.035 615.298 108.243 614.742 108.391C614.195 108.538 613.575 108.612 612.88 108.612C612.177 108.612 611.487 108.538 610.81 108.391L610.484 105.526C611.057 105.639 611.574 105.695 612.034 105.695C612.885 105.695 613.514 105.444 613.922 104.94C614.33 104.445 614.642 103.812 614.859 103.039L609.599 89.1719Z" fill="url(#paint3_linear_657_280)"/>
<path d="M473.5 51C473.5 50.4477 473.948 50 474.5 50H477.5C478.052 50 478.5 50.4477 478.5 51V58H473.5V51Z" fill="#727272"/>
<path d="M473.5 57H478.5V58H473.5V57Z" fill="url(#paint4_linear_657_280)"/>
<path d="M501.5 51C501.5 50.4477 501.948 50 502.5 50H505.5C506.052 50 506.5 50.4477 506.5 51V58H501.5V51Z" fill="#727272"/>
<path d="M501.5 57H506.5V58H501.5V57Z" fill="url(#paint5_linear_657_280)"/>
<path d="M529.5 51C529.5 50.4477 529.948 50 530.5 50H533.5C534.052 50 534.5 50.4477 534.5 51V58H529.5V51Z" fill="#727272"/>
<path d="M529.5 57H534.5V58H529.5V57Z" fill="url(#paint6_linear_657_280)"/>
<path d="M557.5 51C557.5 50.4477 557.948 50 558.5 50H561.5C562.052 50 562.5 50.4477 562.5 51V58H557.5V51Z" fill="#727272"/>
<path d="M557.5 57H562.5V58H557.5V57Z" fill="url(#paint7_linear_657_280)"/>
<path d="M585.5 51C585.5 50.4477 585.948 50 586.5 50H589.5C590.052 50 590.5 50.4477 590.5 51V58H585.5V51Z" fill="#727272"/>
<path d="M585.5 57H590.5V58H585.5V57Z" fill="url(#paint8_linear_657_280)"/>
<path d="M613.5 51C613.5 50.4477 613.948 50 614.5 50H617.5C618.052 50 618.5 50.4477 618.5 51V58H613.5V51Z" fill="#727272"/>
<path d="M613.5 57H618.5V58H613.5V57Z" fill="url(#paint9_linear_657_280)"/>
<path d="M473.5 139C473.5 139.552 473.948 140 474.5 140H477.5C478.052 140 478.5 139.552 478.5 139V132H473.5V139Z" fill="#727272"/>
<path d="M473.5 133H478.5V132H473.5V133Z" fill="url(#paint10_linear_657_280)"/>
<path d="M501.5 139C501.5 139.552 501.948 140 502.5 140H505.5C506.052 140 506.5 139.552 506.5 139V132H501.5V139Z" fill="#727272"/>
<path d="M501.5 133H506.5V132H501.5V133Z" fill="url(#paint11_linear_657_280)"/>
<path d="M529.5 139C529.5 139.552 529.948 140 530.5 140H533.5C534.052 140 534.5 139.552 534.5 139V132H529.5V139Z" fill="#727272"/>
<path d="M529.5 133H534.5V132H529.5V133Z" fill="url(#paint12_linear_657_280)"/>
<path d="M557.5 139C557.5 139.552 557.948 140 558.5 140H561.5C562.052 140 562.5 139.552 562.5 139V132H557.5V139Z" fill="#727272"/>
<path d="M557.5 133H562.5V132H557.5V133Z" fill="url(#paint13_linear_657_280)"/>
<path d="M585.5 139C585.5 139.552 585.948 140 586.5 140H589.5C590.052 140 590.5 139.552 590.5 139V132H585.5V139Z" fill="#727272"/>
<path d="M585.5 133H590.5V132H585.5V133Z" fill="url(#paint14_linear_657_280)"/>
<path d="M613.5 139C613.5 139.552 613.948 140 614.5 140H617.5C618.052 140 618.5 139.552 618.5 139V132H613.5V139Z" fill="#727272"/>
<path d="M613.5 133H618.5V132H613.5V133Z" fill="url(#paint15_linear_657_280)"/>
<path d="M440.5 80C439.948 80 439.5 80.4477 439.5 81L439.5 84C439.5 84.5523 439.948 85 440.5 85L447.5 85L447.5 80L440.5 80Z" fill="#727272"/>
<path d="M446.5 80L446.5 85L447.5 85L447.5 80L446.5 80Z" fill="url(#paint16_linear_657_280)"/>
<path d="M440.5 108C439.948 108 439.5 108.448 439.5 109L439.5 112C439.5 112.552 439.948 113 440.5 113L447.5 113L447.5 108L440.5 108Z" fill="#727272"/>
<path d="M446.5 108L446.5 113L447.5 113L447.5 108L446.5 108Z" fill="url(#paint17_linear_657_280)"/>
<path d="M654.5 80C655.052 80 655.5 80.4477 655.5 81L655.5 84C655.5 84.5523 655.052 85 654.5 85L647.5 85L647.5 80L654.5 80Z" fill="#727272"/>
<path d="M648.5 80L648.5 85L647.5 85L647.5 80L648.5 80Z" fill="url(#paint18_linear_657_280)"/>
<path d="M654.5 108C655.052 108 655.5 108.448 655.5 109L655.5 112C655.5 112.552 655.052 113 654.5 113L647.5 113L647.5 108L654.5 108Z" fill="#727272"/>
<path d="M648.5 108L648.5 113L647.5 113L647.5 108L648.5 108Z" fill="url(#paint19_linear_657_280)"/>
<path d="M476.5 138.5V151.5C476.5 155.918 472.918 159.5 468.5 159.5H107.5C103.082 159.5 99.5 163.082 99.5 167.5V244" stroke="#272727"/>
<circle cx="648.5" cy="181" r="1.5" fill="black" stroke="#272727"/>
<path d="M588.5 140V173.412C588.5 177.83 592.082 181.412 596.5 181.412H647.5" stroke="#272727"/>
<circle cx="663.5" cy="161" r="1.5" fill="black" stroke="#272727"/>
<path d="M616.5 140V153C616.5 157.418 620.082 161 624.5 161H662.5" stroke="#272727"/>
<path d="M655 111.5H736C740.418 111.5 744 115.082 744 119.5V207.5C744 211.918 740.418 215.5 736 215.5H633.5C629.082 215.5 625.5 219.082 625.5 223.5V246" stroke="#272727"/>
<path d="M655 82H959C963.418 82 967 85.5817 967 90V245.5" stroke="#272727"/>
<defs>
<radialGradient id="paint0_radial_657_280" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(287 191.25) scale(188.5 52.75)">
<stop offset="0.71" stopColor="#2AC6FF"/>
<stop offset="0.87" stopColor="#4C7383"/>
<stop offset="1" stopColor="#4D6B76" stopOpacity="0"/>
</radialGradient>
<radialGradient id="paint1_radial_657_280" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(304 178.5) scale(143.5 67.5)">
<stop stop-color="#2BC6FF"/>
<stop offset="0.855" stopColor="#2BC6FF"/>
<stop offset="1" stopColor="#272727"/>
</radialGradient>
<linearGradient id="paint2_linear_657_280" x1="547.5" y1="58" x2="547.5" y2="132" gradientUnits="userSpaceOnUse">
<stop stop-color="#313131"/>
<stop offset="0.595" stop-color="#232323"/>
</linearGradient>
<linearGradient id="paint3_linear_657_280" x1="624.5" y1="93.5" x2="471.5" y2="93.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.33" stop-color="#999999"/>
<stop offset="0.805" stop-color="#E1E1E1"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
<linearGradient id="paint4_linear_657_280" x1="476" y1="58.5" x2="476" y2="55" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint5_linear_657_280" x1="504" y1="58.5" x2="504" y2="55" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint6_linear_657_280" x1="532" y1="58.5" x2="532" y2="55" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint7_linear_657_280" x1="560" y1="58.5" x2="560" y2="55" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint8_linear_657_280" x1="588" y1="58.5" x2="588" y2="55" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint9_linear_657_280" x1="616" y1="58.5" x2="616" y2="55" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint10_linear_657_280" x1="476" y1="131.5" x2="476" y2="135" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint11_linear_657_280" x1="504" y1="131.5" x2="504" y2="135" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint12_linear_657_280" x1="532" y1="131.5" x2="532" y2="135" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint13_linear_657_280" x1="560" y1="131.5" x2="560" y2="135" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint14_linear_657_280" x1="588" y1="131.5" x2="588" y2="135" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint15_linear_657_280" x1="616" y1="131.5" x2="616" y2="135" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint16_linear_657_280" x1="448" y1="82.5" x2="444.5" y2="82.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint17_linear_657_280" x1="448" y1="110.5" x2="444.5" y2="110.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint18_linear_657_280" x1="647" y1="82.5" x2="650.5" y2="82.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="paint19_linear_657_280" x1="647" y1="110.5" x2="650.5" y2="110.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.845" stop-color="#737373"/>
</linearGradient>
<linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
  <stop offset="0%" stopColor="#FFC500" />
  <stop offset="50%" stopColor="#FFCE29" />
  <stop offset="100%" stopColor="#413D33" />
</linearGradient>

<linearGradient id="pinkGradient" x1="0%" y1="100%" x2="0%" y2="100%">
  <stop offset="0%" stopColor="#FF69B4" />
  <stop offset="100%" stopColor="#DC2F6D" />
</linearGradient>

<linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
  <stop offset="0%" stopColor="#2AC6FF" />
  <stop offset="100%" stopColor="#3C464E" />
</linearGradient>
</defs>
</svg>


    );
}


