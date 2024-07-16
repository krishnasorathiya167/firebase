import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "./Confige";


export const getAllData = async () => {
    const allItems = await getDocs(collection(firestore, "product"));
    //   console.log(allItems.docs);
    return allItems.docs.map((doc) => doc.data());
};


export let addItems = async (data) => {
    return await setDoc(doc(firestore, "product", `${Date.now()}`), data, {
        merge: true,
    });
}