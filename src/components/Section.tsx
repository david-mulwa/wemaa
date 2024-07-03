import { Children } from "react"


const Section = ({
    className,
    id,
    customPaddings,
    children
}:{
  className:string;
  id:any;
  customPaddings:string;
  children:any;
}) => {
  return (
    <div id={id} 
    className={`relative top-[4rem] ${customPaddings||`px-10 lg:px-16 xl:px-20  py-10 lg:py-16 xl:py-20 ${className||''}`}`}>

        {children}
            
    </div>
  )
}

export default Section