type Props = {
    className?: string
    width?: number | string
    height?: number | string
}

export const InstagramFilledIcon = ({className, width = 20, height = 20}: Props) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="currentColor"
        >
            <path d="M11.4460449,0H4.553833C2.0427246,0,0,2.0429688,0,4.5539551v6.892334C0,13.9575195,2.0427246,16,4.553833,16h6.8922119C13.9570923,16,16,13.9575195,16,11.4462891v-6.892334C16,2.0429688,13.9570923,0,11.4460449,0z M8,12c-2.2055664,0-4-1.7941895-4-4c0-2.2055664,1.7944336-4,4-4s4,1.7944336,4,4C12,10.2058105,10.2055664,12,8,12z M12.500061,5C11.6716309,5,11,4.3286133,11,3.5S11.6716309,2,12.500061,2C13.3284302,2,14,2.6713867,14,3.5S13.3284302,5,12.500061,5z"/>
        </svg>
    )
}
