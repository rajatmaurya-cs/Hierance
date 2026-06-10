type ButtonProps = {
  extraClasses?: string;
  text: string;
};

const Button = ({ extraClasses = "", text }: ButtonProps) => {
  return (
    <div className={`w-full cursor-pointer ${extraClasses}`}>
      {text}
    </div>
  );
};

export default Button;
