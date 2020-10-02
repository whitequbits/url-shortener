import styles from "./InputForm.module.css";

export default function InputForm(props) {
  return (
    <div className={styles.container}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="input"
          >
            Url Shortener
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input"
            type="text"
            onChange={props.handleChange}
            placeholder="Please input your link"
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={props.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
