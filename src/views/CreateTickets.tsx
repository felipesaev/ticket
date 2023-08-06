export const CreateTickets = () => {
  return (
    <div className="flex justify-center my-24">
      <form>
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label">
          <span className="label-text">What is your documet?</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label">
          <span className="label-text">What is your spórt?</span>
        </label>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Basket</option>
          <option>Fut</option>
        </select>

        <label className="label">
          <span className="label-text">What day?</span>
        </label>
        <input
          type="datetime-local"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

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
  )
}
