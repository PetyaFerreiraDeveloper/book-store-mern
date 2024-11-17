import PropTypes from "prop-types"

const Button = ({ title, icon, className }) => {
  return (
    <button
      className={`bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-200 flex items-center gap-5 justify-between rounded-lg px-4 py-2 ${className}`}
    >
      {icon && icon}
      <span>{title}</span>
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  className: PropTypes.string,
}

export default Button
