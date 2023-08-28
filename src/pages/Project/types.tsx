export interface SlideShowOBJ {
    img?: string;
    title?: string;
    description: string;
    cardType: string;
    name?: string; // only if the card is of type 'testimony'
    position?: string; // only if the card is of type 'testimony'
}