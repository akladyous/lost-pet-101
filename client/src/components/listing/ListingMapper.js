
export default function PetMapper(props) {
    
    const {itemComponent: ItemComponent, listingInfo} = props || {}

return listingInfo ? (
        listingInfo.map( (listing) => (
            <ItemComponent key={listing.id} listing={listing}/>
        ))
    )
    : null;

};