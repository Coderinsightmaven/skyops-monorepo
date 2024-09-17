import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plane, Lock, User } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"
import "@/App.css"

const backgroundImages = [
  "https://media.discordapp.net/attachments/193541963536924674/1256130974245326898/Screenshot_2024-06-28_000818.png?ex=66e9c762&is=66e875e2&hm=2675f4da486ba3960bd1de75cb9cc9168a35323f6fc78268d770b07776c2e302&=&format=webp&quality=lossless&width=1609&height=905",
  "https://media.discordapp.net/attachments/193541963536924674/1256130975243567124/Screenshot_2024-06-28_000732.png?ex=66e9c762&is=66e875e2&hm=ec7f17b3bc869bb7a971dcac69db69484c5a66951db37d4b9a2a780e732e2718&=&format=webp&quality=lossless&width=1609&height=905",
  "https://media.discordapp.net/attachments/193541963536924674/1234668155172028556/image.png?ex=66e97b13&is=66e82993&hm=c7c0a75b6ec7402eedb619c954a441152a4eddd742f00ae160dd2c806af6d374&=&format=webp&quality=lossless&width=550&height=262",
  "https://media.discordapp.net/attachments/193541963536924674/1234689671804485765/FlightSimulator_2024-04-29_18-58-45_NOPTIC_2.3_MSFS.png?ex=66e98f1d&is=66e83d9d&hm=f119082d1d467e1b0f7e67de2b2efe2263a6d8bc0d009fe6b3cdc64615991bdb&=&format=webp&quality=lossless&width=1609&height=905",
  "https://images-ext-1.discordapp.net/external/X9icBBfo5Ju7ozDI9O5CgqLXH6KRAmnXBl-f6RFDABQ/https/i.imgur.com/Xk65YVX.jpg?format=webp&width=1609&height=905",
  "https://media.discordapp.net/attachments/193541963536924674/1117929813278204034/FlightSimulator_2023-06-12_15-33-03.png?ex=66e9f5c5&is=66e8a445&hm=e96cc539e74f49cecc3eb017964fba82b0060a2b9801db5224edb34872934aa6&=&format=webp&quality=lossless&width=1920&height=804",
  "https://media.discordapp.net/attachments/193541963536924674/868998165037187182/unknown.png?ex=66ea109b&is=66e8bf1b&hm=4e8e390ab544ef12624e147212bbf2f1e6d5781f631a94cf2e986d40cad2ebcb&=&format=webp&quality=lossless&width=550&height=230",
  "https://media.discordapp.net/attachments/193541963536924674/868982266628554792/unknown.png?ex=66ea01cd&is=66e8b04d&hm=46a845ed521a0cf18a440ca52396b405a2d0d64330032a83a84591c6daae9abd&=&format=webp&quality=lossless&width=1920&height=765",
  "https://media.discordapp.net/attachments/193541963536924674/868676126086668318/unknown.png?ex=66e98d6f&is=66e83bef&hm=decbd8a3dc1a8a24c970b94459d75fa941da656eddbd8703aa5fb684277b4e8c&=&format=webp&quality=lossless&width=1920&height=749",
  "https://media.discordapp.net/attachments/193541963536924674/866828922216513576/unknown.png?ex=66ea1557&is=66e8c3d7&hm=b1611a1a6f958f909e4c7ef47d34188febdd9a1dc1d423f7dd5488f34bcd8371&=&format=webp&quality=lossless&width=1920&height=758",
  "https://media.discordapp.net/attachments/193541963536924674/841805238088106016/unknown.png?ex=66ea03b8&is=66e8b238&hm=382170478db216dec947de5da8cd6e7e5ed1072e630b44d3eee313512cc3b65a&=&format=webp&quality=lossless&width=1676&height=905",
  "https://media.discordapp.net/attachments/193541963536924674/839258537531932742/unknown.png?ex=66e9fa6c&is=66e8a8ec&hm=99ab2d95628d96d90a36c6f3a9e5f035916b72fd324c627a995abe82bee87bdc&=&format=webp&quality=lossless&width=1920&height=803",
  "https://media.discordapp.net/attachments/193541963536924674/827056509724524544/unknown.png?ex=66e9c0a5&is=66e86f25&hm=2dc623b009d9fc7ae2fd6479a738ef27345b2429d7bda5372cc53989fc64d8a6&=&format=webp&quality=lossless&width=1920&height=803",
]

export default function Component() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      skipSnaps: false,
      startIndex: 0
    }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', username, password)
  }

  useEffect(() => {
    if (emblaApi) {
      // Additional setup if needed
    }
  }, [emblaApi])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="embla w-full h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {backgroundImages.map((image, index) => (
              <div key={index} className="embla__slide w-full h-full flex-[0_0_100%]">
                <img
                  src={image}
                  alt={`Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out hover:scale-105">
          <div className="mb-8 flex items-center justify-center">
            <Plane className="mr-2 h-12 w-12 text-blue-600 animate-bounce" />
            <h1 className="text-3xl font-bold text-gray-900">SkyOps Login</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              Take Off
            </Button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Sign up
            </a>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  )
}