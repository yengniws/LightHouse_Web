import { useState } from "react";
import { storage } from "../src/login/firebase-config";
import {
    getDownloadURL,
  getStorage,
  ref,
  uploadBytes
} from "firebase/storage";

const UploadImage = ({ setImage }: { setImage:(p: string) =>
void }) => {
    const [imageURL, setImageURL] = useState<string>("");

    const onImageChange = (
        e: React.ChangeEvent<EventTarget & HTMLInputElement>
    ) => {
        e.preventDefault();
        const file = e.target.files;
        if (!file) return null;

        const storageRef = ref(storage, 'files/${file[0].name}');
        const uploadTask = uploadBytes(storageRef, file[0]);

        uploadTask.then((snapshot) => {
            e.target.value = "";
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                setImageURL(downloadURL);
                setImage(downloadURL);
            })
        })
    }
}

export default UploadImage