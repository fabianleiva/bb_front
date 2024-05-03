import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PatnersLogo } from "../../components/PatnersLogo"
import axios from "axios"
export const AuthSuccess = () => {

  navigate = useNavigate()

  useEffect(() => { }, [])

  getDataUser = async () => {

    try {
      const response = await axios.get("auth/success")
      console.log(response)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8" >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Bienvenido Ramon Martinez</h2>

        <PatnersLogo />
      </div>
    </div >
  )
}
