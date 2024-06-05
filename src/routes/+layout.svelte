<script>
    import "../app.css";
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import {auth, db} from "$lib/utils/firebase"
    import {onMount} from "svelte"
    import {doc, getDoc, onSnapshot} from "firebase/firestore"
    import {authStore} from "$lib/utils/stores.js"

    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            const view = window.location.pathname.split('/')[1]
            if (!user && view !== 'login') {
                window.location.href = '/login' // TODO : create login.svelte
                return
            }
            if (!user) return

            if (user && view === 'login') {
                window.location.href = '/'
            }

            const groupIDSnap = await getDoc(doc(db, 'groupIDs', user.uid))
            if (!groupIDSnap.exists()) {
                window.location.href = '/joinGroup' //  TODO: create joinGroup.svelte and resolve loop issue
            } else {
                const groupRef = doc(db, 'groups', groupIDSnap.data().id)
                const groupSnap = await getDoc(groupRef)
                user.name = user.email.split('@')[0].replace(/^./, char => char.toUpperCase())
                authStore.update(store => {
                    return {
                        ...store,
                        loading: false,
                        user: user,
                        groupRef: groupRef,
                        data: groupSnap.data()
                    }
                })
                onSnapshot(groupRef, (groupSnap) => {
                    authStore.update(store => {
                        return {
                            ...store,
                            data: groupSnap.data()
                        }
                    })
                })
            }
        })
    })
</script>

<div class="p-3 h-screen">
    <slot/>
</div>