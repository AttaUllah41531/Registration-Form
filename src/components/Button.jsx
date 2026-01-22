function Button({ children, type = "submit" }) {
  return (
    <button
      type={type}
      className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
    >
      {children}
    </button>
  )
}

export default Button
