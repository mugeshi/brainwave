

const Button = ({ children, className, href }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Button;
