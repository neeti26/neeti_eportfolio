export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #040e1f 0%, #061628 40%, #0b2050 70%, #0e2f80 90%, #1245b0 100%)',
        }}
      />

      {/* Circuit SVG — traces ONLY on the right half, away from text */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-bright" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dot-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* All traces start from x=580 (right half only) */}

        {/* Dim base traces */}
        <g stroke="rgba(70,130,255,0.18)" strokeWidth="1" fill="none">
          <polyline points="580,80  640,80  640,140  720,140  720,100  800,100" />
          <polyline points="600,180 660,180 660,240  740,240  740,200  820,200" />
          <polyline points="580,280 650,280 650,330  730,330  730,290  810,290" />
          <polyline points="620,380 680,380 680,430  760,430" />
          <polyline points="590,460 660,460 660,510  740,510  740,470  820,470" />
          <polyline points="610,560 670,560 670,610  750,610" />
          <polyline points="700,40  700,90  770,90  770,150  850,150" />
          <polyline points="780,60  780,110 850,110 850,170  930,170" />
          <polyline points="860,40  860,100 930,100 930,160 1010,160" />
          <polyline points="950,80  950,140 1020,140 1020,200 1100,200" />
          <polyline points="1050,120 1050,180 1120,180 1120,240 1200,240" />
          <polyline points="900,300 960,300 960,360 1040,360 1040,320 1120,320" />
          <polyline points="950,420 1010,420 1010,470 1090,470" />
          <polyline points="1000,520 1060,520 1060,570 1140,570 1140,530 1200,530" />
        </g>

        {/* Mid brightness traces */}
        <g stroke="rgba(90,155,255,0.30)" strokeWidth="1.2" fill="none">
          <polyline points="580,110 650,110 650,165 730,165 730,125 810,125" />
          <polyline points="600,210 665,210 665,265 745,265 745,225 825,225" />
          <polyline points="580,310 655,310 655,355 735,355 735,315 815,315" />
          <polyline points="620,410 685,410 685,455 765,455" />
          <polyline points="590,490 660,490 660,535 740,535 740,495 820,495" />
          <polyline points="720,55  720,105 790,105 790,165 870,165" />
          <polyline points="800,75  800,125 870,125 870,185 950,185" />
          <polyline points="880,55  880,115 950,115 950,175 1030,175" />
          <polyline points="970,95  970,155 1040,155 1040,215 1120,215" />
          <polyline points="920,315 980,315 980,375 1060,375 1060,335 1140,335" />
          <polyline points="970,435 1030,435 1030,485 1110,485" />
        </g>

        {/* Glowing highlighted traces */}
        <g stroke="rgba(130,185,255,0.65)" strokeWidth="1.5" fill="none" filter="url(#glow-soft)">
          <polyline points="580,130 660,130 660,185 740,185 740,145 820,145" />
          <polyline points="600,230 670,230 670,285 750,285 750,245 830,245" />
          <polyline points="580,330 660,330 660,375 740,375 740,335 820,335" />
          <polyline points="740,70  740,120 810,120 810,180 890,180" />
          <polyline points="820,90  820,140 890,140 890,200 970,200" />
          <polyline points="940,330 1000,330 1000,390 1080,390 1080,350 1160,350" />
        </g>

        {/* Bright glow traces */}
        <g stroke="rgba(190,225,255,0.80)" strokeWidth="1.8" fill="none" filter="url(#glow-bright)">
          <polyline points="580,150 665,150 665,200 745,200" />
          <polyline points="600,250 675,250 675,300 755,300" />
          <polyline points="755,85  755,135 825,135 825,195 905,195" />
          <polyline points="955,345 1015,345 1015,400 1095,400" />
        </g>

        {/* Dim nodes */}
        <g fill="rgba(110,175,255,0.55)" filter="url(#dot-glow)">
          <circle cx="640" cy="80"  r="2.5" /><circle cx="640" cy="140" r="2.5" />
          <circle cx="720" cy="140" r="2"   /><circle cx="720" cy="100" r="2"   />
          <circle cx="660" cy="180" r="2.5" /><circle cx="660" cy="240" r="2.5" />
          <circle cx="740" cy="240" r="2"   /><circle cx="740" cy="200" r="2"   />
          <circle cx="650" cy="280" r="2.5" /><circle cx="650" cy="330" r="2.5" />
          <circle cx="730" cy="330" r="2"   /><circle cx="730" cy="290" r="2"   />
          <circle cx="680" cy="380" r="2.5" /><circle cx="680" cy="430" r="2.5" />
          <circle cx="660" cy="460" r="2.5" /><circle cx="660" cy="510" r="2.5" />
          <circle cx="740" cy="510" r="2"   /><circle cx="740" cy="470" r="2"   />
          <circle cx="700" cy="90"  r="2.5" /><circle cx="770" cy="90"  r="2.5" />
          <circle cx="770" cy="150" r="2.5" /><circle cx="780" cy="110" r="2.5" />
          <circle cx="850" cy="110" r="2.5" /><circle cx="850" cy="170" r="2.5" />
          <circle cx="860" cy="100" r="2.5" /><circle cx="930" cy="100" r="2.5" />
          <circle cx="930" cy="160" r="2.5" /><circle cx="950" cy="140" r="2.5" />
          <circle cx="1020" cy="140" r="2.5" /><circle cx="1020" cy="200" r="2.5" />
          <circle cx="960" cy="300" r="2.5" /><circle cx="960" cy="360" r="2.5" />
          <circle cx="1040" cy="360" r="2"  /><circle cx="1040" cy="320" r="2"  />
          <circle cx="1010" cy="420" r="2.5" /><circle cx="1010" cy="470" r="2.5" />
          <circle cx="1060" cy="520" r="2.5" /><circle cx="1060" cy="570" r="2.5" />
          <circle cx="1140" cy="570" r="2"  /><circle cx="1140" cy="530" r="2"  />
        </g>

        {/* Bright nodes */}
        <g fill="rgba(190,225,255,0.90)" filter="url(#dot-glow)">
          <circle cx="660" cy="130" r="3"   /><circle cx="660" cy="185" r="3"   />
          <circle cx="740" cy="185" r="2.5" /><circle cx="740" cy="145" r="2.5" />
          <circle cx="670" cy="230" r="3"   /><circle cx="670" cy="285" r="3"   />
          <circle cx="750" cy="285" r="2.5" /><circle cx="750" cy="245" r="2.5" />
          <circle cx="660" cy="330" r="3"   /><circle cx="660" cy="375" r="3"   />
          <circle cx="740" cy="375" r="2.5" /><circle cx="740" cy="335" r="2.5" />
          <circle cx="755" cy="135" r="3"   /><circle cx="825" cy="135" r="3"   />
          <circle cx="825" cy="195" r="2.5" /><circle cx="820" cy="140" r="3"   />
          <circle cx="890" cy="140" r="3"   /><circle cx="890" cy="200" r="2.5" />
          <circle cx="1015" cy="345" r="3"  /><circle cx="1015" cy="400" r="3"  />
          <circle cx="1095" cy="400" r="2.5" />
        </g>
      </svg>

      {/* Strong dark overlay on LEFT side — makes text perfectly readable */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(4,14,31,0.92) 0%, rgba(4,14,31,0.85) 30%, rgba(4,14,31,0.50) 55%, rgba(4,14,31,0.10) 75%, transparent 100%)',
        }}
      />
    </div>
  );
}
