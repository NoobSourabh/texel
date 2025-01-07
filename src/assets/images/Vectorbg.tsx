type VectorbgProps = {
    className?: string;  // Optional className prop
}

const Vectorbg = ({ className }: VectorbgProps) => {
    return (
        <svg className={className} width="687" height="785" viewBox="0 0 687 785" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.94" filter="url(#filter0_d_846_452)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M632.502 84.3689C695.444 120.065 781.367 124.95 822.32 182.152C863.243 239.313 839.507 311.423 842.5 377.69C845.212 437.729 847.834 495.329 839.117 554.011C828.019 628.717 855.784 736.645 784.385 768.898C708.361 803.239 621.828 697.35 534.424 691.646C463.123 686.994 406.399 750.771 335.371 739.598C258.277 727.472 187.729 682.283 131.874 628.327C71.5086 570.015 -3.69482 498.088 6.30058 421.717C16.8469 341.136 144.761 327.588 180.679 255.424C214.735 187.001 150.032 104.624 199.068 45.342C247.547 -13.2663 342.801 -0.657991 461.801 11.3421C542.342 21.7543 561.207 43.9357 632.502 84.3689Z" fill="url(#paint0_linear_846_452)" shape-rendering="crispEdges" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M632.502 84.3689C695.444 120.065 781.367 124.95 822.32 182.152C863.243 239.313 839.507 311.423 842.5 377.69C845.212 437.729 847.834 495.329 839.117 554.011C828.019 628.717 855.784 736.645 784.385 768.898C708.361 803.239 621.828 697.35 534.424 691.646C463.123 686.994 406.399 750.771 335.371 739.598C258.277 727.472 187.729 682.283 131.874 628.327C71.5086 570.015 -3.69482 498.088 6.30058 421.717C16.8469 341.136 144.761 327.588 180.679 255.424C214.735 187.001 150.032 104.624 199.068 45.342C247.547 -13.2663 342.801 -0.657991 461.801 11.3421C542.342 21.7543 561.207 43.9357 632.502 84.3689Z" stroke="black" shape-rendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_d_846_452" x="0.899414" y="0.720703" width="850.265" height="783.515" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_846_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_846_452" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_846_452" x1="-269.448" y1="57.7155" x2="49.4143" y2="1108.79" gradientUnits="userSpaceOnUse">
                    <stop offset="0.141056" stop-color="#E25544" />
                    <stop offset="0.34177" stop-color="#C94753" stop-opacity="0.97" />
                    <stop offset="1" stop-color="#620C90" stop-opacity="0.93" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default Vectorbg