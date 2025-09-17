import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VibeyTest - Lean Testing Framework'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: 800,
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
              letterSpacing: '-2px',
            }}
          >
            VibeyTest
          </div>

          <div
            style={{
              fontSize: 28,
              color: '#cbd5e1',
              marginBottom: '30px',
              lineHeight: 1.3,
            }}
          >
            A lean testing framework for vibes and user experience validation
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: 22,
              color: '#94a3b8',
            }}
          >
            <div>by vibes.engineering</div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: 18,
            color: '#64748b',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <div>Farcaster Mini App</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}