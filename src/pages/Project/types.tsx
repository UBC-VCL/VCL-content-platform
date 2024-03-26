export interface SlideShowOBJ {
    img?: string;
    title?: string;
    description: string;
    cardType: string;
    name?: string; // only if the card is of type 'testimony'
    position?: string; // only if the card is of type 'testimony'
}

interface NameInfo {
    firstname: string;
    lastname: string;
}

interface ContactInfo {
    phoneNumber?: string;
    linkedIn?: string;
    email?: string;
}

export interface Member {
    _id: string;
    name: NameInfo;
    project: string;
    position: string;
    contact?: ContactInfo;
    blurb?: string;
    isAlumni: boolean;
}