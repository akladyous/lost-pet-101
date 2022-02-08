export default function SlideWrapper(props) {
    const { itemComponent: ItemComponent, data } = props || {};

    return data
        ? data.map((item, index) => (
            <ItemComponent key={index} {...ItemComponent.props} listing={item} index={index} />
        ))
        : null;
}
