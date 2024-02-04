const BalanceApiSlice = {
    checkBalance: async (userData) => {
      try {
        const response = await fetch(`${process.env.BASE_URL}/api/balance`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        return response.json();
      } catch (error) {
        throw new Error(`API Error: ${error.message}`);
      }
    },
    updateBalance: async (userData) => {
      try {
        const response = await fetch(`${process.env.BASE_URL}/api/balance/update`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }
        console.log(response)
        return response.json();
       }catch (error) {
        throw new Error(`API Error: ${error.message}`);
       }
    }
  
  };
  
  export default BalanceApiSlice;
  