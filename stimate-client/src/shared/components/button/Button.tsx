type ButtonProps = {
  text: string;
  className?: string;
  isPressed: boolean;
} & React.PropsWithChildren<React.ComponentPropsWithoutRef<"button">>;

const Button: React.FC<ButtonProps> = ({
  text,
  children,
  className,
  isPressed = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={
        className ||
        "w-full max-w-36 h-10 bg-blue-900 rounded-sm text-white font-medium hover:bg-blue-700"
      }
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
