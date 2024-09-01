export const SET_LOCATION='SET_LOCATION'      //action type
export const setcurrentLocations=(pickup,destination)=>({              //action creaters
    type:SET_LOCATION,
    payload:{pickup,destination},
});
