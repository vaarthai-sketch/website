import { ImageResponse } from 'next/og';

export const alt = "From the Pastor's Desk - Vaarthai Evangelical Church Inc";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default async function Image() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vaarthai.org.au';
  const bgUrl = `${siteUrl}/pastor-desk-hero.jpg`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
        }}
      >
        <img
          src={bgUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
        }} />

        {/* Text Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 80px',
          zIndex: 10,
        }}>
          <h1 style={{ 
            fontSize: 80, 
            fontWeight: 'bold', 
            marginBottom: 30,
            fontFamily: 'serif',
          }}>
            From the Pastor&apos;s Desk
          </h1>
          <p style={{ 
            fontSize: 36, 
            color: '#e2e8f0', 
            maxWidth: 900, 
            textAlign: 'center',
            lineHeight: 1.4,
          }}>
            Weekly newsletter, reflections, and updates from our pastoral team.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
