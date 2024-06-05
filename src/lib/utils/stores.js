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

let lastUpload = Date.now()
let activeTimeout = false
export let unsavedChanges = false; // TODO use this to show a warning
async function uploadStore(store, fromTimeout = false) {
    if ((Date.now() - lastUpload < 15000 || store.loading)) {
        if (store.loading) {
            lastUpload = Date.now()
            return
        }
        console.log(activeTimeout)
        if (!activeTimeout && !fromTimeout) {
            setTimeout(() => uploadStore(store, true), 15500 - (Date.now() - lastUpload))
            activeTimeout = true
            unsavedChanges = true
        } else if (fromTimeout) {
            activeTimeout = false
        }
        return
    }
    lastUpload = Date.now()
    unsavedChanges = false
    activeTimeout = false
    await setDoc(store.groupRef, store.data, {merge: true})
    console.log('uploaded store')
}

export async function forceUploadStore() {
    console.log('force uploading store')
    lastUpload = 0;
    authStore.update(store => store)
}

authStore.subscribe(uploadStore)