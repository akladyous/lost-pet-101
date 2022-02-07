
import React from 'react';

export default function MultiStepForm(props) {
    const {
        children, 
        currentIndex,  
        lastIndex, 
        nextStep, 
        prevStep,
        formData,
        updateFormData,
        formTitles
    } = props || {}
    
    const currentChild = React.Children.toArray(children)[currentIndex]
    
    if (React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {
            currentIndex,
            lastIndex,
            nextStep,
            prevStep,
            formData,
            updateFormData,
            formTitles
        })
    } else{
        return null
    }
}
