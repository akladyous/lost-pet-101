export default function TestimonialsMapper(props) {

    const { itemComponent: ItemComponent, data } = props || {};

    return data ? 
        data.map((item, index) => (
            <ItemComponent key={item.id} testimonial={item} index={index} />
        ))
        : null;
}
