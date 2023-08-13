import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const validationSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    category: z.string(),
    document: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    time: z.string().min(6)
  })

  type ValidationSchema = z.infer<typeof validationSchema>;

export const CreateTickets = () => {

  const [sucess, updateSucess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    reset();

    try {
      axios.defaults.headers.common = {
        "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY
      }
      
      
       await axios.post('https://oyvlmrxflndhbcpzlubn.supabase.co/rest/v1/users', data, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Content-Type': 'application/json',
        },
        
      });
      updateSucess(true)
      
      setInterval(() => {
        updateSucess(false)
      }, 3000)
      
    } catch (error) {
      console.log(error)
    }

   
    
  }
  return (
    <>
    {sucess && (
      <div className="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Your purchase has been confirmed!</span>
    </div>
    )}
    <div className="flex justify-center my-24">
      
      <form onSubmit= {handleSubmit(onSubmit)}>
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors.name && (
  <p className="text-xs italic text-red-500 mt-2"> {errors.name?.message}
  </p>)}

        <label className="label">
          <span className="label-text">What is your documet?</span>
        </label>
        <input
          type="number"
          id="document"
          {...register("document")}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors.document && (
  <p className="text-xs italic text-red-500 mt-2"> {errors.document?.message}
  </p>)}

        <label className="label">
          <span className="label-text">What is your spórt?</span>
        </label>
        <select className="select select-bordered w-full max-w-xs" id="category" {...register("category")}> 
          <option disabled selected >
            Who shot first?
          </option>
          <option>Basket</option>
          <option>Fut</option>
        </select>

        {errors.category && (
  <p className="text-xs italic text-red-500 mt-2"> {errors.category?.message}
  </p>)}
        <label className="label">
          <span className="label-text">What day?</span>
        </label>
        <input
          id="time"
          {...register("time")}
          type="datetime-local"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors.time && (
  <p className="text-xs italic text-red-500 mt-2"> {errors.time?.message}
  </p>)}

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </>

  )
}
