import * as React from 'react'

interface Props {
    className?: string
    width?: number | string
    height?: number | string
}

export const BurgerIcon = ({ className, width = 16, height = 20 }: Props) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 16 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0,0h1v20H0V0z M5,20h1V0H5V20z M10,20h1V0h-1V20z M15,0v20h1V0H15z" />
        </svg>
    )
}
