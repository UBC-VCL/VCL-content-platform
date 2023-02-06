import { Button } from "@mui/material";
import classNames from "classnames";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  [rest: string]: any;
}

const GenericButton: React.FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;

  const classes = classNames("button-root", className);

  return (
    <Button {...rest} className={classes}>
      {children}
    </Button>
  );
};

export default GenericButton;
