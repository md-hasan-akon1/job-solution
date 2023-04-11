import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddToDb=(id)=>{
    let shoppingCart=getShoppingCart()
    const quantity=shoppingCart[id];
    if(quantity){
        toast("Wow so easy!");
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart));
    
    }
    
    const getShoppingCart=()=>{
        let shoppingCart={}
        const storedCart=localStorage.getItem('shopping-Cart');
        if(storedCart){
            shoppingCart=JSON.parse(storedCart);
        }
        return shoppingCart; 
    }
   
    export{AddToDb,
        getShoppingCart,
      
    }