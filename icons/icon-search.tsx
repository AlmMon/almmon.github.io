const IconSearch = (): JSX.Element => (
    <svg
        width="40"
        height="39"
        viewBox="0 0 40 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <mask
            id="a"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="-1"
            width="40"
            height="40"
        >
            <path d="M39.811-.21H.932v38.736h38.88V-.21Z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
            <mask
                id="b"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="-1"
                width="40"
                height="40"
            >
                <path d="M39.811-.21H.932v38.736h38.88V-.21Z" fill="#fff" />
            </mask>
            <g mask="url(#b)">
                <mask
                    id="c"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="-1"
                    width="40"
                    height="40"
                >
                    <path d="M39.811-.21H.932v38.736h38.88V-.21Z" fill="#fff" />
                </mask>
                <g mask="url(#c)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.465 24.426c1.52-1.995 2.402-4.47 2.402-7.184 0-6.705-5.287-11.974-12.017-11.974-6.73 0-12.018 5.269-12.018 11.974S12.12 29.216 18.85 29.216c2.322 0 4.486-.639 6.248-1.756l4.968 4.949a2.28 2.28 0 0 0 3.206 0 2.259 2.259 0 0 0 0-3.193l-4.807-4.79ZM9.236 17.242c0-5.348 4.245-9.579 9.614-9.579 5.367 0 9.614 4.23 9.614 9.58 0 5.347-4.247 9.578-9.614 9.578-5.369 0-9.614-4.23-9.614-9.579Zm9.614-6.386c-3.687 0-6.49 2.794-6.41 6.386 0 .639.562 1.198 1.202 1.198.64 0 1.202-.56 1.202-1.198 0-2.235 1.762-3.991 4.006-3.991.64 0 1.2-.559 1.2-1.197 0-.639-.56-1.198-1.2-1.198Z"
                        fill="currentColor"
                    />
                </g>
            </g>
        </g>
    </svg>
);

export default IconSearch;
