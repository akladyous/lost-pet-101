import React from 'react';

export default function MultiStepResources({children, currentIndex, onNext, onFinish}) {
    const goToNext = stepData =>{
        onNext(stepData)
    }

    const currentChild = React.Children.toArray(children)[currentIndex]
    
    if (React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {...currentChild.props, goToNext})
    } else{
        return null
    }
    return currentChild;
}

