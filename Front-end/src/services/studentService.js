import httpClient from '../http-common';

const getAll=()=>{
   return httpClient.get('/students');
}

const create=(data)=>{
   return httpClient.post('/add/student',data);

}

const get=(id)=>{
   return httpClient.get(`/get/student/${id}`);

}

const update=(data)=>{
   return httpClient.put('/update/student',data);
}

const remove=(id)=>{
   return httpClient.delete(`/delete/student/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll,create,get,update,remove};
