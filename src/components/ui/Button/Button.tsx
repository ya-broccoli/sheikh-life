import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary'; // можно расширять
}

export default function Button({
                                   children,
                                   onClick,
                                   type = 'button',
                                   variant = 'primary'
                               }: ButtonProps) {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}