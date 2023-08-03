// 브로우저 로컬스토리지
const storage = window.localStorage;

//setter 데이터 저장하기
export const setItem = (key, value) => {
    try {
        storage.setItem(key, value);
    } catch (e) {
        console.log(e);
    }
}

//getter 데이터 가져오기
export const getItem = (key, defaultValue) => {
    try{
        const storedValue = storage.getItem(key);
        
        if (storedValue) {
            return JSON.parse(storedValue);
        }

        return defaultValue;
    } catch (e) {
        console.log(e);
        return defaultValue;
    }
}