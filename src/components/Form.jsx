import { useState } from 'react'
import useWeather from '../hooks/useWeather'

const Form = () => {
  const [alert, setAlert] = useState('')
  const {search, dataSearch, getWeather} = useWeather()

  const {ciudad, pais} = search

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(search).includes('')){
      setAlert('Todos los campos son obligatorios')
      return
    }

    getWeather(search)
  }


  return (
    <div className='contenedor'>
      {alert && <p className='alert'>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" id="ciudad" name='ciudad' onChange={dataSearch} value={ciudad}/>
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select id='pais' name='pais' onChange={dataSearch} value={pais}>
            <option value="">--- Seleccine un País --- </option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="DO">República Dominicana</option>
            <option value="PR">Puerto Rico</option>
            <option value="JP">Japón</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>
        <input type="submit" value='Consultar Clima' />
      </form>
    </div>
  )
}

export default Form