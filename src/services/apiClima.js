// const keyApi = 906cb819251f49183121fa17dd007055     essa chave é da previsão do tempo
import axios from 'axios'

const apiClima = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})

export default apiClima
