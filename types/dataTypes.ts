export interface CaravanType {
    "location": string,
    "instantBookable": boolean,
    "name": string,
    "passengersCapacity": number,
    "sleepCapacity": number,
    "price": number,
    "toilet": boolean,
    "shower": boolean,
    "vehicleType": string,
    "pictures"?: string[],
    "id"?: string
}

export interface CaravansType {
    "count": number,
    "items": CaravanType[]
}
