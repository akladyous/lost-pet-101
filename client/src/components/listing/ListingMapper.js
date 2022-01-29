
export default function PetMapper(props) {
// (typeof resourceData === "object" && Object.keys(resourceData).length !== 0)
{/* <ItemComponent  key={pet.id} pet={pet} /> */}
    
    const {itemComponent: ItemComponent, listingInfo} = props || {}
    // console.log("ListingMapper::listingInsto : ", listingInfo)

return listingInfo ? (
        listingInfo.map( (listing) => (
            <ItemComponent key={listing.id} listing={listing}/>
        ))
    )
    : null;

};