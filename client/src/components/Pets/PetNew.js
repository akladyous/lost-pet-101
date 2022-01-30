
import React, {useState} from 'react';

export default function PetNew({setImagePreview}) {

    const [petData, setPetData] = useState({})
    const [imageFile, setImageFile] = useState(null)

    const setCurrentValue = (e) => {
        const currentVaue = {[e.currentTarget.name]: e.currentTarget.value}
        setPetData((petData) => ({
            ...petData,
            ...currentVaue
        }));
    }

    const loadImage = (e) => {
        console.log(e.currentTarget)
        var imgBlob = URL.createObjectURL(e.currentTarget.files[0]);
        setImageFile(e.currentTarget.files[0]);
        setImagePreview(imgBlob);
    }

    
    return (
        <div className="card m-2 bg-transparent">
            <div className="card-header"> 
            {/* style= {{ backgroundColor: "hsl(25,100%,50%)" }} */}
                <div className='row'>
                    <div className="container">
                        <form className=''>
                            <div className='row mb-1'>
                                <label htmlFor="pet_name" className="col-4 col-form-label fw-normal">Name</label>
                                <div className='col-8'>
                                    <input type="text" name="name" className="form-control" value={petData['name']} onChange={setCurrentValue}/>
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_species" className="col-4 col-form-label fw-normal">Species</label>
                                <div className='col-8'>
                                    <input type="text" name="species" className="form-control" value={petData['species']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_age" className="col-4 col-form-label fw-normal">Age</label>
                                <div className='col-8'>
                                    <input type="text" name="age" className="form-control" value={petData['age']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_size" className="col-4 col-form-label fw-normal">Size</label>
                                <div className='col-8'>
                                <input type="text" name="size" className="form-control" value={petData['size']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_description" className="col-4 col-form-label fw-normal">Description</label>
                                <div className='col-8'>
                                <input type="text" name="description" className="form-control" value={petData['description']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_breed" className="col-4 col-form-label fw-normal">Breed</label>
                                <div className='col-8'>
                                <input type="text" name="breed" className="form-control" value={petData['breed']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_gender" className="col-4 col-form-label fw-normal">Gender</label>
                                <div className='col-8'>
                                <input type="text" name="gender" className="form-control" value={petData['gender']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_color" className="col-4 col-form-label fw-normal">Color</label>
                                <div className='col-8'>
                                <input type="text" name="color" className="form-control" value={petData['color']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_microchip" className="col-4 col-form-label fw-normal">Microchip</label>
                                <div className='col-8'>
                                <input type="text" name="microchip" className="form-control" value={petData['microchip']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_height" className="col-4 col-form-label fw-normal">Height</label>
                                <div className='col-8'>
                                <input type="text" name="height" className="form-control" value={petData['height']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_weight" className="col-4 col-form-label fw-normal">Weight</label>
                                <div className='col-8'>
                                <input type="text" name="weight" className="form-control" value={petData['weight']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_coat" className="col-4 col-form-label fw-normal">Coat</label>
                                <div className='col-8'>
                                <input type="text" name="coat" className="form-control" value={petData['coat']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_collar" className="col-4 col-form-label fw-normal">Collar</label>
                                <div className='col-8'>
                                <input type="text" name="collar" className="form-control" value={petData['collar']} onChange={setCurrentValue} />
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <label htmlFor="pet_image" className="col-4 col-form-label fw-normal">Upload pet image</label>
                                <div className='col-8'>
                                <input type="file" accept='image/*' multiple={false} className="form-control" onChange={loadImage} />
                                </div>
                            </div>



                        </form>
                        {/* ------------------------------------------------------------------------------------ */}
                                


                                
                                
                                

                        {/* <div className="col-md-3">
                        </div>
                        <div className="col-md-9">
                        </div> */}
                        {/* ------------------------------------------------------------------------------------ */}
                    </div>
                        {/* <button onClick={console.log(petData)}>test</button> */}
                </div>
            </div>
        </div>
    );
}


