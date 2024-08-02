import axios from "axios";

export default {
    addCustomer:(args)=>{

        return axios.post('/api/customer/addCustomer', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    getCustomers:(args)=>{

       return axios.post('/api/customer/getCustomers', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    deleteCustomer:(args)=>{

       return axios.post('/api/customer/deleteCustomer', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

}