import React from 'react'

export default function ControlledOnboardingData({children, onFinish, currentIndex, onNext}) {
    const goToNext = stepData => {
        onNext(stepData)
    }
    debugger
    const currentChild = React.Children.toArray(children)[currentIndex];
    if(React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {  goToNext })
    }

    return currentChild;
}