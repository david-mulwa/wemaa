import * as React from 'react'


interface ButtonProps{
    className?:string;
    href?:string;
    onClick?:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?:React.ReactNode;
}


const Button: React.FC<ButtonProps> = ({className='',
    href='', 
    onClick, 
    children
}) => {

  const classes=`button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1  text-n-1 ${className||''}`;

  const spanClassses="relative z-10 "


  const renderButton=()=>(
    <button className={classes} onClick={onClick}>
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