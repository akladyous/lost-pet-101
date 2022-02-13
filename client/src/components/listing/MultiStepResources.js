import React from 'react';

export default function MultiStepResources({children, currentIndex, onNext, onPrev, onFinish}) {
    const goToNext = stepData =>{
        onNext(stepData)
    }

    const goToPrev = stepData =>{
        onPrev(stepData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex]
    
    if (React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {goToNext, goToPrev})
    } else{
        return null
    }
    // return currentChild;
}
