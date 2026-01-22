import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import SocialButton from '../components/SocialButton'

// Icons
const EmailIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
    viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LockIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
    viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M6 11V8a6 6 0 0112 0v3" />
  </svg>
)

// Password toggle icons
const EyeIcon = (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

const EyeOffIcon = (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.965 9.965 0 012.073-3.275M6.12 6.12l11.76 11.76M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

// Social Icons
const GoogleIcon = (
  <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
    <path fill="#4285F4" d="M533.5 278.4c0-18.2-1.5-36.5-4.8-54H272v102h146.9c-6.4 34.5-25.5 63.7-54.3 83v69h87.5c51-47 80.4-116 80.4-200z" />
    <path fill="#34A853" d="M272 544c73.5 0 135-24.4 180-66.2l-87.5-69c-24.3 16.3-55 25.9-92.5 25.9-71 0-131-47.9-152-112.5h-89.7v70.8C78 469.1 169.8 544 272 544z" />
    <path fill="#FBBC05" d="M120.5 322.2c-5.7-17-9-35.3-9-54s3.3-37 9-54v-70.8h-89.7C7 204 0 241.5 0 272s7 68 30.8 99.6l89.7-70.8z" />
    <path fill="#EA4335" d="M272 107c38.8 0 73.7 13.3 101.2 39.4l75.8-75.8C402 28.1 344.7 0 272 0 169.8 0 78 74.9 50.8 185.4l89.7 70.8C141 154.9 201 107 272 107z" />
  </svg>
)
const GitHubIcon = (
  <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33C4.07 14.91 3.53 13.7 3.53 13.7c-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.5-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.53 7.53 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('All fields are required')
      return
    }
    setError('')
    console.log({ email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 px-4">
      <div className="w-full max-w-md bg-purple-700/90
 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-white mb-6">
          Sign in to your account
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            icon={EmailIcon}
          />
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              icon={LockIcon}
              rightIconSpace={true}
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              {showPassword ? EyeOffIcon : EyeIcon}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition transform hover:scale-[1.02]">
            Sign In
          </button>
        </form>

        <div className="mt-6 space-y-3">
          <SocialButton icon={GoogleIcon} text="Sign in with Google" />
          <SocialButton icon={GitHubIcon} text="Sign in with GitHub" />
        </div>

        <p className="text-sm text-center mt-6 text-white">
          Don’t have an account?
          <Link to="/signup"
            className="text-white font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
