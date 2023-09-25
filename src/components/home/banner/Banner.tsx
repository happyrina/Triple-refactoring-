interface BannerProps {
  tag: string
  title: string
  img: string
  bgColor: string
  destination: string
  moreLink: string
  backgroundColor: string
}

function Banner({
  tag,
  title,
  img,
  bgColor,
  destination,
  moreLink,
  backgroundColor,
}: BannerProps) {
  return (
    <div
      style={{
        whiteSpace: 'nowrap',
        flex: 1,
        marginLeft: '48px',
      }}
    >
      <div
        style={{
          backgroundColor: backgroundColor || '#00AAFF',
          width: 360,
          height: 186,
          borderRadius: 10,
          padding: 3,
          position: 'relative',
          overflow: 'hidden',
          margin: 10,
        }}
      >
        {bgColor}
        <div
          style={{
            width: 220,
            height: 20,
            color: 'white',
            fontSize: 15,
            marginBottom: 10,
            marginTop: 40,
            marginLeft: 20,
            fontWeight: 400,
          }}
        >
          {tag}
        </div>
        <div
          style={{
            width: 300,
            height: 100,
            color: 'white',
            whiteSpace: 'pre-line',
            fontSize: 22,
            fontWeight: 700,
            marginLeft: 20,
            marginBottom: 15,
            letterSpacing: 1.5,
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: 150,
            backgroundColor: 'red',
            position: 'absolute',
            right: 18,
            top: 37,
            overflow: 'hidden',
            backgroundSize: 'cover',
            zIndex: 1,
          }}
        >
          <img
            src={img}
            alt="imglogo"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: 150,
            backgroundColor: '#FF9999',
            position: 'absolute',
            right: -50,
            top: 37,
            overflow: 'hidden',
            backgroundSize: 'cover',
          }}
        ></div>

        <div
          style={{
            width: 25,
            height: 13,
            border: '1px solid white',
            color: 'white',
            borderRadius: 3,
            padding: 5,
            marginLeft: 20,
            position: 'absolute',
            bottom: 22,
            fontSize: 12,
            textAlign: 'center',
          }}
        >
          {destination}
        </div>
        {moreLink != null ? (
          <div
            style={{
              width: '90px',
              height: 25,
              backgroundColor: 'rgb(0, 0, 0, 0.5',
              color: 'white',
              zIndex: 3,
              position: 'relative',
              left: 260,
              bottom: 37,
              borderRadius: 20,
              textAlign: 'center',
              lineHeight: 1.8,
              padding: 2,
            }}
          >
            <a
              href={moreLink}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              모아보기 +
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Banner
