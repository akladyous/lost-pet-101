import TestimonialsAside from "./TestimonialsAside.js"
import TestimonialsMapper from "./TestimonialsMapper.js"
import TestiminialsCard from "./TestiminialsCard.js"

export default function Testimonials(props) {

    const { data } = props || {}

    return (
        <div className="container mt-4" id='testimonials-area'>
            <div className="row mx-4">
                <div className="col-9">
                    <TestimonialsMapper itemComponent={TestiminialsCard} data={data} />
                </div>
                
                <div className="col-3 d-flex mt-3 flex-column">
                    <TestimonialsAside />
                </div>
            </div>
        </div> 
        
    )
}
