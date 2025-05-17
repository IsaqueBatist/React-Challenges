import { useForm } from "react-hook-form";
import BackToHome from "../../components/BackToHome";
import { useState } from "react";

interface IFormData {
  username: string,
  fullName: string,
  age: number
}

export default function Challenge5() {
  const [isToBeShowed, setIsToBeShowed] = useState(false)
  const [submittedData, setSubmittedData] = useState<IFormData>({} as IFormData)
  const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm<IFormData>({
    mode: "all",
  })
  function onsubmit(data: IFormData) {
    setIsToBeShowed(false)
    console.log(data)
    if(isValid){
      setIsToBeShowed(true)
      setSubmittedData(data)
      reset()
    }
  }

  return (
        <div className='flex flex-col gap-8 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md'>
          <BackToHome />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Challenge5</h2>
            <form
              onSubmit={handleSubmit(onsubmit)}
              className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-6"
            > 

              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username",{
                    required: "Username is required"
                  })}
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.username && <p className="text-red-600">{errors.username.message}</p>}
              </div>

              {/* Nome Completo */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Fullname
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName",{
                    required: "Fullname is required"
                  })}
                  placeholder="Enter your Fullname"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.fullName && <p className="text-red-600">{errors.fullName.message}</p>}
              </div>

              {/* Idade */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  {...register("age",{
                    required: "Age is required"
                  })}
                  placeholder="Enter your age"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.age && <p className="text-red-600">{errors.age.message}</p>}
                <p></p>
              </div>

              {/* Botão */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit
            </button>
          </form>
          {isToBeShowed && (
            <>
              <p className="font-bold">Request sent to DB with below request data</p>
              <ul>
                <li>UserName: {submittedData.username}</li>
                <li>FullName: {submittedData.fullName}</li>
                <li>Age: {submittedData.age}</li>
              </ul>
            </>
          )}
          </div>
  )
}
