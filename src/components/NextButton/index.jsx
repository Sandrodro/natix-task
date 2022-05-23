import styles from "./styles.module.css";
import VARIANTS from "../../config/buttonVariants";

function NextButton({ variant, onClickFn }) {
  return (
    <button onClick={onClickFn}>
      {variant == VARIANTS.NEXT && "NEXT"}{" "}
      {variant == VARIANTS.PREVIOUS && "PREVIOUS"}
    </button>
  );
}

export default NextButton;
