import React, {useState} from 'react';

export default function OnboardingData({children, onFinish}) {
    const [onBoardingData, setOnboardingDate] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = stepData => {
        const nextIndex = currentIndex + 1

        const updatedData = {
            ...onBoardingData,
            ...stepData
        }
        console.log(updatedData)

        if (nextIndex < children.length){
            setCurrentIndex(nextIndex)
        } else{
            onFinish(updatedData)
        }

        setOnboardingDate(updatedData)
    }
    const currentChild = React.Children.toArray(children)[currentIndex];

    if(React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {  goToNext })
    }

    return currentChild;
}
