type Props = {
    lines: string[]
    withLastBreak?: boolean
}

export const TextWithBreaks = ({ lines, withLastBreak = false }: Props) => (
    <>
        {lines.map((line, i) => (
            <span key={i}>
        {line}
                {(withLastBreak || i !== lines.length - 1) && <br />}
        </span>
        ))}
    </>
)
