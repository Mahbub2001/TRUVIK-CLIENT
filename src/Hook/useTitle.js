const { useEffect } = require("react")

const useTitle = title =>{

    useEffect(()=>{

        document.title = `${title} - TRUVIK`;

    },[title])
}

export default useTitle;