import { useState ,useEffect} from 'react'

  
const useLocalStorage = (key, defaultValue) => {
  
   const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            if (saved !== null) {
                return JSON.parse(saved);
            }
            return defaultValue;
        } catch {
            return defaultValue;
        }
        
    });

      useEffect(() => {
        const rawValue = JSON.stringify(value);
        localStorage.setItem(key, rawValue);
    }, [key, value]);

    return [value, setValue];
};
  // return (
  //   <div>UseLocalstorage</div>
  // )

export default useLocalStorage;