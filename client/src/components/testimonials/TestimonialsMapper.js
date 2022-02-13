export default function TestimonialsMapper(props) {

    const { itemComponent: ItemComponent, data } = props || {};

    return data ? 
        data.map((item) => (
            <ItemComponent key={item.id} testimonial={item} />
        ))
        : null;
}
