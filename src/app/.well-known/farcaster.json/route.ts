import { NextResponse } from 'next/server'

export async function GET() {
  const farcasterManifest = {
    accountAssociation: {
      header: "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload: "eyJkb21haW4iOiJ2aWJlc2VuZ2luZWVyaW5nLXZpYmV5dGVzdGxlYW4tdGVzdC16ZXRhLnZlcmNlbC5hcHAifQ",
      signature: "MHhiMTNkYTNlYjhiNzUzNDE5N2RiYzc4OWI5ODFlNWE5NjYzMTg4NGNhN2ExODJiODZjZWI1NjJmNzJiMzVhM2Q1MTVlOWNlMmUyMjllMmFiM2I5MTdhMmMxNGJhYWNjNjc2OTU0MmVjMDA1YmMyMTgyYmQ3ZDM1MjAxN2ViODVkZTFj"
    },
    miniapp: {
      version: "1",
      name: "Vibes Vite Template",
      iconUrl: "https://vibes-engineering-vite-template.vercel.app/logo.png",
      homeUrl: "https://vibes-engineering-vite-template.vercel.app",
      imageUrl: "https://vibes-engineering-vite-template.vercel.app/splash.png",
      buttonTitle: "Open Vibes Template",
      splashImageUrl: "https://vibes-engineering-vite-template.vercel.app/splash.png",
      splashBackgroundColor: "#eeccff"
    }
  }

  return NextResponse.json(farcasterManifest)
}