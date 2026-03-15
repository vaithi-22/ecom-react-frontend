import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

export const flashMessageAtom = atom({
    message: "",
    type: "info" // info, danger, success
});

//let timeoutId = null;

export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    const showMessage = (message, type = "info") => {
        // if there is an ongoing timer, clear it
        // if (timeoutId) {
        //     clearTimeout(timeoutId);
        // }

        setFlashMessage({ "message":message, "type":type });

        // clear the flash message after 2 seconds
        setTimeout(clearMessage, 5000);
    };

    const clearMessage = () => {

        // if (timeoutId) {
        //     clearTimeout(timeoutId);
        //     timeoutId = null;
        // }

        setFlashMessage({ message: "", "info": "" });
    };

    return {
        flashMessage,showMessage,clearMessage
    };
}
