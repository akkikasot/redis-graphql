

export const resolvers = {
  Query: {
    get: async (_, { key }, {client}) => {
      try{

       return {key:key,value:client.getAsync(key)};
       
      }catch(e){
        return null;
      }
    }
  },
  Mutation: {
    set: async (_, { key, value }, {client}) => {
      try{
       await client.set(key, value);
       return {key:key,value:value};
      }catch(e){
        console.log(e);
        return false;
      }
    },
    delete:  async (_, { key }, {client}) => {
      try{
       await client.del(key);
       return true;
      }catch(e){
        console.log(e);
        return false;
      }
    }
   }
};