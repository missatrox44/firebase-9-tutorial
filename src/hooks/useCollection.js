import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

//firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

//custom hook
export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

// set up query -> array of elements
const q = useRef(_q).current

  //get reference to collection and snapshot to collection
  useEffect(() => {
    let ref = collection(db, c);

    //do we have ref? 
    //if value exists use special query
    if (q) {
      ref = query(ref, where(...q))
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c, q]);

  return { documents }
};

//when setting up realtime listener, get an unsubscribe function back (need to this when component unmounts)
