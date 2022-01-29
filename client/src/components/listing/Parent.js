import React, {useState} from 'react';
import ControlledOnboardingData from './ControlledOnBoardingData.js';

const StepOne = ({goToNext})=>(
    <div>
        <h2>step one</h2>
        <br />
        <button onClick={()=> goToNext({name: "user 1"})}>next</button>
    </div>
)


const StepTwo = ({goToNext})=>(
    <div>
        <h2>step two</h2>
        <br />
        <button onClick={()=> goToNext({age: "30"})}>next</button>
    </div>
)

const StepThree = ({goToNext})=>(
    <div>
        <h2>step three</h2>
        <br />
        <button onClick={()=> goToNext({eyeColor: "green"})}>next</button>
    </div>
)


export default function Parent() {
    const [onBoardingData, setOnboardingDate] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)

    const onNext = stepData => {
        setOnboardingDate({...onBoardingData, ...stepData})
        setCurrentIndex(currentIndex + 1)
    }

    return (
        <div>
            <div>
                <h2>Test</h2>
                <br />

            </div>

            <ControlledOnboardingData
                currentIndex={currentIndex}
                onNext={onNext}
            >
                <StepOne />
                <StepTwo />
                <StepThree />
            </ControlledOnboardingData>
        </div>
    )
}
