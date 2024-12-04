import s from './Logo.module.css'

export const Logo = () => {
    return (
        <div className={s.headerLogo}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="70" height="70" viewBox="0 0 256.000000 256.000000"
                 preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                   fill="#324A5E" stroke="none">
                    <path d="M1175 2306 c-129 -60 -175 -221 -98 -344 l31 -50 -62 -17 c-284 -80
-503 -303 -588 -600 -29 -104 -32 -324 -5 -421 9 -34 17 -63 17 -65 0 -2 -23
-2 -52 0 -69 4 -121 -13 -170 -57 -111 -100 -117 -244 -13 -347 127 -128 320
-88 391 81 28 67 21 134 -24 227 -69 141 -87 214 -87 357 0 132 10 191 52 298
l25 62 32 -19 c17 -11 31 -24 31 -28 -1 -4 -13 -46 -29 -93 -32 -100 -47 -259
-26 -285 20 -25 43 -18 154 46 65 37 112 58 123 55 10 -3 66 -90 125 -192 85
-149 105 -191 97 -205 -5 -10 -42 -37 -82 -60 -116 -67 -147 -88 -147 -104 0
-42 144 -116 278 -142 l92 -18 0 -37 c0 -35 -2 -38 -27 -38 -45 0 -185 37
-248 65 -32 14 -84 43 -117 66 -63 43 -92 45 -104 6 -8 -25 28 -59 112 -107
318 -184 732 -135 1005 117 l59 55 11 -28 c57 -153 274 -203 389 -91 97 95
105 238 18 333 -59 64 -113 87 -197 82 -82 -4 -135 -35 -184 -105 -118 -171
-207 -253 -340 -317 -72 -35 -217 -76 -269 -76 -26 0 -28 3 -28 38 l0 37 92
18 c134 26 278 100 278 142 0 16 -31 37 -147 104 -40 23 -77 50 -82 60 -8 14
12 56 97 205 59 102 115 189 125 192 11 3 58 -18 123 -55 111 -64 134 -71 154
-46 21 26 6 185 -26 285 -16 47 -28 89 -29 93 0 4 14 17 31 28 l32 19 25 -63
c41 -102 60 -217 55 -324 -6 -100 1 -117 43 -111 16 2 25 13 32 38 14 54 1
245 -23 330 -59 212 -201 397 -390 510 -116 70 -160 73 -160 13 0 -19 9 -28
45 -43 62 -27 147 -82 202 -133 50 -45 123 -133 123 -148 0 -5 -14 -16 -31
-25 -32 -16 -32 -16 -57 17 -102 135 -284 250 -306 193 -3 -9 -6 -71 -6 -138
0 -82 -4 -126 -12 -134 -17 -17 -439 -17 -456 0 -8 8 -12 52 -12 134 0 67 -3
129 -6 138 -22 57 -204 -58 -306 -193 -25 -33 -25 -33 -57 -17 -17 9 -31 20
-31 25 0 35 146 179 238 235 113 69 221 101 382 115 84 7 107 13 147 37 124
77 150 253 55 366 -38 45 -115 78 -182 78 -37 0 -72 -8 -105 -24z m185 -76
c108 -55 105 -227 -5 -280 -112 -54 -235 20 -235 142 0 122 128 195 240 138z
m-398 -740 c3 -97 4 -100 36 -132 l32 -33 250 0 250 0 32 33 c32 32 33 35 36
132 2 60 8 100 14 100 6 0 48 -37 93 -82 61 -62 91 -102 119 -158 35 -72 77
-232 64 -245 -4 -4 -38 12 -77 35 -150 89 -172 76 -323 -187 -147 -257 -148
-277 -3 -363 41 -24 75 -47 75 -51 0 -10 -74 -38 -144 -54 -70 -17 -181 -19
-252 -6 -59 11 -164 49 -164 59 0 4 34 28 75 52 145 86 144 106 -3 363 -151
263 -173 276 -323 187 -39 -23 -73 -39 -77 -35 -13 13 29 173 64 245 28 56 58
96 119 158 45 45 87 82 93 82 6 0 12 -40 14 -100z m-471 -784 c45 -31 69 -80
69 -143 0 -86 -70 -153 -161 -153 -90 0 -165 87 -156 179 12 116 152 182 248
117z m1749 2 c57 -39 74 -72 75 -138 0 -63 -16 -95 -67 -133 -37 -28 -116 -34
-162 -12 -54 26 -80 68 -84 140 -3 50 0 66 20 95 47 69 152 92 218 48z"/>
                </g>
            </svg>
            <div>Unite people</div>
        </div>
    )
}