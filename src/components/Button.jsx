import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({ className, href, onClick, children, px, white }) => {
  // Define classes based on props
  const classes = `button relative inline-flex items-center h-11 transition-colors hover:text-color-1 ${
    px ? px : "px-7" // Use px if provided, otherwise use default "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className ? className : ""}`;

  // Render button with calculated classes
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)} {/* ButtonSvg accepts white prop */}
    </button>
  );

  return renderButton();
};

export default Button;
