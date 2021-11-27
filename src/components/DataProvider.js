import React, {createContext , useState , useEffect} from "react";

export const DataContext = createContext();
export const DataProvider = (props) =>{
    const [products , setProducts] = useState([
        {
            "_id": "1",
            "title": "watsh product 01",
            "images": [
                "images/1.PNG",
                "images/11.PNG",
                "images/12.PNG",
                "images/13.PNG",
                "images/14.PNG",
                
            ],
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 50,
            "colors":["red","black","crimson"],
            "sizes" : ["XL","L","M","XM","LX"],
            "count": 1
        },
        {
            "_id": "2",
            "title": "watsh product 02",
            "images": [
                "images/2.PNG",
                "images/21.PNG",
                "images/22.PNG",
                "images/23.PNG",
                "images/24.PNG",
                
            ],
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 85,
            "colors":["red","crimson","teal"],
            "sizes" : ["XL","L","M","XM","LX"],
            "count": 1
        },
        {
            "_id": "3",
            "title": "watsh product 03",
            "images": [
                "images/3.PNG",
                "images/31.PNG",
                "images/32.PNG",
                "images/33.PNG",
                "images/34.PNG",
                
            ],
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 50,
            "colors":["lightblue","white","crimson"],
            "sizes" : ["XL","L","M","XM","LX"],
            "count": 1
        },
        {
            "_id": "4",
            "title": "watsh product 04",
            "images": [
                "images/4.PNG",
                "images/41.PNG",
                "images/42.PNG",
                "images/43.PNG",
                "images/44.PNG",
                
            ],
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 115,
            "colors":["orange","black","crimson"],
            "sizes" : ["XL","L","M","XM","LX"],
            "count": 1
        },
        {
            "_id": "5",
            "title": "watsh product 05",
            "images": [
                "images/5.PNG",
                "images/51.PNG",
                "images/52.PNG",
                "images/53.PNG",
                "images/54.PNG",
                
            ],
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 95,
            "colors":["orange","black","crimson"],
            "sizes" : ["XL","L","M","XM","LX"],
            "count": 1
        },
        {
            "_id": "6",
            "title": "watsh product 06",
            "images": [
                "images/6.PNG",
                "images/61.PNG",
                "images/62.PNG",
                "images/63.PNG",
                "images/64.PNG",
                
            ],
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 70,
            "colors":["orange","black","crimson"],
            "sizes" : ["XL","L","M","XM","LX"],
            "count": 1
        }

    ]);

    const [cart , setCart] = useState([]);

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
        setCart([...cart , ...data])
        }
        else{
            alert("the product has been added to cart");
        }
    }

    useEffect(() =>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart')) 
        if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])

   const value = {
        products : [products ,setProducts],
        cart : [cart ,setCart],
        addCart : addCart
    }


    return(
        <DataContext.Provider value={value}>
               {props.children}
        </DataContext.Provider>
    )
}