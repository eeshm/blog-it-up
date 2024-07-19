
    import React from "react";

    export default function Button({
        children,
        type = "button",
        bgColor = "bg-blue-600",
        textColor = "text-white",
        className = "",
        ...props    // we used this prop and spread it using (...) operator because if user
        //  want to add some additional properties  to his button he can add and we
        //   also added spreaded out ...prop in button jsx down 
    }) {
        return (
            <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
                {children}
            </button>
        );
    }