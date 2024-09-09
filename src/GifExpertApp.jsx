//rafc
import { useEffect, useState } from "react";
import { Login, Home } from "./components";
import FirebaseConfig from './firebase-config';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(FirebaseConfig);


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Naruto']);
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    if (
      categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {user ? <Home emailUser={user.email} onAddCategory={onAddCategory} categories={categories} /> : <Login/>}

    </>
  );
};
