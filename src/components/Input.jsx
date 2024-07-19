import React, {useId} from 'react'



// forwardRef ->documentaion uses:
// Exposing a DOM node to the parent component
// Forwarding a ref through multiple components

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}  //ref is used with forwardRed 
           //we used prop using spread operator if user passes any other properties.
           //passed id to match the id of label id {htmlFor} and input value
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input