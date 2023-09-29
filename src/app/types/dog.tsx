import Owner from "./owner";
interface Dog{
    name: string;
    sex: string;
    breed: string;
    img: string;
    present: boolean;
    age: number;
    chipNumber: string;
    owner: Owner;
}
export default Dog;