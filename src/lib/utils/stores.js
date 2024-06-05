import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "$lib/utils/firebase.js";
import {writable} from "svelte/store";
import {setDoc} from "firebase/firestore";

export const authStore = writable({
    loading: true,
});

export const authHandlers = {
    signIn: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    }
}

let lastUpload = 0
export let unsavedChanges = false; // TODO use this to show a warning
async function uploadStore(store) {
    console.log('uploading store')
    if (Date.now() - lastUpload < 15000 || store.loading) {
        if (unsavedChanges) {
            setTimeout(() => uploadStore(store), 15500 - (Date.now() - lastUpload))
        }
        unsavedChanges = true
        return
    }
    await setDoc(store.groupRef, store.data, {merge: true})
    lastUpload = Date.now()
    unsavedChanges = false
}

export async function forceUploadStore() {
    console.log('force uploading store')
    lastUpload = 0;
    await uploadStore(authStore)
}

authStore.subscribe(uploadStore)