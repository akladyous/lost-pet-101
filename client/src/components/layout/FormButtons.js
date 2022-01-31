
import React from 'react';

export default function FormButtons({currentIndex, lastIndex, onNext, onPrev}) {
    return (
        <div className="container mt-2 px-1">
            <div className="row">
                <div className="col-2">
                    <div className='d-grid'>
                        <button
                            type="button"
                            className="btn w-100"
                            onClick={onNext}
                            disabled={currentIndex === 0}
                            style={{ backgroundColor: "hsl(25,100%,50%)" }}
                        >
                            previous
                        </button>
                    </div>
                </div>

                <div className="col-2">
                    <div className='d-grid'>
                        {
                            currentIndex < lastIndex
                            ?
                            <button
                                type="button"
                                className="btn w-100"
                                // disabled={currentIndex === steps.length -1}
                                disabled={currentIndex === lastIndex}
                                onClick={onPrev}
                                style={{ backgroundColor: "hsl(25,100%,50%)" }}
                            >
                                Next
                            </button>
                            :
                            <button
                                type="button"
                                className="btn w-100"
                                // disabled={currentIndex === steps.length -1}
                                disabled={currentIndex === lastIndex}
                                onClick={onNext}
                                style={{ backgroundColor: "hsl(25,100%,50%)" }}
                            >
                                Submit
                            </button>
                        }
                    </div>
                </div>

                <div className="col-6"></div>
            </div>
        </div>
    )
}
