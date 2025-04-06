interface  adoptionForm{
    _id?:string; // Use _id instead of id to match MongoDB
fullname: string;
email: string;
address: string;
contact: number|string;
preferredPetType: string;
homeType: string;
availability: string;
experience: string;
}
export default adoptionForm;