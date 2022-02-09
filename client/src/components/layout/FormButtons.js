import React, {useContext} from 'react';
import { userContext } from "../user/UserProvider.js";

export default function FormButtons({currentIndex, lastIndex, prevStep, nextStep}) {
    const { userState } = useContext(userContext);

    return (
        <div className="container mt-2 px-1 multi-step-buttons">
            <div className="row">
                <div className="col-2">
                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn w-100"
                            onClick={prevStep}
                            disabled={currentIndex === 0}
                            style={{ backgroundColor: "var(--orange)" }}
                        >
                            Previous
                        </button>
                    </div>
                </div>

                <div className="col-2">
                    <div className="d-grid">
                        <button type="button" className="btn w-100"
                            // disabled={currentIndex === steps.length -1}
                            // disabled={currentIndex === lastIndex}
                            disabled={!userState}
                            onClick={nextStep}
                            style={{
                                backgroundColor: "hsl(25,100%,50%)",
                            }}
                        >
                            {lastIndex - currentIndex === 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>

                <div className="col-6"></div>
            </div>
        </div>
    );
}
