import useWeather from "../hooks/useWeather"
import Spinner from "../components/Spinner"
import Form from "./Form"
import Result from "./Result"

const AppWeather = () => {
  const { result, loading } = useWeather()

  return (
    <>
      <main className='dos-columnas'>
        <Form/>

        {loading ? <Spinner/> : result?.name && <Result/>}
      </main>
    </>
  )
}

export default AppWeather