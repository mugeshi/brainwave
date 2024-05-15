import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Define classes based on props
  const classes = `button relative inline-flex items-center h-11 transition-colors hover:text-color-1 ${
    px ? px : "px-7" // Use px if provided, otherwise use default "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className ? className : ""}`;

  // Define span classes
  const spanClasses = "relative z-10";

  // Render button with calculated classes
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)} {/* Assuming ButtonSvg accepts white prop */}
    </button>
  );

  // Render link with calculated classes
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)} {/* Assuming ButtonSvg accepts white prop */}
    </a>
  );

   // Return either button or link based on href prop
  return href ? renderLink() : renderButton();
};

export default Button;
