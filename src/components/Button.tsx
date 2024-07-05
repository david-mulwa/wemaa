import * as React from 'react'
interface ButtonProps{
    className?:string;
    href?:string;
    onClick?:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?:React.ReactNode;
    type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({className='',
    href='', 
    onClick, 
    children,
    type="button",
}) => {
  const classes=`button relative inline-flex   transition-colors   ${className||''}`;
  const spanClassses="relative z-10 "
  const renderButton=()=>(
    <button className={classes} onClick={onClick} type={type}>
        <span className={spanClassses}>{children}</span>
    </button>
  );
  const renderLink = () =>(
    <a href={href} className={classes}>
      <span className={spanClassses}>{children}</span>
    </a>
  )
  return href
   ? renderLink(): renderButton();
}
export default Button