import Owner from "./owner";
interface Dog{
    name: String;
    sex: String;
    breed: String;
    img: string;
    present: boolean;
    age: Number;
    chipNumber: string;
    owner: Owner;
}
export default Dog;