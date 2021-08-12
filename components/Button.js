import clsx from "clsx"

export default function Button({ className, children, ...rest }) {

  return (
    <button
    className={clsx("bg-purple-600 text-white rounded-md px-4 py-3 m-2 transition duration-500 ease select-none hover:bg-purple-300 focus:outline-none focus:shadow-outline text-lg font-bold uppercase", className)}

    {...rest}>{children}</button>
  )
}