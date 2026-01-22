function SocialButton({ icon, text, onClick, bgColor = 'bg-white', textColor = 'text-gray-700' }) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} w-full flex items-center justify-center gap-3 py-3 rounded-xl border 
        hover:shadow-md hover:scale-[1.02] transition-transform transition-shadow duration-200`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  )
}

export default SocialButton
