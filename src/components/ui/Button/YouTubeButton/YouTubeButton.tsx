// import * as React from 'react'
//
// interface Props {
//     className?: string
//     width?: number | string
//     height?: number | string
//     onClick?: () => void
// }
//
// export const YouTubePlayButton = ({
//                                       className,
//                                       width = 68,
//                                       height = 48,
//                                       onClick
//                                   }: Props) => {
//     return (
//         <button
//             onClick={onClick}
//             style={{
//                 background: 'none',
//                 border: 'none',
//                 padding: 0,
//                 cursor: 'pointer',
//                 zIndex: '1000'
//             }}
//         >
//             <svg
//                 className={className}
//                 width={width}
//                 height={height}
//                 viewBox="0 0 68 48"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path
//                     className="ytp-large-play-button-bg"
//                     d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
//                     fill="red"
//                 />
//                 <path
//                     d="M 45,24 27,14 27,34"
//                     fill="#fff"
//                 />
//             </svg>
//         </button>
//     )
// }


import * as React from 'react'

interface Props {
    className?: string
    width?: number | string
    height?: number | string
    onClick?: () => void
}

export const YouTubePlayButton = ({
                                      className,
                                      width = 68,
                                      height = 48,
                                      onClick
                                  }: Props) => {
    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                zIndex: '1000',
            }}
        >
            <svg
                className={className}
                width={width}
                height={height}
                viewBox="0 0 68 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="ytp-large-play-button-bg"
                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55
             C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26
             c0.78,2.93,2.49,5.41,5.42,6.19C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55
             c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                    fill={isHovered ? 'red' : 'rgba(0,0,0,0.6)'}
                    style={{ transition: 'fill 0.3s ease' }}
                />
                <path d="M45,24 27,14 27,34" fill="#fff" />
            </svg>
        </button>
    )
}
