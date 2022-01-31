import React, {useState, createContext} from 'react';

export const ListingFormContext = createContext()

export default function PostListingProvider({children}) {
    
    const [formTitles, setFormTitles] = useState([])
    const [listingData, setListingData] = useState(formData);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [petImage, setPetImage] = useState(null);

    const lastIndex = formTitles.length - 1

    const updateListingData = (data) => {
        setListingData(data)
    }

    const updateCurrentIndex = (index) => {
        setCurrentIndex(index)
    }

    const updatePetImage = (image) =>{
        setPetImage(image)
    }

    const nextStep = () => {
        if (currentIndex < lastIndex){
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prevStep = () => {
        if (currentIndex > 1){
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleChange = input => e => {
        const data = listingData[currentIndex]
        setListingData([...listingData, ])
    }


    return (
        <ListingFormContext.Provider value={{
            listingData, updateListingData,
            currentIndex, updateCurrentIndex,
            petImage, updatePetImage
        }}>
            {children}
        </ListingFormContext.Provider>
    )
}










const formData = {
    pet: {
        name: "",
        species: "",
        age: "",
        size: "",
        description: "",
        breed: "",
        gender: "",
        color: "",
        microchip: "",
        height: "",
        weight: "",
        coat: "",
        collar: "",
        image: "",
    },
    listingInfo: {
        listing_type: "",
        published_at: Date().toString(),
        date_lost_found: "",
        msg_from: "",
        description: "",
    },
    listingAddress: {
        address1: '',
        address2: '',
        city: '',
        zip_code: '',
        state: ''
    }
}
