import "../styles/Button.css";

const Button = ({ title }) => {
  return <button className={`button py-2 px-6 text-white text-sm sm:text-base font2 w-fit`}>{title}</button>;
};

export default Button;
