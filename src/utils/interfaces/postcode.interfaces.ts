export interface PostcodeResponse<T> {
    status: number;
    result: T;
}

export interface PostcodeDetails {
    postcode: string;
    admin_county: string;
    region: string;
    country: string;
    admin_ward: string;
    ced: string;
    parliamentary_constituency: string;
    longitude: number;
    latitude: number;
    date_of_introduction: string;
    quality: number;
}