import { useState, useEffect } from "react";
import { db } from "../firebase/config";

//firebase imports
import { collection, onSnapshot } from "firebase/firestore";

//custom hook
export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  //get reference to collection and snapshot to collection
  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents }
};

//when setting up realtime listener, get an unsubscribe function back (need to this when component unmounts)
