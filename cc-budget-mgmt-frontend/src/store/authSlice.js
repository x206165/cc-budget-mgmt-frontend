import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

export const logInAsync = createAsyncThunk(
    'auth/logInAsync', 
    async({usuario, password}) =>{
        try {
            console.log("usuario en authSlice = " + usuario );
            {/* aqui va la llamada de Axios*/}
            return { usuario : "RICARDO1", password : "claveSecreta", token : "12345", isAuth:true }
        } catch (error) {
            console.log(error);
            return { usuario: null, password:null, token : "na", isAuth:false }
        }
    }
)

const token = "9876";

const initialState = {
    isAuth:false, 
    usuario:null,
    password:null,
    token: token ? token:null 
}

export const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        logIn: (state,action)=>{
            const{ usuario, password } = action.payload;
            console.log(action);
            state.isAuth = true;
            state.usuario = usuario;
            
        },
        logOut: (state, action)=>{
            console.log(action);
            state.isAuth = false;
            state.usuario = null;
        }

    }, 
    extraReducers:{
        [logInAsync.fulfilled]:(state,action)=>{
            const { usuario, password, isAuth } = action.payload;
            state.isAuth = isAuth;
            state.usuario = usuario;
            state.password = password;
        }
    }
})

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;

