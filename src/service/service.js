// src/services/experience.service.js
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot
} from 'firebase/firestore'
import { db } from '@/firebase'
import { storage } from '@/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const uploadImage = async (file, path) => {
    const storageRef = ref(storage, path)
    await uploadBytes(storageRef, file)
    return await getDownloadURL(storageRef)
}


const colRef = collection(db, 'experience')

// REALTIME LISTENER
export const listenExperiences = (callback) => {
    return onSnapshot(colRef, (snap) => {
        const data = snap.docs.map(d => ({
            id: d.id,
            ...d.data()
        }))
        callback(data)
    })
}

// CREATE
export const createExperience = (payload) => {
    return addDoc(colRef, payload)
}

// UPDATE
export const updateExperience = (id, payload) => {
    return updateDoc(doc(db, 'experience', id), payload)
}

// DELETE
export const deleteExperience = (id) => {
    return deleteDoc(doc(db, 'experience', id))
}
