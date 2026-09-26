import { cn } from 'cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: 'primary' | 'secondary'
	className?: string
	children?: React.ReactNode
}
const Button = ({
	color,
	className,
	children,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={cn(
				'px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300',
				color === 'primary' && 'bg-primary-dark text-white hover:bg-primary-dark/80',
				color === 'secondary' && 'bg-[#f9ebe7] text-neutral hover:bg-[#f9ebe7]/80',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
