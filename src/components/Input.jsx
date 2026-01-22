function Input({ type = "text", placeholder, value, onChange, icon, rightIconSpace = false }) {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white
          ${icon ? 'pl-11' : ''} ${rightIconSpace ? 'pr-11' : ''} 
          transition duration-200 ease-in-out
          hover:scale-[1.01] hover:shadow-sm`} />
    </div>
  )
}

export default Input
