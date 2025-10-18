import s from './CloseButton.module.css'

type Props = {
    onClick: () => void
}

export const CloseButton = ({ onClick }: Props) => {
    return (
        <button
            className={s.closeButton}
            onClick={onClick}
            aria-label="Закрыть"
        >
            Закрыть
        </button>
    )
}